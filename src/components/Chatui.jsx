import React, { useState } from "react";
import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";

function ChatInterface() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome! Ask a DSA question to begin." },
  ]);
  const [input, setInput] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [copiedMessageIndex, setCopiedMessageIndex] = useState(null);
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Append user message
    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
    ]);

    // Show the thinking animation
    setIsThinking(true);

    // Simulate bot response
    const botResponse = {
      sender: "bot",
      text: "Here's a possible solution for your query. Let me know if you need more details!",
    };

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        botResponse,
      ]);

      // Save the conversation (user and bot messages) to history
      setConversationHistory((prevHistory) => {
        if (
          prevHistory.length > 0 &&
          prevHistory[prevHistory.length - 1].messages.length % 2 === 0
        ) {
          prevHistory[prevHistory.length - 1].messages.push(userMessage);
          prevHistory[prevHistory.length - 1].messages.push(botResponse);
        } else {
          return [
            ...prevHistory,
            { messages: [userMessage, botResponse] },
          ];
        }
        return prevHistory;
      });

      // Hide the thinking animation
      setIsThinking(false);
    }, 2000); // Simulate 2 seconds delay for bot response

    setInput("");
  };

  const handleNewConversation = () => {
    setMessages([{ sender: "bot", text: "Welcome! Ask a DSA question to begin." }]);
    setInput("");
  };

  const handleToggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  const handleSelectConversation = (index) => {
    const selectedConversation = conversationHistory[index];
    setMessages(selectedConversation.messages);
    setIsHistoryVisible(false); // Close history dropdown
  };

  const handleCopyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMessageIndex(index);
      setTimeout(() => setCopiedMessageIndex(null), 2000); // Reset after 2 seconds
    });
  };

  return (
    <Section id="chat">
      <div className="container mx-auto py-12">
        <Heading className="text-center" title="Learn and Practice DSA with AI" />

        {/* Chat Interface Container */}
        <div className="shadow-lg p-10 rounded-lg max-w-7xl mx-auto bg-gray-800 text-white flex flex-col h-[700px]">
          {/* Button Container */}
          <div className="flex justify-between mb-4">
            {/* New Conversation Button */}
            <Button
              onClick={handleNewConversation}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105 hover:shadow-lg hover:text-white"
            >
              New Conversation
            </Button>

            {/* History Button */}
            <Button
              onClick={handleToggleHistory}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105 hover:shadow-lg hover:text-white"
            >
              {isHistoryVisible ? "Close History" : "View History"}
            </Button>
          </div>

          {/* Show History Dropdown */}
          {isHistoryVisible && (
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg space-y-2 mb-4">
              <h4 className="text-center text-white text-lg font-semibold">Previous Conversations</h4>
              {conversationHistory.length === 0 ? (
                <p className="text-center text-white">No previous conversations available</p>
              ) : (
                conversationHistory.map((_, index) => (
                  <div
                    key={index}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-600 rounded-lg"
                    onClick={() => handleSelectConversation(index)}
                  >
                    Previous Conversations
                  </div>
                ))
              )}
            </div>
          )}

          {/* Chat History */}
          <div className="flex-grow overflow-y-auto border border-gray-700 rounded-lg p-6 bg-gray-900 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg max-w-[70%] ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-700 text-white self-start"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{message.text}</span>
                  {message.sender === "bot" && message.text !== "Welcome! Ask a DSA question to begin." && (
                    <Button
                      onClick={() => handleCopyToClipboard(message.text, index)}
                      className="text-sm bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      Copy
                    </Button>
                  )}
                </div>
                {copiedMessageIndex === index && message.sender === "bot" && (
                  <p className="text-green-500 text-xs mt-2">Response copied to clipboard!</p>
                )}
              </div>
            ))}

            {/* Thinking Animation */}
            {isThinking && (
              <div className="self-start bg-gray-700 text-white p-4 rounded-lg flex items-center space-x-2">
                <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                <span>Thinking...</span>
              </div>
            )}
          </div>

          {/* Input Section */}
          <div className="mt-6 border-t border-gray-700 pt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-4"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a DSA question..."
                className="flex-grow px-4 py-3 rounded-lg border border-gray-500 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105 hover:shadow-lg hover:text-white"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ChatInterface;
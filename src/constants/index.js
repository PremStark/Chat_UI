import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "File Upload",
    url: "#upload",
  },
  {
    id: "1",
    title: "Chat with Logs",
    url: "#chat",
  },
  {
    id: "2",
    title: "Create Logs",
    url: "#create",
  },
  {
    id: "3",
    title: "Master Agent",
    url: "#master",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const benefits = [
  {
    id: "0",
    title: "File Upload",
    text: "Easily upload and manage your documents securely.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    linkUrl: "/upload",  // Route to the Upload component
  },
  {
    id: "1",
    title: "Chat with Logs",
    text: "Interact with our AI to analyze and understand your logs.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
    linkUrl: "/chat",  // Route to the Chat component
  },
  {
    id: "2",
    title: "Create Logs",
    text: "Generate new log data for comprehensive analysis.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    linkUrl: "/create",  // Route to the Create component
  },
  {
    id: "3",
    title: "Master Agent",
    text: "Get advanced insights and recommendations from our AI.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    linkUrl: "/master",  // Route to the Master component
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "1",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

import Mark from "../assets/images/avatar-mark-webber.webp";
import Angela from "../assets/images/angela-gray.webp";
import Jacob from "../assets/images/jacob-thompson.webp";
import Rizky from "../assets/images/rizky-hassanuddin.webp";
import Kimberly from "../assets/images/avatar-kimberly-smith.webp";
import Nathan from "../assets/images/avatar-nathan-peterson.webp";
import Anna from "../assets/images/image-chess.webp";

export const NOTIFICATIONS = [
  {
    userImg: Mark,
    name: "Mark Webebr",
    notify: "reacted to your recent post",
    reactedTo: "My first tournament today!",
    time: "1min ago",
    hasRead: false,
    content: "",
  },
  {
    userImg: Angela,
    name: "Angela Gray",
    notify: "followed you",
    reactedTo: "",
    time: "5min ago",
    hasRead: false,
    content: "",
  },
  {
    userImg: Jacob,
    name: "Jacob Thompson",
    notify: "has joined your group",
    reactedTo: "Chess Club",
    time: "1day ago",
    hasRead: false,
    content: "",
  },
  {
    userImg: Rizky,
    name: "Rizky Hassanuddin",
    notify: "sent you a private message",
    reactedTo: "",
    time: "3days ago",
    hasRead: true,
    content:
      "Hello, thanks for setting up the chess club. I've been a memeber for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    userImg: Kimberly,
    name: "Kimberly Smith",
    notify: "commented on your photo",
    reactedTo: "",
    time: "1week ago",
    hasRead: true,
    content: "",
  },
  {
    userImg: Nathan,
    name: "Nathan Peterson",
    notify: "reacted to your recent post",
    reactedTo: "5 end-game strategies to increase your win rate",
    time: "2weeks ago",
    hasRead: true,
    content: "",
  },
  {
    userImg: Anna,
    name: "Anna Kim",
    notify: "left the group",
    reactedTo: "Chess Club",
    time: "2weeks ago",
    hasRead: true,
    content: "",
  },
];

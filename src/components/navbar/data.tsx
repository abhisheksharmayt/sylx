import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/projects",
    text: "projects",
  },
  {
    id: 3,
    url: "/experience",
    text: "experience",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/about",
    text: "about",
  },
  // {
  //     id: 6,
  //     url: '/profile',
  //     text: 'profile',
  // },
];

export const social = [
  {
    id: 1,
    url: "mailto:abhisheksharmayt2@gmail.com",
    icon: <SiGmail/>,
  },
  {
    id: 2,
    url: "https://github.com/abhisheksharmayt",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/abhisheksharmayt",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.leetcode.com/abhisheksharmayt",
    icon: <SiLeetcode />,
  },
  {
    id: 5,
    url: "https://www.twitter.com/abhishheksharma",
    icon: <FaTwitter />,
  },
];

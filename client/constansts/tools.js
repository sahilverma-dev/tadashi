// icons

import { IoImages as ImageIcon } from "react-icons/io5";
import { MdOndemandVideo as VideoIcon } from "react-icons/md";
import {
  FaPlay as PlayIcon,
  FaUser as ProfileIcon,
  FaMobileAlt as MobileIcon,
} from "react-icons/fa";
import { MdMonitor as TVIcon } from "react-icons/md";

export const toolsData = [
  {
    name: "Posts Downloader",
    icon: <ImageIcon />,
    description:
      "Instagram photo downloader provided by Tadashi is a great tool for saving images from Instagram posts. With Tadashi you can download a single posts image as well as download multiple Instagram photos.",
    underDev: false,
    route: "/tools/posts-downloader",
  },

  {
    name: "Reels Downloader",
    icon: <PlayIcon />,
    description:
      "REEL is a new video format that clone the principle of TikTok. Download Instagram REEL videos with help of Tadashi. Our REEL downloader can help you to save your favorite Reels videos.",
    underDev: false,
    route: "/tools/reels-downloader",
  },
  {
    name: "IGTV Downloader",
    icon: <TVIcon />,
    description:
      "IGTV is a long video type, in case you can’t watch it now, you can download IGTV videos to your device, to be sure that you can return to watching later, without need to be online or in case the IGTV can be deleted.",
    underDev: false,
    route: "/tools/igtv-downloader",
  },
  {
    name: "Video Downloader",
    icon: <VideoIcon />,
    description:
      "Tadashi is created to enable you to download IG videos for any purpose you want. Tadashi supports video downloading for singular video and multiple video from carousels.",
    underDev: false,
    route: "/tools/video-downloader",
  },
  {
    name: "Story Downloader",
    icon: <MobileIcon />,
    description:
      "No more 24-hours limits. Download Instagram story with no efforts. There is nothing more simple than that. Watch favorite Stories whenever you want to get inspired",
    underDev: true,
    route: "/tools/story-downloader",
  },
  {
    name: "Profile Posts Downloader",
    icon: <ProfileIcon />,
    description:
      "Perform the steps described in the section above – enter a username, find the main photo by using the Insta-zoom.io site. After these actions, it remains only to tap on Download. In ten seconds the photo will be saved on your smartphone or computer.",
    underDev: false,
    route: "/tools/profile-downloader",
  },
];

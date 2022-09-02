// icons
import {
  MdVerified as VerifiedIcon,
  MdOpenInNew as OpenIcon,
} from "react-icons/md";
import { FaPlay as PlayIcon } from "react-icons/fa";
import {
  BsImage as ImageIcon,
  BsCameraVideoFill as VideoIcon,
} from "react-icons/bs";

const PostCard = ({ userData, post, reels, shortcode }) => {
  return (
    <div className="w-full p-2 border dark:border-none bg-gray-100 dark:bg-dark-400 shadow-lg rounded-lg">
      <div className="relative">
        {shortcode && (
          <a
            href={`https://instagram.com/p/${shortcode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 aspect-square flex items-center justify-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg p-3 dark:bg-dark-900 dark:hover:bg-dark-500 focus:outline-none dark:focus:ring-dark-100/40"
          >
            <OpenIcon />
          </a>
        )}
        {post?.isVideo && (
          <a
            href={post?.videoResources[0]?.src}
            target="_blank"
            rel="noreferrer"
          >
            <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-7xl opacity-70" />
          </a>
        )}
        <a
          href={post?.resources[0]?.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={post?.thumbnail || "https://i.stack.imgur.com/6M513.png"}
            alt={`Image From ${userData?.username}`}
            loading="lazy"
            className={`w-full h-auto border dark:border-none object-cover rounded-lg ${
              reels ? "aspect-[9/16]" : "aspect-square"
            } `}
          />
        </a>
      </div>
      <div className="flex mt-2 gap-1">
        <a
          href={`https://www.instagram.com/${userData?.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold"
        >
          <img
            src={userData?.profilePic}
            alt={userData?.fullName}
            loading="lazy"
            className="rounded-full md:h-12 h-8 w-auto border dark:border-none aspect-square"
          />
        </a>
        <div className="ml-1 dark:text-white">
          <a
            href={`https://www.instagram.com/${userData?.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="md:text-xl text-sm font-bold"
          >
            {userData?.fullName}
          </a>
          <div className="flex">
            <a
              href={`https://www.instagram.com/${userData?.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-xs text-[10px] text-dark-900 dark:text-gray-200"
            >
              @{userData?.username}
            </a>
            {userData?.isVerified && (
              <VerifiedIcon
                className="text-blue-500 mx-1"
                title="A verified account"
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 border dark:border-none p-2">
        <div className="grid grid-cols-2 gap-2">
          {post?.resources?.map((item, index) => (
            <a
              href={item?.src}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-dark-900 dark:hover:bg-dark-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <ImageIcon className="inline-flex mr-2  " />
              {item?.width}px
            </a>
          ))}
          {post?.isVideo && (
            <>
              {post?.videoResources?.map((item, index) => (
                <a
                  href={item?.src}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-dark-900 dark:hover:bg-dark-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <VideoIcon className="inline-flex  mr-2" />
                  {item?.width}px
                </a>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;

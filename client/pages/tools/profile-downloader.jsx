import React, { useState } from "react";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

import { motion } from "framer-motion";

import axios from "axios";
import { IoMdDownload as DownloadIcon } from "react-icons/io";
import { MdContentPaste as ClipboardIcon } from "react-icons/md";
import { IoClose as ClearIcon } from "react-icons/io5";
import { AiOutlineLink as LinkIcon } from "react-icons/ai";
import { ImSpinner3 as SpinnerIcon } from "react-icons/im";
import { API_URL } from "../../constansts/api";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "next-themes";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { toast } from "react-toastify";
import { instaReelId, instaUsername, validURL } from "../../utilities";
import { useRouter } from "next/router";

const ProfileDownload = () => {
  const [link, setLink] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [showVideo, setShowVideo] = useState(true);
  const router = useRouter();

  const { theme } = useTheme();
  const handleChange = (e) => {
    console.log(e.target.value);
    setLink(e.target.value);
  };
  const handleClipboard = async (e) => {
    e.preventDefault();
    const linkFromClipboard = await navigator.clipboard.readText();
    setLink(linkFromClipboard);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validURL(link)) {
      const username = instaUsername(link);
      router.push(`/user/${username}`);
    } else {
      toast.error("Invalid link.", {
        theme,
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };
  return (
    <Layout title="Reels Downloader" description="reels downloader">
      <section className="bg-gray-200 p-2 flex items-center dark:bg-dark-500">
        <div className="bg-white dark:bg-dark-800 my-1 rounded-lg w-full h-full max-w-7xl mx-auto p-1 md:p-4">
          <h1 className="max-w-4xl mx-auto w-full text-center font-bold text-2xl md:text-4xl my-4 md:my-12">
            Paste or enter the link of the public Profile.
          </h1>
          <div className="border dark:border-dark-100 rounded-lg max-w-4xl mx-auto w-full p-1 md:p-3">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 w-full ">
                <div className="flex gap-2 w-full">
                  <span className="bg-gray-200 dark:bg-dark-200 dark:text-white text-black p-3 aspect-square rounded-lg">
                    <LinkIcon />
                  </span>
                  <div className="flex border dark:border-dark-100 rounded-lg p-2 w-full">
                    <input
                      type="text"
                      placeholder="https://www.instagram.com/XXXXXXXXX/"
                      className="bg-transparent px-2 text-sm border-none outline-none w-full text-gray-700 dark:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                      value={link}
                      onChange={handleChange}
                      readOnly={isLoading}
                    />
                    {link && (
                      <button
                        className="bg-transparent text-xl"
                        onClick={() => setLink("")}
                        type="button"
                      >
                        <ClearIcon stroke="blue" />
                      </button>
                    )}
                  </div>
                  <button
                    className="bg-gray-500  dark:bg-dark-100 text-white p-3 aspect-square rounded-lg disabled:opacity-40 disabled:cursor-not-allowed "
                    onClick={handleClipboard}
                    disabled={isLoading}
                    type="button"
                  >
                    <ClipboardIcon />
                  </button>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-3 aspect-square rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                  disabled={!link || isLoading}
                >
                  <DownloadIcon />
                </button>
              </div>
            </form>
          </div>
          <div className="md:max-w-4xl flex items-center justify-center mx-auto w-full p-1 md:p-3">
            {isLoading ? (
              <div className="max-w-4xl flex items-center md:min-h-[400px] min-h-[200px] justify-center mx-auto w-full p-3">
                <div className="flex flex-col items-center gap-2">
                  <SpinnerIcon className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
                </div>
              </div>
            ) : (
              <motion.div
                layout
                variants={parent}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid md:grid-cols-2 w-full mt-2 gap-2"
              >
                {posts && (
                  <>
                    {posts?.carouselMedia ? (
                      posts?.carouselMedia.map((post, index) => (
                        <PostCard
                          key={index}
                          userData={posts?.user}
                          post={post}
                          reels={true}
                          shortcode={shortcode}
                        />
                      ))
                    ) : (
                      <PostCard
                        userData={posts?.user}
                        reels={true}
                        post={posts?.singleMedia}
                        shortcode={shortcode}
                      />
                    )}
                  </>
                )}
              </motion.div>
            )}
          </div>
          {showVideo && (
            <iframe
              allowFullScreen={true}
              title="YouTube video player"
              src={process.env.NEXT_PUBLIC_YOUTUBE_VIDEO}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="aspect-video mx-auto mb-6 w-full max-w-4xl rounded-lg border dark:border-dark-900 border-gray-300 shadow-2xl"
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProfileDownload;

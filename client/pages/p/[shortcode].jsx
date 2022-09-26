import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdDownload as DownloadIcon } from "react-icons/io";
import { MdContentPaste as ClipboardIcon } from "react-icons/md";
import { IoClose as ClearIcon } from "react-icons/io5";
import { AiOutlineLink as LinkIcon } from "react-icons/ai";
import { ImSpinner3 as SpinnerIcon } from "react-icons/im";

import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import PostCard from "../../components/PostCard";
import { API_URL } from "../../constansts/api";
import Link from "next/link";
import { firestore } from "../../firebase/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [postNotFound, setPostNotFound] = useState(false);
  const { user } = useAuth();

  const { theme } = useTheme();
  const router = useRouter();
  const { shortcode } = router.query;

  const savePostToDB = async (post) => {
    try {
      const userDocRef = doc(
        firestore,
        `users/${user?.uid}/posts/${post?.shortcode}`
      );
      const postDocRef = doc(firestore, `/posts/${post?.shortcode}`);
      const postData = {
        shortcode: post?.shortcode || null,
        caption: post?.caption || null,
        user: post?.user || null,
        likes: post?.likes || null,
        comments: post?.comments || null,
        thumbnail: post?.thumbnail || null,
        isVideo: post?.isVideo || null,
        isCarousel: post?.isCarousel || null,
        timestamp: serverTimestamp(),
      };
      setDoc(postDocRef, postData, {
        merge: true,
      });
      if (user)
        setDoc(userDocRef, postData, {
          merge: true,
        });
    } catch (error) {
      console.log(error);
      toast.error("Error Saving Post", {
        position: "top-right",
        autoClose: 5000,
        theme,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios(`${API_URL}/p/${shortcode}`);
        setPosts(data);
        toast.success("Successfully fetched posts.", {
          theme,
          autoClose: 1500,
          hideProgressBar: true,
        });

        savePostToDB(data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Something went wrong.", {
          theme,
          autoClose: 1500,
          hideProgressBar: true,
        });
        setPostNotFound(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    if (shortcode) fetchPost();
  }, [shortcode]);

  return (
    <div>
      <div className="md:max-w-7xl bg-gray-100 dark:bg-dark-900 min-h-[600px] rounded-lg shadow-lg my-[50px] flex items-center justify-center mx-auto w-full p-1 md:p-3">
        {isLoading ? (
          <div className="max-w-4xl flex items-center md:min-h-[400px] min-h-[200px] justify-center mx-auto w-full p-3">
            <div className="flex flex-col items-center gap-2">
              <SpinnerIcon className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
            </div>
          </div>
        ) : (
          <>
            {posts && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-2 gap-2">
                {posts && (
                  <>
                    {posts?.carouselMedia ? (
                      posts?.carouselMedia.map((post, index) => (
                        <PostCard
                          key={index}
                          userData={posts?.user}
                          post={post}
                          shortcode={shortcode}
                        />
                      ))
                    ) : (
                      <PostCard
                        userData={posts?.user}
                        post={posts?.singleMedia}
                        shortcode={shortcode}
                      />
                    )}
                  </>
                )}
              </div>
            )}
          </>
        )}
        {postNotFound && (
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Post not Found.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can&apos;t find that page. You&apos;ll find lots to
                explore on the home page.
              </p>
              <Link href="/">
                <a
                  href="#"
                  className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                >
                  Back to Homepage
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

import {
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { firestore } from "../firebase/config";

import { motion } from "framer-motion";

// icons
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { IoMdOpen as OpenIcon } from "react-icons/io";
import { IoCopy as CollectionIcon } from "react-icons/io5";
import { FaPlay as PlayIcon, FaTrash as DeleteIcon } from "react-icons/fa";
import { AiOutlinePoweroff as LogOutIcon } from "react-icons/ai";
import { ImSpinner3 as SpinnerIcon } from "react-icons/im";

import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import Layout from "../components/Layout";
import { child } from "../constansts/variants";

const Profile = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [num, setNum] = useState(12);
  const router = useRouter();

  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(firestore, `users/${user?.uid}/posts/${id}`));
    } catch (error) {
      console.log(error);
      toast.error("Error deleting post", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const deleteProfile = async (id) => {
    try {
      await deleteDoc(doc(firestore, `users/${user?.uid}/profiles/${id}`));
    } catch (error) {
      console.log(error);
      toast.error("Error deleting post", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const colRef = collection(firestore, `users/${user?.uid}/posts`);
        const q = query(colRef, orderBy("timestamp", "desc"), limit(num));

        onSnapshot(q, (snapshot) => {
          setIsLoading(false);
          setPosts(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    const fetchProfiles = async () => {
      try {
        const colRef = collection(firestore, `users/${user?.uid}/profiles`);
        const q = query(colRef, orderBy("timestamp", "desc"), limit(num));

        onSnapshot(q, (snapshot) => {
          setSavedProfiles(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchPosts();
      fetchProfiles();
    } else {
      router.push("/");
      toast.error("You must be logged in to view this page", {
        position: "top-right",
        autoClose: 5000,
        theme,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [user, num]);

  return (
    <Layout title="Your Profile" description="Your Profile">
      <div className="max-w-5xl p-2 md:p-3 mx-auto w-full">
        {user && (
          <div
            className="relative rounded-lg overflow-hidden h-[150px] md:h-[200px] mb-3 shadow-lg"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/tech/1000.jpg)`,
              // backgroundImage: `url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              repeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 h-full flex p-4 gap-3 items-center w-full bg-dark-600/70 text-white backdrop-blur">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="h-30 md:h-36 aspect-square rounded-full"
              />
              <div className="flex gap-1 text-sm md:text-base flex-col p-2 ">
                <div>
                  <b>Name: </b>
                  {user?.displayName}
                </div>
                <div>
                  <b>Email: </b>
                  {user?.email}
                </div>
                <div>
                  <b>Saved Profiles: </b>
                  {savedProfiles?.length || 0}
                </div>
                <div>
                  <b>Saved Posts: </b>
                  {posts?.length || 0}
                </div>
              </div>
            </div>
            <button
              className="flex items-center gap-1 outline-none absolute right-2 top-2 text-white bg-red-500 hover:bg-gray-900 font-medium rounded-full text-sm md:px-5 md:py-2.5 p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              type="button"
              onClick={logout}
              title="Logout"
            >
              <LogOutIcon />
              <span className="hidden md:block">LogOut</span>
            </button>
          </div>
        )}
        {savedProfiles.length > 0 && (
          <>
            <div className="mt-6 mb-3 font-bold text-xl">Saved Profiles</div>
            <motion.div
              layout
              variants={parent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex overflow-x-scroll snap-x hide-scrollbar py-3 gap-3 mb-3"
            >
              {savedProfiles.map((user, index) => (
                <motion.div
                  key={user?.id}
                  layout
                  variants={child}
                  className="group border snap-start dark:border-none flex-shrink-0 md:w-52 w-44 dark:bg-dark-900 dark:text-white shadow-lg rounded"
                >
                  <div className="flex-1 flex flex-col relative p-5">
                    <button
                      className="absolute top-2 left-2 p-2.5 opacity-100 pointer-events-auto sm:opacity-0 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto aspect-square  text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg transition-all"
                      type="button"
                      onClick={() => deleteProfile(user?.id)}
                    >
                      <DeleteIcon />
                    </button>
                    <a
                      className="bg-primary-500 aspect-square flex items-center justify-center py-2 px-3 text-white font-semibold absolute top-2 right-2 rounded-md "
                      href={`https://instagram.com/${user?.username}`}
                    >
                      <OpenIcon />
                    </a>
                    <Link href={`./user/${user?.username}`}>
                      <a>
                        <img
                          src={user?.profilePic}
                          alt={user?.username}
                          className="md:w-32 md:h-32 aspect-square h-20 w-20 object-cover object-top flex-shrink-0 mx-auto rounded-full lazyLoad isLoaded"
                          loading="lazy"
                        />
                      </a>
                    </Link>
                    <div className="w-full mt-1 items-center gap-2 flex-grow flex flex-col justify-between">
                      <h3 className="mt-6 text-gray-900 dark:text-white text-ellipsis text-sm font-medium">
                        {user?.fullName?.slice(0, 10)}{" "}
                        {user?.fullName?.length >= 10 ? "... " : " "}
                        {user?.isVerified && (
                          <VerifiedIcon
                            className="text-blue-500 text-xs inline-flex bg-white rounded-full"
                            title="A verified account"
                          />
                        )}
                      </h3>
                      <a
                        className="px-3 py-1 cursor-pointer text-blue-800 text-xs font-medium bg-blue-100 dark:bg-primary-400 dark:text-gray-200 rounded-full"
                        href={`https://instagram.com/${user?.username}`}
                      >
                        @{user?.username}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
        {posts.length > 0 && (
          <>
            <div className="mt-6 mb-3 font-bold text-xl">Saved Images</div>
            <motion.div
              layout
              variants={parent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {posts.map((post) => (
                <motion.div
                  key={post?.id}
                  layout
                  variants={child}
                  className="relative group rounded-lg aspect-square overflow-hidden border dark:border-none shadow-lg"
                >
                  {(post?.isCarousel || post?.isVideo) && (
                    <div className="absolute p-2.5 top-2 right-2 text-white  flex items-center bg-black/20 backdrop-blur-sm rounded-lg shadow-lg">
                      {post?.isCarousel && (
                        <CollectionIcon className="rotate-180" />
                      )}
                      {post?.isVideo && <PlayIcon />}
                    </div>
                  )}
                  <button
                    className="absolute top-2 left-2 p-2.5 opacity-100 pointer-events-auto sm:opacity-0 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto aspect-square  text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg transition-all"
                    type="button"
                    onClick={() => deletePost(post?.id)}
                  >
                    <DeleteIcon />
                  </button>
                  <Link href={`./p/${post?.shortcode}`}>
                    <a>
                      <img
                        src={post?.postImage || post?.thumbnail}
                        alt="post"
                        loading="lazy"
                        className="block h-full w-full object-cover"
                      />
                    </a>
                  </Link>
                  <div className="absolute bottom-0 p-2 flex items-center gap-2 bg-white dark:bg-black/40 backdrop-blur-sm rounded-t-lg shadow-lg w-full">
                    <Link href={`/user/${post?.user?.username}`}>
                      <a>
                        <img
                          src={post?.user?.profilePic}
                          alt={post?.user?.fullName}
                          loading="lazy"
                          className="rounded-full h-8 border aspect-square object-cover"
                        />
                      </a>
                    </Link>
                    <div className="flex items-center gap-2 flex-grow">
                      <a
                        href={`https://instagram.com/${post?.user?.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ellipsis dark:text-white gap-2 inline-flex items-center text-black font-bold w-[70%]"
                        title={post?.user?.fullName}
                      >
                        {post?.user?.fullName?.slice(0, 20)}
                        {post?.user?.fullName?.length >= 20 ? "... " : " "}
                        {post?.user?.isVerified && (
                          <VerifiedIcon
                            className="text-blue-500 text-xs bg-white rounded-full"
                            title="A verified account"
                          />
                        )}
                      </a>
                    </div>
                    <a
                      href={`https://instagram.com/p/${post?.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2"
                    >
                      <OpenIcon
                        className="dark:text-white text-black"
                        title="Open"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
        {isLoading ? (
          <div className="my-60 flex flex-col gap-3 items-center justify-center ">
            <SpinnerIcon className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
            <p className="font-bold">Loading . . . </p>
          </div>
        ) : (
          <>
            {posts.length === 0 && (
              <div className="my-60 flex flex-col gap-3 items-center justify-center ">
                {isLoading ? (
                  <p>Loading . . .</p>
                ) : (
                  <p className="font-bold">No posts found</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Profile;

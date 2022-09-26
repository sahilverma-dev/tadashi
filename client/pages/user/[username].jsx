import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { API_URL } from "../../constansts/api";
// icons
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { MdAddAPhoto as EditProfileIcon } from "react-icons/md";
import ProfilePostCard from "../../components/ProfilePostCard";
import { motion } from "framer-motion";
import { nFormatter } from "../../utilities";
import { firestore } from "../../firebase/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "next-themes";
import Layout from "../../components/Layout";

import { ImSpinner3 as SpinnerIcon } from "react-icons/im";
import Link from "next/link";

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const [profileData, setProfileData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [userNotFound, setUserNotFound] = useState(false);
  const { user } = useAuth();

  const { theme } = useTheme();

  const saveUserToDB = async (profile) => {
    try {
      const userDocRef = doc(
        firestore,
        `users/${user?.uid}/profiles/${profile?.id}`
      );
      const profileDocRef = doc(firestore, `/profiles/${profile?.id}`);
      setDoc(profileDocRef, profile, {
        merge: true,
      });
      if (user)
        setDoc(
          userDocRef,
          {
            profilePic: profile?.profilePic?.thumbnail,
            isVerified: profile?.isVerified,
            username: profile?.username,
            fullName: profile?.fullName,
            timestamp: serverTimestamp(),
          },
          {
            merge: true,
          }
        );
    } catch (error) {
      console.log(error);
      toast.error("Error Saving Post", {
        position: "top-right",
        autoClose: 5000,
        theme,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const { data } = await axios(`${API_URL}/user/${username}`);
        setProfileData(data);
        setIsLoading(false);
        toast.success("Profile Loaded", {
          theme,
          autoClose: 1500,
          hideProgressBar: true,
        });
        if (user && data) saveUserToDB(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setUserNotFound(true);
        toast.error("Something went wrong.", {
          theme,
          autoClose: 1500,
          hideProgressBar: true,
        });
      }

      // console.log(username);
    };
    if (username) fetchUser();
  }, [username]);
  return (
    <Layout title="User Profile" description="User Profile">
      <main className="bg-gray-100 min-h-screen w-full flex items-center dark:bg-dark-700">
        {!isLoading ? (
          <>
            {!userNotFound ? (
              <div className="md:max-w-5xl w-full mx-auto mb-8">
                <header className="flex flex-wrap w-full items-center p-4 md:py-8">
                  <div className="md:w-3/12 md:ml-16">
                    {/* profile image */}
                    <div className="relative group w-20 h-20 md:w-40 md:h-40 object-cover overflow-hidden rounded-full">
                      <a
                        href={profileData.profilePic?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="rounded-full h-full w-full border-2 border-pink-600 md:p-1 p-0.5"
                          src={profileData?.profilePic?.thumbnail}
                          alt={profileData?.fullName}
                        />
                      </a>
                    </div>
                  </div>
                  {/* profile meta */}
                  <div className="w-8/12 md:w-7/12 ml-4">
                    <div className="md:flex md:flex-wrap md:items-center mb-4">
                      <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                        {profileData?.username}
                      </h2>
                      {/* badge */}
                      {profileData?.isVerified && (
                        <span
                          className="inline-flex cursor-pointer text-blue-500 text-2xl mr-2"
                          title="A Verified User"
                        >
                          <VerifiedIcon />
                        </span>
                      )}
                    </div>
                    {/* post, following, followers list for medium screens */}
                    <ul className="hidden md:flex space-x-8 mb-4">
                      <li>
                        <span className="font-semibold">
                          {profileData?.posts?.total
                            ? nFormatter(profileData?.posts?.total)
                            : 0}{" "}
                        </span>
                        posts
                      </li>
                      <li>
                        <span className="font-semibold">
                          {profileData?.followers
                            ? nFormatter(profileData?.followers)
                            : 0}{" "}
                        </span>
                        followers
                      </li>
                      <li>
                        <span className="font-semibold">
                          {profileData?.following
                            ? nFormatter(profileData?.following)
                            : 0}{" "}
                        </span>
                        following
                      </li>
                    </ul>
                    {/* user meta form medium screens */}
                    <div className="hidden md:block">
                      <h1 className="font-semibold">{profileData?.fullName}</h1>
                      <p className="font-normal text-sm text-gray-600">
                        {profileData?.categoryName}
                      </p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${profileData?.bio
                            ?.replace("\n", "<br/>")
                            .replace("!\n", "<br/>")}`,
                        }}
                      ></p>
                      {profileData?.link && (
                        <a
                          href={`https://${profileData?.link}`}
                          target="_blank"
                          without
                          rel="noreferrer"
                          className="font-semibold text-blue-800"
                        >
                          {profileData?.link}
                        </a>
                      )}
                    </div>
                  </div>
                  {/* user meta form small screens */}
                  <div className="md:hidden text-sm my-2">
                    <h1 className="font-semibold">{profileData?.fullName}</h1>
                    <span>{profileData?.categoryName}</span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${profileData?.bio
                          ?.replace("\n", "<br/>")
                          ?.replace("!\n", "<br/>")}`,
                      }}
                    ></p>
                  </div>
                </header>
                {/* posts */}
                <div className="px-px md:px-3">
                  {/* user following for mobile only */}
                  <ul
                    className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm"
                  >
                    <li>
                      <span className="font-semibold text-gray-800 block">
                        {profileData?.posts?.total
                          ? nFormatter(profileData?.posts?.total)
                          : 0}{" "}
                      </span>
                      posts
                    </li>
                    <li>
                      <span className="font-semibold text-gray-800 block">
                        {profileData?.followers
                          ? nFormatter(profileData?.followers)
                          : 0}{" "}
                      </span>
                      followers
                    </li>
                    <li>
                      <span className="font-semibold text-gray-800 block">
                        {profileData?.following
                          ? nFormatter(profileData?.following)
                          : 0}{" "}
                      </span>
                      following
                    </li>
                  </ul>
                  {/* flexbox grid */}
                  {profileData?.posts?.data?.length === 0 &&
                    !profileData?.isPrivate && (
                      <div className="flex items-center justify-center my-80">
                        <div className="text-center">No posts yet</div>
                      </div>
                    )}
                  {profileData?.isPrivate && (
                    <div className="flex items-center justify-center my-80">
                      <div className="text-center">
                        Can&apos;t access this account because it is private.
                      </div>
                    </div>
                  )}
                  <motion.div
                    layout
                    variants={parent}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-3 md:gap-8 gap-1 md:p-2 p-1"
                  >
                    {profileData?.posts?.data?.map((post, index) => (
                      <ProfilePostCard key={index} post={post} />
                    ))}
                  </motion.div>
                </div>
              </div>
            ) : (
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                  <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                    404
                  </h1>
                  <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                    User not Found.
                  </p>
                  <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                    Sorry, we can&apos;t find that page. You&apos;ll find lots
                    to explore on the home page.
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
          </>
        ) : (
          <div className="max-w-4xl flex items-center md:min-h-[400px] min-h-[200px] justify-center mx-auto w-full p-3">
            <div className="flex flex-col items-center gap-2">
              <SpinnerIcon className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default UserProfile;

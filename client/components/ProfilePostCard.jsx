import { motion } from "framer-motion";
import React from "react";

// icons
import { IoCopy as CollectionIcon } from "react-icons/io5";
import { FaPlay as PlayIcon } from "react-icons/fa";
import { FaComment as CommentIcon } from "react-icons/fa";
import { AiFillHeart as HeartIcon } from "react-icons/ai";

import { nFormatter } from "../utilities";
import Link from "next/link";
import { child } from "../constansts/variants";

const ProfilePostCard = ({ post, span }) => {
  return (
    <motion.div
      layout
      variants={child}
      className={span ? "col-span-2 row-span-2" : ""}
    >
      <Link href={`/p/${post?.shortcode}`}>
        <a>
          <div className="relative group aspect-square overflow-hidden bg-gray-800  text-white  md:mb-1">
            <div className="absolute top-2 right-2 z-30 md:text-xl text-white">
              {post?.isVideo && <PlayIcon />}
              {post?.isCollection && <CollectionIcon className="rotate-180" />}
            </div>
            {/* overlay*/}
            <div className="absolute text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer h-full w-full bg-black/40 z-10">
              <div className="flex h-full justify-center items-center">
                <div className="flex flex-col md:text-xl text-sm md:flex-row md:gap-6">
                  <div className="flex items-center">
                    <HeartIcon />
                    <span className="ml-2">{nFormatter(post?.likes || 0)}</span>
                  </div>
                  <div className="flex items-center">
                    <CommentIcon />
                    <span className="ml-2">
                      {post?.comments?.toLocaleString() || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src={post?.thumbnail}
              alt={post?.id}
              className="h-full w-full object-cover"
            />
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProfilePostCard;

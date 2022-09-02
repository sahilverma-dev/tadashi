import React from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { page } from "../constansts/variants";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description="Tadashi is an online web tool to help you with downloading Instagram Photos, Videos and IGTV videos. Tadashi is designed to be easy to use on any device, such as, mobile, tablet or computer."
        openGraph={{
          title,
          description,
          images: [
            {
              url: "https://tadashi.vercel.app/images/open-graph.jpg",
              width: 1200,
              height: 630,
              alt: "Tadashi | Home",
            },
          ],
        }}
      />
      <motion.main
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={page}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;

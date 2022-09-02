import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center dark:bg-dark-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Download Instagram Videos and Photos
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <b>Tadashi</b> is an online web tool to help you with downloading
            Instagram Photos, Videos and IGTV videos. Tadashi is designed to be
            easy to use on any device, such as, mobile, tablet or computer.
          </p>
          <a
            href="#download-post"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Try Now
          </a>
          <Link href="/tools/">
            <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Explore Tools
            </a>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/images/hero-image.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

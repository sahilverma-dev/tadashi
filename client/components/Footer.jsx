import Link from "next/link";
import React from "react";

// icons
import { MdLocalPostOffice as MailIcon } from "react-icons/md";
import {
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";
import { BsTwitter as TwitterIcon } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-dark-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="flex items-center">
                <img
                  src="/images/logo-1.png"
                  className="mr-3 h-8"
                  alt="Tadashi Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Tadashi
                </span>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Tools
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/tools/posts-downloader">
                    <a className="hover:underline">Post Downloader</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tools/reels-downloader">
                    <a className="hover:underline">Reels Downloader</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/theviralboy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/sahilverma.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/privacy-policy">
                    <a className="hover:underline">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    <a className="hover:underline">Terms &amp; Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-dark-100 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/">
              <a className=" hover:underline">Tadashi™</a>
            </Link>
            . All Rights Reserved. Developed by{" "}
            <a
              href="https://sahil-verma.vercel.app/"
              className="text-primary-500 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sahil Verma
            </a>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              className="text-gray-500 hover:text-pink-400 transition-all "
              target="_blank"
              href="https://instagram.com/sahilverma.dev"
              rel="noreferrer nofollow"
              title="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              className="text-gray-500 text-xs hover:text-dark-200 transition-all "
              target="_blank"
              href="https://github.com/theviralboy"
              rel="noreferrer nofollow"
              title="Github"
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              className="text-gray-500 text-xs hover:text-blue-500 transition-all "
              target="_blank"
              href="https://twitter.com/sahilverma_dev"
              rel="noreferrer nofollow"
              title="Twitter"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              className="text-gray-500 text-xs"
              target="_blank"
              href="https://sahil-verma.vercel.app/"
              rel="noreferrer nofollow"
              title="Portfolio"
            >
              <span className="sr-only">Portfolio</span>
              <img
                src="https://avatars.githubusercontent.com/u/83828231"
                className="w-6 h-6 aspect-square rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

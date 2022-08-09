import React, { useState } from "react";
import Layout from "../components/Layout";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { useTheme } from "next-themes";
import { toast } from "react-toastify";

// icons
import { MdLocalPostOffice as MailIcon } from "react-icons/md";
import {
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { ImSpinner3 as SpinnerIcon } from "react-icons/im";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { theme } = useTheme();

  const sendMessage = async (data) => {
    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(firestore, "contact"), {
        ...data,
        timestamp: serverTimestamp(),
      });
      console.log(docRef.id);
      setIsLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to send message", {
        position: "top-right",
        autoClose: 5000,
        theme,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && subject && message) {
      sendMessage({
        name,
        email,
        subject,
        message,
      });
    } else {
      toast.error("Please fill all the fields", {
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
  return (
    <Layout title="Contact Us" description="Contact Me">
      <main className=" md:py-12 bg-gray-50 dark:bg-dark-500">
        <div className="bg-gray-50 dark:bg-dark-500">
          <div className="relative z-10 overflow-hidden py-8">
            <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Get help with Tadashi.
              </h1>
              <p className="mt-6 text-xl text-gray-500 dark:text-gray-200 max-w-3xl">
                Share any problem, feedback, or question you have.
              </p>
            </div>
          </div>
        </div>
        <section className="relative" aria-labelledby="contactHeading">
          <div
            className="absolute w-full h-1/2 bg-gray-50 dark:bg-dark-500"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative border dark:border-none bg-white dark:bg-dark-900 shadow-xl">
              <h2 id="contactHeading" className="sr-only">
                Contact us
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative rounded-lg overflow-hidden py-10 px-6 bg-gradient-to-b from-gray-700 to-gray-800 dark:from-dark-100 dark:to-dark-900 sm:px-10 xl:p-12 shadow-lg ">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity="0.1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Contact information
                  </h3>
                  <p className="mt-6 text-base text-gray-50 max-w-3xl">
                    You can contact the support from the form on right, or reach
                    out to us on social media. Want to share feedback instead?
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex items-center text-base text-gray-50">
                      <MailIcon className="flex-shrink-0 w-6 h-6 text-gray-200" />
                      <a
                        href="mailto:sahilverma.webdev@gmail.com"
                        className="ml-2"
                      >
                        sahilverma.webdev@gmail.com
                      </a>
                    </dd>
                  </dl>
                  <ul className="mt-8 flex space-x-12" role="list">
                    <li>
                      <a
                        className="text-gray-200 hover:text-pink-400 transition-all "
                        target="_blank"
                        href="https://instagram.com/sahilverma.dev"
                        rel="noreferrer nofollow"
                        title="Instagram"
                      >
                        <span className="sr-only">Instagram</span>
                        <InstagramIcon className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-200 hover:text-dark-200 transition-all "
                        target="_blank"
                        href="https://github.com/theviralboy"
                        rel="noreferrer nofollow"
                        title="Github"
                      >
                        <span className="sr-only">GitHub</span>
                        <GithubIcon className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-200 hover:text-blue-500 transition-all "
                        target="_blank"
                        href="https://twitter.com/sahilverma_dev"
                        rel="noreferrer nofollow"
                        title="Twitter"
                      >
                        <span className="sr-only">Twitter</span>
                        <TwitterIcon className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-200"
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
                    </li>
                  </ul>
                </div>
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    Send us a message
                  </h3>
                  <form
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your subject"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 1500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm border text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your message"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 disabled:opacity-50 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 dark:bg-dark-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto"
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <SpinnerIcon className="w-5 h-5 aspect-square mr-2 text-white animate-spin dark:text-gray-600 fill-blue-600 dark:fill-primary-400" />
                        )}
                        {isLoading ? "Sending..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;

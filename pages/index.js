import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../src/components/Loader";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [search_url, setSearchUrl] = useState("");
  const [searchResults, setSearchResults] = useState(false);

  const handleSubmit = (e) => {
    setSearchResults(false);
    e.preventDefault();
    setUrl(search_url);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // randomly toggle between true and false to simulate a search result
      setSearchResults(Math.random() > 0.5);
      if (!searchResults) {
        toast.error(
          "Wordpress Not Detected! The website you entered doesn't use wordpress!"
        );
      }

      if (searchResults) {
        toast.success("Wordpress Detected! Analyzing Data!");
      }
    }, 1000);
  };

  const plugins = [
    {
      plugin_name: "Contact Form 7",
      desc: "Contact Form 7 can manage multiple contact forms, plus you can customize the form and the mail contents flexibly with simple markup.",
      banner: "https://ps.w.org/contact-form-7/assets/banner-772x250.png",
      download_link:
        "https://downloads.wordpress.org/plugin/contact-form-7.5.5.6.1.zip",
    },
    {
      plugin_name: "Hide Admin Bar Based on User Roles",
      desc: "This plugin is very useful to hide admin bar based on selected user roles and user capabilities.",
      banner:
        "https://ps.w.org/hide-admin-bar-based-on-user-roles/assets/banner-772x250.png",
      download_link:
        "https://downloads.wordpress.org/plugin/hide-admin-bar-based-on-user-roles.3.2.zip",
    },
  ];

  const theme_download = {
    status: "success",
    message: "Theme found!",
    url: "http://gia.edu.np/wp-content/themes/gurukuldang.zip",
  };

  const theme_info = {
    theme: "EDU Theme Gurukul Academy",
    version: "1.0",
    screenshot:
      "http://gia.edu.np/wp-content/themes/gurukuldang/screenshot.png",
    author: "Tech Care",
    authorLink: "http://cuidadotechnology.com/",
    tags: ["one-column", "two-columns", "rtl-language-support", "sticky-post"],
  };

  return (
    <div className="relative h-screen w-screen min-h-screen overflow-x-auto transition-duration-300 ease-in">
      <Head>
        <title>WPDown - Watcha Theme!</title>
        <meta
          name="description"
          content="WPDown - Check for Exposed Theme Files"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-top cointainer h-halfscreen ">
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="flex flex-col justify-center h-full">
          <h1 className="font-bold text-center font-im-fell m-auto">
            <span className="text-8xl">WPDOWN</span>
            <br />
            <span className="text-4xl">Watcha Theme!</span>
          </h1>
        </div>
      </div>
      <div
        className={`z-0 flex main absolute inset-0 justify-center h-full w-full my-auto `}
      >
        <form
          onSubmit={handleSubmit}
          className="shadow-md fixed text-white bg-smooth-blue xl:w-halfscreen sm:w-3/4  sm:h-screen/4 p-4 rounded place-self-center flex-row  hover:shadow-md transition ease-in-out auto shadow-lg shadow-slate-400"
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {/* Search Area */}

              <div className="search-area bg-smooth-blue flex flex-row justify-center h-full items-center">
                {/* Search Box with Icon */}

                <div
                  className="search-box border-white border-2 m-2 p-2 rounded-2xl w-3/5 sm:w-4/5 shadow-lg hover:shadow-md transition duration-150 ease-in-out"
                  id="search-box"
                >
                  {/* Text Input */}
                  <div className="search-input ">
                    <input
                      className="search-input form-control w-full focus:outline-none px-2 bg-smooth-blue text-slate-300 font-bold"
                      type="text"
                      placeholder="https://"
                      id="search-input"
                      pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
                      onSubmit={(e) => {
                        setSearchUrl(e.target.value);
                      }}
                      autoComplete="off"
                    />
                  </div>
                </div>
                {/* Search Button */}
                <div className="search-button w-auto ">
                  <button
                    type="button"
                    className="search-btn text-white mx-3 px-4 py-2 font-bold rounded-3xl border-2 border-white flex flex-row leading-tight uppercase hover:text-smooth-blue hover:bg-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center"
                  >
                    <div>
                      <span>Search</span>
                    </div>
                  </button>
                </div>
                {/* Search button End */}
              </div>
              {/* Search Area End*/}
            </>
          )}
        </form>
      </div>

      <div
        className={`flex main-bottom bg-slate-200 text-white cointainer justify-center max-h-fit h-fit ${
          searchResults ? "min-h-full" : ""
        }`}
      >
        {searchResults && (
          <>
            <div className="z-40 flex flex-col container bg-white text-smooth-blue shadow-xl shadow-slate-300 items-center mt-40 p-10">
              {/* Results Section */}
              {/* Theme Section */}
              <>
                <div className="theme-section border-2 shadow-lg hover:shadow-md transition ease-in-out auto shadow-slate-200 my-4 p-2 w-3/4">
                  {/* Theme Section Left */}

                  <div className=" results-title m-2 p-2 px-4 text-white font-left bg-smooth-blue font-bold text-xl ">
                    Theme Details
                  </div>
                  <theme className=" flex flex-col lg:flex-row">
                    <div className="theme-section-left flex flex-row justify-center ">
                      <div className="theme-screenshot w-full p-2">
                        <Image
                          src={
                            "https://res.cloudinary.com/kaji/image/fetch/" +
                            theme_info.screenshot
                          }
                          alt="theme screenshot"
                          className="w-full h-full"
                          height={350}
                          width={500}
                        />
                      </div>
                    </div>
                    {/* Theme Section Left End */}

                    {/* Theme Section Right */}

                    <div className="theme-section-right w-full ">
                      <h3 className="ml-4 mt-4 text-left text-lg font-bold ">
                        <div className="theme-name mb-3">
                          Theme Name :{" "}
                          <span className="font-medium text-black ml-2">
                            {theme_info.theme}
                          </span>
                        </div>
                        <div className="theme-version mb-3">
                          version:{" "}
                          <span className="font-medium text-black ml-2">
                            {theme_info.version}
                          </span>
                        </div>
                        <div className="theme-author mb-3">
                          Author:{" "}
                          <span className="font-medium text-black ml-2">
                            <Link href={theme_info.authorLink}>
                              <a className="hover:text-smooth-blue">
                                {theme_info.author}
                              </a>
                            </Link>
                          </span>
                        </div>
                        <div className="theme-tags flex flex-row overflow-hidden">
                          <div className="tags-group flex flex-row">
                            <div className="tag-title ">Tags: </div>
                            <div className="tags-list ml-2 flex flex-row font-medium">
                              {theme_info.tags.map((tag, index) => (
                                <div
                                  className="text-sm hover:border-2 hover:bg-smooth-blue hover:text-white tag mx-1 mt-1 px-1 rounded-xl min-w-fit border-2 border-smooth-blue"
                                  key={index}
                                >
                                  <Link href="#">
                                    <a className="p-1 my-1">{tag}</a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Download Button */}
                        <div className="download-button flex flex-row mt-6">
                          <button className="download-btn text-sm bg-smooth-blue text-white font-bold hover:text-smooth-blue hover:bg-white mx-2 px-4 py-2 rounded-3xl border-2 border-black flex flex-row leading-tight uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            <span>Download</span>
                          </button>
                        </div>
                      </h3>
                    </div>
                    {/* Theme Section Right End */}
                  </theme>
                </div>
              </>
              {/* Horizontal Line */}
              {/* Plugin Container */}
              <div className="plugin-container border-2 shadow-lg shadow-slate-200 hover:shadow-md transition ease-in-out auto  my-4 p-2 w-3/4">
                {/* Plugins Section */}
                <div className=" results-title m-2 p-2 px-4 text-white font-left bg-smooth-blue font-bold text-xl ">
                  Plugin Details
                </div>
                {plugins.map((plugin, index) => (
                  <>
                    <plugin className="flex flex-row justify-center w-full">
                      {/* Plugin Numbering */}
                      <div className="plugin-numbering  p-4 flex flex-row text-xl font-bold items-center">
                        {index + 1}
                      </div>
                      <div className="plugins-section flex flex-col sm:flex-row ">
                        {/* Plugin Section Top */}

                        <div className="plugin-section-top justify-center flex flex-col">
                          <div className="plugin-banner  h-fit">
                            <Image
                              src={
                                "https://res.cloudinary.com/kaji/image/fetch/" +
                                plugin.banner
                              }
                              alt="plugin-banner"
                              className="w-full h-full"
                              height={150}
                              width={600}
                              responsive={true}
                            />
                          </div>
                        </div>
                        {/* Plugin Section Top End */}

                        {/* Plugin Section Bottom */}

                        <div className="plugin-section-bottom w-full">
                          <h3 className="m-4 text-left text-lg font-bold ">
                            <div className="plugin-name mb-3">
                              Plugin Name :{" "}
                              <span className="font-medium text-black ml-2">
                                {plugin.plugin_name}
                              </span>
                            </div>
                            <div className="theme-version">
                              Description:{" "}
                              <span className="font-medium text-black ml-2">
                                {plugin.desc}
                              </span>
                            </div>
                          </h3>
                        </div>
                        {/* Plugin Section Bottom End */}

                        {/* Plugin Download Section */}
                        <div className="plugin-download-section flex flex-col justify-center bg-white">
                          <div className="download-button ">
                            <button
                              type="button"
                              className="download-btn relative text-sm bg-smooth-blue text-white font-bold p-5 m-5 rounded-3xl flex flex-row leading-tight uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              <Link href={plugin.download_link}>
                                <a className="hover:text-smooth-blue">
                                  <Image
                                    src="/assets/img/icons/download_icon.svg"
                                    layout="fill"
                                    alt="download icon"
                                    className="w-5 h-5 bg-white rounded-full"
                                  />
                                </a>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </plugin>
                    {/* Don't show line at last */}
                    {index !== plugins.length - 1 && (
                      <div className="border border-2 bg-black mx-4"></div>
                    )}
                  </>
                ))}
                {/* Plugins Section End */}
              </div>
              {/* Plugin Container End */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

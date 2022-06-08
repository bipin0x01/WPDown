import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "../src/components/Loader";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import fake data
import fakeData from "../src/fakeData";

// Components Import
import PluginSection from "../src/components/Main/PluginSection";
import ThemeSection from "../src/components/Main/ThemeSection";

// import Services
// import { getWebsiteData } from "../src/services/getWebsiteData";

export default function Home() {
  const [url, setUrl] = useState("http://gia.edu.np");
  const [loading, setLoading] = useState(false);
  const [webData, setWebData] = useState(fakeData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setWebData(fakeData);
        setLoading(false);
        toast.success("Website Data Loaded Successfully for URL:" + url);
      } else {
        setWebData(null);
        setLoading(false);
        toast.error("Website Data Loading Failed for URL: " + url);
      }
    }, 2000);
  };

  // Set the results to null for initial
  useEffect(() => {
    setWebData(null);
  }, []);

  // get value from current state of url
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
      {/* Header */}
      <div className="main-top cointainer h-halfscreen ">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="flex flex-col justify-center h-full ">
          <h1 className="font-bold text-center font-im-fell m-auto">
            <span className="sm:text-8xl text-5xl">WPDOWN</span>
            <br />
            <span className="sm:text-4xl text-2xl">Watcha Theme!</span>
          </h1>
        </div>
      </div>
      {/* Header End */}
      {/* Main Content */}
      {/* Search Section */}
      <div
        className={`z-0 flex main absolute inset-0 justify-center h-full w-full my-auto`}
      >
        <form
          onSubmit={handleSubmit}
          className={`fixed text-white bg-inherit xl:w-halfscreen sm:w-3/4 rounded-xl sm:h-screen/4 p-4  place-self-center flex-row transition transition-duration-400 ease-in auto  shadow-slate-400 ${
            loading &&
            "bg-smooth-blue border-0 shadow-0 hover:shadow-0 bg-inherit "
          }`}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {/* Search Area */}
              <div className="search-area py-2 px-4 rounded-xl bg-smooth-blue flex flex-row justify-center h-full items-center">
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
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                {/* Search Button */}
                <div className="search-button w-auto ">
                  <button
                    type="submit"
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
      {/* Search Section End */}

      {/* Search Results Section */}
      <div
        className={`flex main-bottom bg-slate-200 text-white cointainer justify-center max-h-fit h-fit ${
          webData ? "min-h-full" : ""
        }`}
      >
        {webData && (
          <>
            <div className="z-40 flex flex-col container bg-white text-smooth-blue shadow-xl shadow-slate-300 items-center mt-40 p-10">
              {/* Results Section */}
              {/* Theme Section */}
              <ThemeSection
                themeDetails={webData.themeDetails}
                themeDownload={webData.themeDownload}
              />
              {/* Plugin Container */}
              <PluginSection plugins={webData.plugins} />
              {/* Plugin Container End */}
            </div>
          </>
        )}
      </div>
      {/* Search Results Section End */}
      {/* Main Content End */}
    </div>
  );
}

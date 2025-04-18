import React, { useContext } from "react";
import { useTheme } from "../contexts/ThemeContext";

const WhatIDo = () => {
  
  const { theme } = useTheme();

  return (
    <main className="flex flex-col flex-wrap items-center justify-center w-full m-auto mt-6 max-w-13xl">
      <div>
        <h1
          className={`p-4 text-2xl font-semibold sm:text-3xl md:text-4xl sm:pb-10 ${
            theme === "dark" ? "text-gray-100" : "text-blue-500"
          }`}
        >
          WHAT I DO
        </h1>
      </div>

      <main className="flex flex-row flex-wrap w-11/12 gap-4 ">
        {/* UI & UX Card */}
        <div className="flex-grow w-64">
          <div
            className={`h-full pt-12 pb-10 pl-6 pr-10 border rounded-md  border-bline ${
              theme === "dark"
                ? "bg-[black]/80 border-gray-700 text-gray-100"
                : "bg-white border-gray-200 text-gray-950"
            }`}
          >
            <div className="relative flex flex-col gap-2 pt-28 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M10.75 42.15C9.62217 42.15 8.50688 41.9583 7.40415 41.575C6.30138 41.1917 5.33333 40.5667 4.5 39.7C5.66667 39.3 6.5 38.7167 7 37.95C7.5 37.1833 7.75 36.15 7.75 34.85C7.75 33.3917 8.26127 32.1521 9.2838 31.1313C10.3064 30.1104 11.548 29.6 13.0088 29.6C14.4696 29.6 15.7083 30.1104 16.725 31.1313C17.7417 32.1521 18.25 33.3917 18.25 34.85C18.25 36.9833 17.525 38.7333 16.075 40.1C14.625 41.4667 12.85 42.15 10.75 42.15ZM10.75 39.15C11.9167 39.15 12.9583 38.7333 13.875 37.9C14.7917 37.0667 15.25 36.05 15.25 34.85C15.25 34.1833 15.0417 33.6417 14.625 33.225C14.2083 32.8083 13.6667 32.6 13 32.6C12.3333 32.6 11.7917 32.8083 11.375 33.225C10.9583 33.6417 10.75 34.1833 10.75 34.85C10.75 36.15 10.6083 37.1083 10.325 37.725C10.0417 38.3417 9.51667 38.7167 8.75 38.85C8.95 38.8833 9.28333 38.9417 9.75 39.025C10.2167 39.1083 10.55 39.15 10.75 39.15ZM22.25 30.3L17.75 25.55L36.55 6.75001C37.0167 6.28334 37.5333 6.04167 38.1 6.02501C38.6667 6.00834 39.2 6.25001 39.7 6.75001L41.15 8.20001C41.65 8.70001 41.8917 9.24167 41.875 9.82501C41.8583 10.4083 41.6167 10.9333 41.15 11.4L22.25 30.3Z"
                  fill="#00BAD5"
                ></path>
              </svg>

              <h1
                className="text-lg font-semibold"
                style={{ color: "#00BAD5" }}
              >
                UI &amp; UX
              </h1>
              <p
                className={`text-sm font-light ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Designing interfaces that are intuitive, efficient, and
                enjoyable to use.
              </p>
            </div>
          </div>
        </div>

        {/* Web & Mobile App Card */}
        <div className="flex-grow w-64">
          <div
            className={`h-full pt-12 pb-10 pl-6 pr-10 border rounded-md bg-bgcard border-bline ${
              theme === "dark"
                ? "bg-[black]/70 border-gray-700 text-gray-100"
                : "bg-white border-gray-200 text-gray-950"
            }`}
          >
            <div className="relative flex flex-col gap-2 pt-28 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M4 40V35.5H8V11C8 10.175 8.29375 9.46875 8.88125 8.88125C9.46875 8.29375 10.175 8 11 8H42V11H11V35.5H23V40H4ZM27.5 40C27.075 40 26.7188 39.8563 26.4312 39.5688C26.1438 39.2812 26 38.925 26 38.5V15.5C26 15.075 26.1438 14.7188 26.4312 14.4313C26.7188 14.1438 27.075 14 27.5 14H42.5C42.925 14 43.2812 14.1438 43.5688 14.4313C43.8563 14.7188 44 15.075 44 15.5V38.5C44 38.925 43.8563 39.2812 43.5688 39.5688C43.2812 39.8563 42.925 40 42.5 40H27.5ZM29 35.5H41V17H29V35.5Z"
                  fill="#9D95FF"
                ></path>
              </svg>

              <h1
                className="text-xl font-semibold"
                style={{ color: "#9D95FF" }}
              >
                Web Development
              </h1>
              <p
                className={`text-sm font-light ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Creating responsive, fast, and modern web applications for
                seamless user experience.
              </p>
            </div>
          </div>
        </div>

        {/*Blockchain Card */}
        <div className="flex-grow w-64">
          <div
            className={`h-full pt-12 pb-10 pl-6 pr-10 border rounded-md bg-bgcard border-bline ${
              theme === "dark"
                ? "bg-[black]/70 border-gray-700 text-gray-100"
                : "bg-white border-gray-200 text-gray-950"
            }`}
          >
            <div className="relative flex flex-col gap-2 pt-28 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 444 511.89"
                width="48"
                height="48"
              >
                <path
                  d="m141.96 202.46 74.34-41.56v-50.41c-12.75-7.47-25.72-14.71-38.4-22.26-.17.13-.34.26-.53.37L99.7 133.52v43.32l.08.05 42.18 25.57zm36.25 220.13 38.09-21.3v-49.97l-76.57-44.46-40.07 23.13c.03.74.04 1.58.04 2.56v44.62l78.51 45.42zm48.63-21.85 37.29 21.59.95.52 79.22-45.81.02-45.91-41.28-23.83-76.2 44.31v49.13zm44.61 30.24.03 2.21v48.4c0 1.42-.66 2.69-1.94 3.35l-43.69 25.42c-3.2 1.86-3.58 2.12-6.77.23-14.38-8.47-29.07-16.62-43.36-25.2-3.33-1.92-4.01-2.08-3.93-5.95l.01-48.75-76.91-44.49-.19-.12-40.63 23.63c-3.2 1.86-3.58 2.12-6.77.24-14.38-8.48-29.07-16.62-43.36-25.2-3.33-1.93-4.01-2.09-3.93-5.96l.01-51.35c0-1.84 1.33-2.64 2.66-3.41l.17-.09 1.32-.74 41.55-23.22v-89.47c-13.88-8.14-28.02-16-41.78-24.26-3.33-1.93-4.01-2.09-3.93-5.96l.01-51.35c0-1.84 1.33-2.64 2.66-3.41l.17-.09 1.32-.74 44.01-24.6c1.92-1.06 2.51-1.01 4.39.05l39.78 23.03 2.45 1.36 76.99-44.52.01-50.41c0-1.84 1.33-2.64 2.66-3.41l.17-.09 1.32-.74L219.96.77c1.92-1.06 2.51-1.01 4.39.06l39.78 23.03 2.52 1.39c4.23 2.26 4.83 2.58 4.83 9.47v45.17l76.58 44.28.16.1 43.24-24.17c1.91-1.06 2.51-1.01 4.39.05l39.78 23.03 2.52 1.4c4.22 2.26 4.83 2.58 4.83 9.47v48.39c0 1.42-.66 2.69-1.95 3.35l-43.01 25.03-.03 88.49 38.66 22.38 2.52 1.39c4.22 2.26 4.83 2.59 4.83 9.47v48.39c0 1.43-.66 2.69-1.95 3.36l-43.69 25.41c-3.2 1.86-3.57 2.12-6.76.24-13.88-8.18-28.03-16.05-41.85-24.3l-.46.32-77.84 45.01zm-86.81-2.56 37.65 22.68 36.17-21.96.07-.42-35.52-22.12c-.46.13-.94.2-1.44.2-.23 0-.47-.01-.69-.05l-36.24 21.67zm34.01 73.78v-44.84l-38.01-22.62c-.53.08-1.07.06-1.61-.06v44.24l39.62 23.28zm44.26-67-37.02 22.18v44.87l38.35-22.65v-44.58c-.44.13-.88.19-1.33.18zm-36.07-323.9v49.67l74.1 42.94 42.1-24.33.24-.14.02-46.21-76.18-44.06c-.35-.2-.68-.45-.96-.74l-39.32 22.87zm-42.2-81.36 37.65 22.68 36.55-22.19-36.75-22.88-37.45 22.39zm34.01 73.79V58.88l-39.62-23.57v45.13l39.62 23.29zm45.59-67.8L225.89 58.9v44.87l38.35-22.65V35.93zm124.53 264.74c-.03-.25-.04-.49-.04-.74l.05-89.54c-13.02-7.64-26.27-15.03-39.22-22.74-.35.39-.78.74-1.26 1.02l-41.95 24.24v84.19l43.69 25.22 38.73-21.65zm-35.06 33.76c-.68.24-1.43.34-2.16.28v43.56l39.62 23.29v-44.85l-37.46-22.28zm3.45-6.66 37.64 22.68 36.56-22.19-36.76-22.88-37.44 22.39zm79.6 5.99-38.36 22.97v44.87l38.36-22.65v-45.19zM92.7 321.88l42.38-24.47v-86.86l-39.11-23.72-40.99 23.85v89.37l37.37 21.64.35.19zm-42.12-16.33-.23.01-.32-.01-37.17 22.22 37.65 22.68 36.55-22.19-36.48-22.71zm-3.71 96.01v-44.85L7.25 333.14v45.13l39.62 23.29zm45.59-67.8-38.35 22.97v44.87l38.35-22.65v-45.19zm-.61-152.95c.07-.67.28-1.32.61-1.94v-43.61l-38.35 22.97v44.87l37.74-22.29zm-78.99-51.54 37.65 22.68 36.55-22.19-36.75-22.88-37.45 22.39zm34.01 73.79v-44.85L7.25 134.64v45.13l39.62 23.29zm309.27-73.79 37.64 22.68 36.56-22.19-36.76-22.88-37.44 22.39zm34.01 73.79v-44.85l-39.62-23.57v45.13l39.62 23.29zm45.59-67.8-38.36 22.97v44.87l38.36-22.65v-45.19zM217.32 341.93v-82.99l-73.25-43.58v83.52l73.25 43.05zm80.02-125.5-71.02 42.56v83.02l71.02-41.95v-83.63zm-75.81-48.7-69.33 41.45 69.65 41.97 67.68-41.09-68-42.33z"
                  fill="#FFD700"
                />
              </svg>
              <h1
                className="text-xl font-semibold"
                style={{ color: "#FFD700" }}
              >
                Blockchain
              </h1>
              <p
                className={`text-sm font-light ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Building secure, decentralized apps ensuring transparency,
                trust, and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Development Card */}
        <div className="flex-grow w-64">
          <div
            className={`h-full pt-12 pb-10 pl-6 pr-10 border rounded-md bg-bgcard border-bline ${
              theme === "dark"
                ? "bg-[black]/70 border-gray-700 text-gray-100"
                : "bg-white border-gray-200 text-gray-950"
            }`}
          >
            <div className="relative flex flex-col gap-2 pt-28 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M14.3 44.05L22.85 28.7L6 26.7L30.75 3.95H33.7L25.15 19.3L42 21.3L17.25 44.05H14.3ZM22.65 34.7L35.25 23.55L20.4 21.75L25.35 13.3L12.7 24.5L27.55 26.25L22.65 34.7Z"
                  fill="gray"
                ></path>
              </svg>
              <h1 className="text-xl font-semibold" style={{ color: "gray" }}>
                Deployement
              </h1>
              <p
                className={`text-sm font-light ${
                  theme === "dark" ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Deploying scalable, reliable applications with optimized
                performance and seamless delivery.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default WhatIDo;

/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import Link from 'next/link';
import React, { useCallback } from 'react';

import { NextLogo, ReactLogo, TypeScript } from '@/icons';
import Nest from '@/icons/Nest';
import { Meta } from '@/layouts/Meta';
import MeImage from '@/public/assets/images/me.png';
import styles from '@/styles/index.module.scss';
import { Main } from '@/templates/Main';

const GREETING_TEXT = "Hello, I'm Hoang Duy Minh 👋";

const Index = () => {
  const setupTypewriter = useCallback(
    _.debounce((t: HTMLElement) => {
      if (!t) {
        return;
      }

      t.innerHTML = '';
      let cursorPosition = 0;
      const typeSpeed = 50;
      let tempTypeSpeed = 0;

      const type = () => {
        tempTypeSpeed =
          GREETING_TEXT[cursorPosition] === ' '
            ? 0
            : Math.random() * typeSpeed + 50;
        t.innerHTML += GREETING_TEXT[cursorPosition];

        cursorPosition += 1;
        if (cursorPosition < GREETING_TEXT.length) {
          setTimeout(type, tempTypeSpeed);
        }
      };

      type();
    }, 500),
    []
  );

  return (
    <Main
      meta={
        <Meta
          title="MinhHD | Home"
          description="Personal portfolio and blog website designed and developed by MinhHD"
        />
      }
    >
      <div className="mx-10 mb-2 flex rounded-lg lg:mx-24">
        <div className="relative hidden h-[30rem] w-3/5 lg:block">
          <img
            className="absolute left-0 h-full w-full object-contain transition-all duration-700 hover:left-10"
            src={MeImage.src}
            alt="me"
          />
        </div>
        <div className="flex flex-col items-center sm:w-full lg:m-8 lg:items-start lg:justify-center">
          <div
            className={`${styles.typewriter} m-0 text-center text-lg text-gray-200 lg:text-start lg:text-2xl`}
            ref={(node) => {
              setupTypewriter(node as HTMLElement);
            }}
          ></div>
          <h2 className="text-center text-4xl text-gray-400 lg:text-start lg:text-5xl">
            I&apos;m a software engineer and a technology enthusiast 🧑‍💻
          </h2>
          <Link
            className="mt-4 flex w-64 items-center justify-between rounded-2xl border border-secondary bg-secondary px-5 py-3 shadow-md outline-secondary transition-colors hover:border-secondary hover:bg-transparent focus:outline-secondary md:w-96"
            href="/about"
          >
            <span className="font-medium text-gray-200 transition-colors group-hover:text-secondary group-active:text-gray-500">
              Want to know more about me?
            </span>

            <span className="ml-4 shrink-0 rounded-full border bg-gray-100 p-2 text-secondary group-hover:border-secondary group-hover:bg-transparent group-active:text-gray-500">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-16 mb-4 px-10 lg:mx-14">
        <h2 className="mb-6 text-center text-2xl text-gray-200">
          My Current Technology Stack
        </h2>
        <div className="flex w-full flex-wrap justify-center gap-6">
          <div className="my-2 flex w-1/3 flex-col items-center rounded-sm text-gray-400 md:w-1/6">
            <ReactLogo className="my-4 h-auto w-1/2 md:w-1/2" />
            <span>React.js</span>
          </div>
          <div className="my-2 flex w-1/3 flex-col items-center rounded-sm text-gray-400 md:w-1/6">
            <TypeScript className="my-4 h-auto w-1/2 md:w-1/2" />
            <span>TypeScript</span>
          </div>
          <div className="my-2 flex w-1/3 flex-col items-center rounded-sm text-gray-400 md:w-1/6">
            <NextLogo className="my-4 h-auto w-1/2 md:w-1/2" />
            <span>Next.js</span>
          </div>
          <div className="my-2 flex w-1/3 flex-col items-center rounded-sm text-gray-400 md:w-1/6">
            <Nest className="my-4 h-auto w-1/2 md:w-1/2" />
            <span>Nest.js</span>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;

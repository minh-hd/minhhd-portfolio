/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import Link from 'next/link';
import React, { useCallback } from 'react';

import { Meta } from '@/layouts/Meta';
import styles from '@/styles/index.module.scss';
import { Main } from '@/templates/Main';

const Index = () => {
  const setupTypewriter = useCallback(
    _.debounce((t: HTMLElement) => {
      const { innerHTML: HTML } = t || {};

      if (t) {
        t.innerHTML = '';
      }

      let cursorPosition = 0;
      const typeSpeed = 50;
      let tempTypeSpeed = 0;

      const type = () => {
        if (!HTML) {
          return;
        }

        tempTypeSpeed =
          HTML[cursorPosition] === ' ' ? 0 : Math.random() * typeSpeed + 50;
        t.innerHTML += HTML[cursorPosition];

        cursorPosition += 1;
        if (cursorPosition < HTML.length) {
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
      <div className="mb-48 flex">
        <div className="px-24 py-28 sm:w-full lg:w-1/2">
          <div
            className={`${styles.typewriter} m-0 text-lg text-gray-200`}
            ref={(node) => {
              setupTypewriter(node as HTMLElement);
            }}
          >
            Hello, I&apos;m Hoang Duy Minh 👋
          </div>
          <h2 className="text-5xl text-gray-400">
            I&apos;m a software engineer and a technology enthusiast 🧑‍💻
          </h2>
          <Link
            className="flex w-60 items-center justify-between rounded-2xl border border-secondary bg-secondary px-5 py-3 outline-secondary transition-colors hover:border-secondary hover:bg-transparent focus:outline-secondary"
            href="/"
          >
            <span className="font-medium text-gray-200 transition-colors group-hover:text-secondary group-active:text-gray-500">
              Hit me up
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default Index;

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="MinhHD | About"
        description="Introduction about MinhHD and and his background"
      />
    }
  >
    <div className="px-4 lg:px-24">
      <div className="text-gray-200 ">
        <h2 className="text-center text-3xl capitalize lg:text-5xl">
          About Me 🙋
        </h2>
        <div className="lg:text-2xl">
          <p>
            What&apos;s up, fam? It&apos;s your boy{' '}
            <span className="text-secondary">Hoang Duy Minh</span>. I&apos;m a
            Vietnamese software developer who was born and raised in Hanoi, the
            capital of Vietnam. And I&apos;m currently living here too by the
            way.
          </p>
          <p>
            I am currently working on{' '}
            <span className="text-secondary">Web Development</span> industry
            with <span className="text-secondary">JS tech stack</span> and
            striving to learn new technologies such as Big Data. My hobbies are
            reading psychology books, playing League, watching series and
            learning new things about economics, finance, management and so on.
          </p>
        </div>
      </div>
      <div className="text-gray-200 ">
        <h2 className="text-center text-3xl capitalize lg:text-5xl">
          My Experience 💼
        </h2>
        <div className="text-white">
          <div className="container mx-auto flex flex-col items-start md:flex-row">
            <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
              <p className="ml-2 uppercase text-secondary">
                Working Experience
              </p>
              <p className="mt-0 mb-2 text-xl leading-normal md:text-2xl md:leading-relaxed">
                Here is my working experience and employment history. For more
                detail, please download my resume below
              </p>
              <a
                href="/assets/documents/Hoang-Duy-Minh-CV.pdf"
                download
                className="mr-auto rounded border border-secondary bg-transparent py-2 px-4 text-secondary shadow hover:border-transparent hover:bg-secondary hover:text-white hover:shadow-lg"
              >
                Download My Resume
              </a>
            </div>
            <div className="sticky ml-0 md:ml-12 lg:w-2/3">
              <div className="container mx-auto h-full w-full">
                <div className="relative mb-16 h-full overflow-hidden py-10 md:px-10">
                  <div className="absolute right-1/2 h-full rounded-[1%] border-2 border-solid border-secondary"></div>
                  <div className="absolute left-1/2 h-full rounded-[1%] border-2 border-solid border-secondary"></div>

                  <div className="flex w-full flex-row-reverse items-center justify-between md:mb-8">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-secondary">
                        01/2022 - 01/2023
                      </p>
                      <h4 className="mb-3 text-lg font-bold md:text-2xl">
                        Miichisoft
                      </h4>
                      <p className="text-sm leading-snug text-gray-100 text-opacity-100 md:text-base">
                        After graduated from my university, I came back to
                        Miichisoft and continued my job as a Javascript
                        developer. I worked on many projects for Japanese
                        clients in various domains namely education or
                        construction.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between md:mb-8">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-secondary">
                        01/2021 - 06/2021
                      </p>
                      <h4 className="mb-3 text-lg font-bold md:text-2xl">
                        FPT Software
                      </h4>
                      <p className="text-sm leading-snug text-gray-100 text-opacity-100 md:text-base">
                        I worked at FPT Software for about half year as a
                        Front-end Developer. The project I worked on using
                        React.js to process images with many features like
                        cutout, smoothing or color filtering and so many more.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row-reverse items-center justify-between md:mb-8">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-secondary">
                        {' '}
                        10/2020 - 12/2020
                      </p>
                      <h4 className="mb-3 text-lg font-bold md:text-2xl">
                        Miichisoft
                      </h4>
                      <p className="text-sm leading-snug text-gray-100 text-opacity-100 md:text-base">
                        I was an intern at Miichisoft for approximately 3 months
                        as a Javascript developer.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default About;

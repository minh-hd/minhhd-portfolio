import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

import { PARTICLE_OPTIONS } from '@/constants/particles.constant';
import { PATHS } from '@/constants/paths.constant';
import { Facebook, Github, LinkedIn, Logo } from '@/icons';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'visible';
  }, [isModalOpen]);

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (_container: Container | undefined) => {},
    []
  );

  const isActivePath = (path: string): boolean => pathname === path;

  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <div>
        <header className="flex justify-between sm:px-10 sm:py-6 lg:py-8 lg:px-24">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="group relative z-[101]"
              onClick={() => setModalOpen(!isModalOpen)}
            >
              <div className="relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full transition-all duration-200">
                <div className="flex h-[20px] w-[20px] origin-center flex-col justify-between overflow-hidden transition-all duration-300">
                  <div
                    className={`h-[2px] w-7 origin-left bg-white transition-all delay-100 duration-300 ${
                      isModalOpen ? 'translate-y-6' : ''
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] w-7 rounded bg-white transition-all delay-75 duration-300 ${
                      isModalOpen ? 'translate-y-6' : ''
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] w-7 origin-left bg-white transition-all duration-300 ${
                      isModalOpen ? 'translate-y-6' : ''
                    }`}
                  ></div>

                  <div
                    className={`absolute top-6 flex w-0 -translate-x-10 items-center justify-between transition-all duration-500 ${
                      isModalOpen ? 'w-12 -translate-x-2' : ''
                    }`}
                  >
                    <div
                      className={`absolute h-[2px] w-5 rotate-0 bg-white transition-all delay-300 duration-500 ${
                        isModalOpen ? 'rotate-45' : ''
                      }`}
                    ></div>
                    <div
                      className={`absolute h-[2px] w-5 -rotate-0 bg-white transition-all delay-300 duration-500 ${
                        isModalOpen ? '-rotate-45' : ''
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div>
            <Link href="/">
              <Logo className="h-20 w-32 fill-primary" />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex h-20 flex-wrap content-center text-xl">
              {PATHS.map((path) => (
                <li className="mr-6" key={path.href}>
                  <Link
                    href={path.href}
                    className={`border-none text-gray-200 hover:text-secondary ${
                      isActivePath(path.href)
                        ? 'text-primary backdrop-saturate-100'
                        : ''
                    }`}
                  >
                    {path.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div>
          <div
            className={`fixed ${
              isModalOpen ? '' : 'hidden'
            } top-0 left-0 z-[99] h-full w-full overflow-hidden bg-black-transparent-backdrop outline-none blur-xl`}
            tabIndex={-1}
            aria-labelledby="rightTopModalLabel"
            aria-hidden="true"
            onClick={() => setModalOpen(!isModalOpen)}
          ></div>
          <div
            className={`absolute top-0 z-[100] h-screen w-3/4 bg-midnight py-24 px-12 shadow-md transition-transform duration-500 ${
              isModalOpen ? '' : '-translate-x-full'
            }`}
          >
            <ul>
              {PATHS.map((path) => (
                <li className="my-2" key={path.href}>
                  <Link
                    href={path.href}
                    className={`border-none text-xl text-gray-200 hover:text-secondary ${
                      isActivePath(path.href)
                        ? 'text-primary backdrop-saturate-100'
                        : ''
                    }`}
                  >
                    {path.name}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="my-4" />
            <div className="flex w-full justify-evenly">
              <Link
                href="https://github.com/minh-hd"
                className="fill-white"
                target="_blank"
              >
                <Github className="m-auto h-auto w-1/2 fill-white" />
              </Link>
              <Link href="https://www.facebook.com/minhhd.1810" target="_blank">
                <Facebook className="m-auto h-auto w-1/2 fill-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/minhhd/" target="_blank">
                <LinkedIn className="m-auto h-auto w-1/2 fill-white" />
              </Link>
            </div>
          </div>
        </div>
        <main className="content py-5 text-xl">
          {props.children}
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={PARTICLE_OPTIONS}
          />
        </main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm text-gray-200">
          © Copyright {new Date().getFullYear()}. Made with ❤️️ by MinhHD
        </footer>
      </div>
    </div>
  );
};

export { Main };

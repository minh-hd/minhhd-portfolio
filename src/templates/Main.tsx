import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

import { PARTICLE_OPTIONS } from '@/constants/particles.constant';
import { PATHS } from '@/constants/paths.constant';
import { Logo } from '@/icons';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  const { pathname } = router;

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
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div>
        <header className="flex justify-between py-8 px-24">
          <div>
            <Logo className="h-20 w-32" fill="#fc3b1b" />
          </div>
          <nav className="hidden lg:block">
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
          <div className="lg:hidden">
            <button type="button" className="group relative">
              <div className="relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full transition-all duration-200">
                <div className="flex h-[20px] w-[20px] origin-center flex-col justify-between overflow-hidden transition-all duration-300">
                  <div className="h-[2px] w-7 origin-left bg-white transition-all delay-100 duration-300 group-focus:translate-y-6"></div>
                  <div className="h-[2px] w-7 rounded bg-white transition-all delay-75 duration-300 group-focus:translate-y-6"></div>
                  <div className="h-[2px] w-7 origin-left bg-white transition-all duration-300 group-focus:translate-y-6"></div>

                  <div className="absolute top-6 flex w-0 -translate-x-10 items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
                    <div className="absolute h-[2px] w-5 rotate-0 bg-white transition-all delay-300 duration-500 group-focus:rotate-45"></div>
                    <div className="absolute h-[2px] w-5 -rotate-0 bg-white transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </header>

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

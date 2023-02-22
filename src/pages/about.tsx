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
    <div className="sm:px-4 lg:px-24">
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
    </div>
  </Main>
);

export default About;

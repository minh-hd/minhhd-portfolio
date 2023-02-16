import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h2 className="text-2xl font-bold">
        Hello Ửold, I&apos;m Hoang Duy Minh
      </h2>
    </Main>
  );
};

export default Index;

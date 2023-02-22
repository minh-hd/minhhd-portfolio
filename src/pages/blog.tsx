import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Blog = () => (
  <Main meta={<Meta title="MinhHD | Blog" description="MinhHD's blog page" />}>
    <div className="mx-10">
      <p className="text-gray-200">Seems a little empty here...</p>
    </div>
  </Main>
);

export default Blog;

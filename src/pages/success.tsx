import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Success = () => (
  <Main
    meta={<Meta title="MinhHD | Contact" description="React out to MinhHD" />}
  >
    <div className="bg-white px-8 pt-8 pb-12 md:mx-24 md:rounded-md md:border-t-4 md:border-t-secondary">
      <h2 className="text-center text-4xl text-secondary">Contact me</h2>
      <p className="mt-0 text-center text-lg">
        Thank you for sending me a message.
      </p>
    </div>
  </Main>
);

export default Success;

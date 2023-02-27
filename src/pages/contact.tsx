import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={<Meta title="MinhHD | Contact" description="React out to MinhHD" />}
  >
    <div className="bg-white px-8 pt-8 pb-12 md:mx-24 md:rounded-md md:border-t-4 md:border-t-secondary">
      <h2 className="text-center text-4xl text-secondary">Contact me</h2>
      <p className="mt-0 text-center text-lg">
        Thank you for visiting my portfolio. If you have something to say,
        don&apos;t hesitate to leave me a message
      </p>

      <form
        action="/success"
        className="relative space-y-4"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border border-solid border-gray-900 p-3"
            placeholder="Name"
            type="text"
            id="name"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border border-solid border-gray-900 p-3"
              placeholder="Email address"
              type="email"
              id="email"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full rounded-lg border border-solid border-gray-900 p-3"
              placeholder="Phone Number"
              type="tel"
              id="phone"
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>

          <textarea
            className="w-full rounded-lg border border-solid border-gray-900 p-3"
            placeholder="Message"
            rows={8}
            id="message"
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full rounded-lg bg-secondary px-5 py-3 font-medium text-white md:inline-block"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </Main>
);

export default About;

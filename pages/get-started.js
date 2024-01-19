import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";

export default function GetStarted() {
  const servicesItems = [
    "Social Media",
    "UI/UX Design",
    "Web development",
    "Others",
  ];

  return (
    <>
      <Head>
        <title>Contact us - TCD</title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-accent text-3xl font-semibold sm:text-4xl'>
                Talk to a TCD expert
              </h1>
              <p className='mt-3'>
                We are here to help. Get in touch with sales our press team and
                let us know how we can help, or shoot us an email on{" "}
                <a
                  href='mailto:support@TCD.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-primary hover:to-secondary font-medium duration-150'>
                  support@TCD.com.
                </a>
              </p>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='space-y-5 font-medium'>
                <div>
                  <label>Full name</label>
                  <Input
                    aria-label='Full name'
                    type='text'
                    required
                    className='mt-2 focus:border-primary'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-2 focus:border-primary'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label='Message'
                    required
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg'></textarea>
                </div>
                <div>
                  <label>Service</label>
                  <ul className='mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16'>
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className='flex gap-x-2 items-center'>
                        <Checkbox id={`service-${idx}`} />
                        <label htmlFor={`service-${idx}`} className='text-sm'>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='pt-1'>
                  <Button className='w-full text-white bg-primary hover:bg-secondary active:bg-primary ring-offset-2 ring-primary focus:ring'>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

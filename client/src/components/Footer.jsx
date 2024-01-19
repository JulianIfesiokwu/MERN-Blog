import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer
      container
      className='border-t-8 border-teal-500'
    >
      <div className='w-ful max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text=-white'
            >
              <span className='px-2 py-1 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                Julian's
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='about' />
              <Footer.LinkGroup col>
                <Footer.Link>Who we Are</Footer.Link>
                <Footer.Link>Study Us</Footer.Link>
                <Footer.Link>What is our job</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Social Media' />
              <Footer.LinkGroup col>
                <Footer.Link>Github</Footer.Link>
                <Footer.Link>Instagram</Footer.Link>
                <Footer.Link>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link>Our terms & Conditions</Footer.Link>
                <Footer.Link>Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Julian's Blog"
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon
              href='#'
              icon={BsFacebook}
            />
            <Footer.Icon
              href='#'
              icon={BsGithub}
            />
            <Footer.Icon
              href='#'
              icon={BsTwitter}
            />
            <Footer.Icon
              href='#'
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;

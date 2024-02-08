import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more about JavaScript?</h2>
        <p className='text-gray-500 my-2'>
          Check out these resources with 100 JavaScript projects
        </p>
        <Button gradientDuoTone='purpleToPink'>
          <a
            href='https://www.google.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn more
          </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img
          src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*LyZcwuLWv2FArOumCxobpA.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default CallToAction;

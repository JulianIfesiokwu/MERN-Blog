import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col md:flex-row p-3 md:items-center max-w-3xl mx-auto gap-5'>
        <div className='flex-1'>
          <Link
            to='/'
            className='text-4xl font-bold dark:text=-white'
          >
            <span className='px-2 py-1 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              Julian's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo blog project. You can sign up by creating your
            account or using your google account.{" "}
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='username'
                id='username'
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='email'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='password'
                id='password'
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
            >
              Sign up
            </Button>
          </form>
          <div className='flex gap-2 tex-sm mt-5'>
            <span className=''>Have an account?</span>
            <Link
              to='/sign-in'
              className='text-blue-500 hover:underline'
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

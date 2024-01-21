import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.email) {
      return dispatch(signInFailure("Please complete all fields"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

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
            This is a demo blog project. You can sign in by creating your
            account or using your google account.{" "}
          </p>
        </div>
        <div className='flex-1'>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit}
          >
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='email'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='*******'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='p-3'>Loading...</span>
                </>
              ) : (
                "Sign in"
              )}
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 tex-sm mt-5'>
            <span className=''>Don't have an account?</span>
            <Link
              to='/sign-up'
              className='text-blue-500 hover:underline'
            >
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-10' color='failure">{errorMessage}</Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

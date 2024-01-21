import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.email) {
      return setErrorMessage("Please complete all fields");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
            This is a demo blog project. You can sign up by creating your
            account or using your google account.{" "}
          </p>
        </div>
        <div className='flex-1'>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit}
          >
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='username'
                id='username'
                onChange={handleChange}
              />
            </div>
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
                placeholder='password'
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
                "Sign up"
              )}
            </Button>
            <OAuth />
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
          {errorMessage && (
            <Alert className="mt-10' color='Failure">{errorMessage}</Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

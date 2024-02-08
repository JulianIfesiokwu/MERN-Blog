import { Alert, Button, Textarea } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommentSection = ({ postId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200 || commentError.length > 1) {
      return;
    }

    try {
      const res = await fetch(`/api/comment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setComment("");
        setCommentError(null);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  return (
    <div className='max-w-2xl w-full p-3 mx-auto'>
      {currentUser ? (
        <div className='flex items-center gap-2 my-5 text-gray-500 text-sm'>
          <p className=''>signed in as:</p>
          <img
            className='h-5 w-5 object-cover rounded-full'
            src={currentUser.profilePicture}
            alt={currentUser.email}
          />
          <Link
            to='/dashboard?tab=profile'
            className='text-xs text-cyan-600 hover:underline'
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className='text-sm text-teal-500 my-5 flex gap-2'>
          <p>You must be logged in to comment</p>
          <Link
            to='/sign-in'
            className='text-blue-500 hover:underline'
          >
            Sign in
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className='border border-teal-500 rounded-md p-3'
        >
          <Textarea
            placeholder='Add a comment...'
            rows='3'
            maxLength='200'
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className='flex items-center justify-between mt-5'>
            <p className='text-gray-500 text-sm'>
              {200 - comment.length} characters remaining
            </p>
            <Button
              type='submit'
              outline
              gradientDuoTone='purpleToBlue'
            >
              comment
            </Button>
          </div>
          {commentError && (
            <Alert
              color='failure'
              className='mt-5'
            >
              {commentError}
            </Alert>
          )}
        </form>
      )}
    </div>
  );
};

export default CommentSection;
import React from 'react';
import error from "../../assets/error.png"
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={error} alt="" />
      <Link to="/" className='btn btn-primary text-secondary p-5 text-lg'>Go Back</Link>
    </div>
  );
};

export default Error;
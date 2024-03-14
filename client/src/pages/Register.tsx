import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const url = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError("please wait");
      await axios.post(url + '/auth/register', formData);
      setError('');
      navigate("/login");
    } catch (error:any) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <h1 className='text-4xl mb-8 font-semibold'>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className='pr-3 my-2'>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1' />
        </div>
        <div className='pr-3 my-2'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1' />
        </div>
        <div className='pr-3 my-2'>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1'/>
        </div>
        {error ? error : ""}
        <button type="submit" className='bg-blue-700 text-white py-2 px-4 mt-2 rounded-md text-center mx-auto'>Register</button>
      </form>
      <div className='mt-3'>
        <span className='mr-2'>already have an account?</span>
        <a href='/login' className='text-blue-700'>
          Login here
        </a>
      </div>
    </div>
  );
};

export default Register;

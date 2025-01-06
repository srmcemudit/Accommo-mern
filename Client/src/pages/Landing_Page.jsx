import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"; 

function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();


  let ShowPass = () => {
    let pass = document.getElementById('password')
    if(pass.type === 'password') {
      pass.type = 'text';
    }else{
      pass.type = 'password';
    }
  }

  async function login() {
    const user = { email, password };
    try {
      const result = await axios.post('http://localhost:3001/user/login', user);
      console.log(result.data); // login successful
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setError('Enter valid email and password');
    }
    console.log(user);
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-200">
          Streamline your tasks with ease and efficiency.
        </p>
      </div>
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
        <form className="space-y-4" onSubmit={(e) => {e.preventDefault();login();}}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input type="text" id="email" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input type="password" id="password" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className='flex items-center space-x-3'>
            <label htmlFor="checkbox" className='text-sm font-medium text-gray-700 cursor-pointer'>
              Show Password
            </label>
            <input type="checkbox" id='checkbox' className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" onClick={ShowPass} />
          </div>
          <div className='catch '>
          {<p>{error}</p>}
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200">Login</button>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?
          <a href="signup" className="text-indigo-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
export default LandingPage;
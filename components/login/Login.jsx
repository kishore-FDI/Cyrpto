'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  // Manage state to toggle between login and registration
  const [isRegistering, setIsRegistering] = useState(false);

  // Function to handle the toggle with smooth transition
  const handleToggle = () => {
    // Start the transition
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '0';

    // After a short delay, change the state and fade back in
    setTimeout(() => {
      setIsRegistering(!isRegistering);
      document.body.style.opacity = '1';
    }, 250);

    // Remove the transition after it's complete
    setTimeout(() => {
      document.body.style.transition = '';
    }, 750);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login/registration logic
    // For now, we'll just redirect to the home page
    router.push('/home');
  };

  return (
    <div className={`w-screen h-screen font-bold text-[2vh] bg-white flex justify-end relative transition-all duration-1000 ${isRegistering ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Left side with the image */}
      <div className="w-1/2 h-full bg-[#AFB3FF] rounded-tl-[0.9vw] rounded-bl-[0.5vw] flex items-center justify-center transition-all duration-1000">
        <img src="/laptop.png" alt="Laptop" className="max-w-full max-h-full object-contain transition-all duration-1000" />
      </div>

      {/* Right side with the form */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center p-[2vh] relative transition-all duration-1000">
        {/* Welcome Text */}
        <h2 className="text-[3vh] font-bold text-black mb-[2vh] transition-all duration-500">
          {isRegistering ? 'Create an Account!' : 'Welcome Back!'}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col w-3/4 max-w-[80vw] transition-all duration-500">
          {isRegistering ? (
            <>
              <label htmlFor="name" className="mb-[1vh] text-black transition-all duration-500">Name:</label>
              <input type="text" id="name" name="name" className="mb-[2vh] h-[7vh] p-[1vh] border-[0.4vh] border-[#AFB3FF] rounded-[3vh] transition-all duration-500" />

              <label htmlFor="email" className="mb-[1vh] text-black transition-all duration-500">Email:</label>
              <input type="email" id="email" name="email" className="mb-[2vh] h-[7vh] p-[1vh] border-[0.4vh] border-[#AFB3FF] rounded-[3vh] transition-all duration-500" />

              <label htmlFor="password" className="mb-[1vh] text-black transition-all duration-500">Password:</label>
              <input type="password" id="password" name="password" className="mb-[2vh] h-[7vh] p-[1vh] border-[0.4vh] border-[#AFB3FF] rounded-[3vh] transition-all duration-500 text-black" />

              <button type="submit" className="bg-[#AFB3FF] text-white mt-[5.5vh] p-[1vh] rounded-[3vh] font-semibold hover:bg-[#8D90FF] text-[2vh] transition-all duration-500">
                Register
              </button>
            </>
          ) : (
            <>
              <label htmlFor="username" className="mb-[1vh] text-black transition-all duration-500">Username:</label>
              <input type="text" id="username" name="username" className="mb-[2vh] h-[7vh] p-[1vh] border-[0.4vh] border-[#AFB3FF] rounded-[3vh] transition-all duration-500" />

              <label htmlFor="password" className="mb-[1vh] text-black transition-all duration-500">Password:</label>
              <input type="password" id="password" name="password" className="mb-[2vh] h-[7vh] p-[1vh] border-[0.4vh] border-[#AFB3FF] rounded-[3vh] transition-all duration-500 text-black" />

              <button type="submit" className="bg-[#AFB3FF] text-white mt-[5.5vh] p-[1vh] rounded-[3vh] font-semibold hover:bg-[#8D90FF] text-[2vh] transition-all duration-500">
                Login
              </button>
            </>
          )}
        </form>

        {/* Toggle link */}
        <div className="mt-[6vh] font-bold text-black transition-all duration-500">
          {isRegistering ? (
            <>
              Already have an account?{' '}
              <a href="#" className="text-blue-500" onClick={handleToggle}>
                Login
              </a>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <a href="#" className="text-blue-500" onClick={handleToggle}>
                Register
              </a>
            </>
          )}
        </div>

        {/* Social icons */}
        <div className="flex space-x-[2vw] mt-[3vh] transition-all duration-500">
          <img src="/fb.png" alt="Facebook" className="h-[3vh]" />
          <img src="/whatsapp.png" alt="WhatsApp" className="h-[3vh]" />
          <img src="/telegram.png" alt="Telegram" className="h-[3vh]" />
        </div>
      </div>

      {/* Decorative Shapes */}
      <img src="/Rectangle5.png" alt="Rectangle 5" className="absolute h-[11vw] bottom-0 left-0 transition-all duration-1000" />
      <img src="/Rectangle6.png" alt="Rectangle 6" className="absolute h-[10.45vw] bottom-0 left-0 transition-all duration-1000" />
    </div>
  );
};

export default Login;

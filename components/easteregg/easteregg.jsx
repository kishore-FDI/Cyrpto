import React from 'react';

const Easter = () => {
  return (
    <div className="w-screen h-screen font-bold text-[2vh] bg-white flex justify-end relative flex-row-reverse">
      {/* Left side with the image */}
      <div className="w-1/2 h-full bg-[#AFB3FF] rounded-tl-[0.9vw] rounded-bl-[0.5vw] flex items-center justify-center">
        <img src="/laptop.png" alt="Laptop" className="max-w-full max-h-full object-contain" />
      </div>

      {/* Right side with the form */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center p-[2vh] relative">
        {/* Welcome Text */}
        <h2 className="text-[3vh] font-bold text-black mb-[2vh]">Welcome Back!</h2>

        {/* Form */}
        <form className="flex flex-col w-3/4 max-w-[80vw]">
          <label htmlFor="username" className="mb-[1vh]  text-black">Username:</label>
          <input type="text" id="username" name="username" className="mb-[2vh] h-[7vh] p-[1vh] border-[0.4vh] border-[#AFB3FF] rounded-[3vh]" />

          <label htmlFor="password" className="mb-[1vh] text-black">Password:</label>
        <input type="password" id="password" name="password" className="mb-[2vh] h-[7vh] p-[1vh] border-[0.4vh] border-[#AFB3FF] rounded-[3vh]" />

          <button type="submit" className="bg-[#AFB3FF] text-white mt-[5.5vh] p-[1vh] rounded-[3vh] font-semibold hover:bg-[#8D90FF] text-[2vh]">
            Login
          </button>
        </form>

        {/* Register link */}
        <div className="mt-[6vh] font-bold text-black ">
          Don't have an account? <a href="#" className="text-blue-500">Register</a>
        </div>

        {/* Social icons */}
        <div className="flex space-x-[2vw] mt-[3vh]">
          <a href="#" className="text-blue-600 text-[3vh]">
            <i className="fab fa-facebook"></i> {/* Facebook */}
          </a>
          <a href="#" className="text-green-500 text-[3vh]">
            <i className="fab fa-whatsapp"></i> {/* WhatsApp */}
          </a>
          <a href="#" className="text-blue-400 text-[3vh]">
            <i className="fab fa-telegram"></i> {/* Telegram */}
          </a>
        </div>
      </div>

      {/* Decorative Shapes */}
      <img src="/Rectangle5.png" alt="Rectangle 5" className="absolute  bottom-0 left-0" />
      <img src="/Rectangle6.png" alt="Rectangle 6" className="absolute bottom-0 left-0" />
    </div>
  );
};

export default Easter;

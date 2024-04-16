import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-centerw-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className='sm:text-right text-4xl font-bold '>
            <p> Hello and Welcome, Please Feel Free to have a look around!</p>
          </div>
          <div>
            <p>
            First and foremost, I love computers and software, I believe that they will be the first thing everybody uses and needs in the future, 
            we will live in a time where nobody will know what is a pen and paper.
with the growth of this technology, smart people out there are going to take advantage of this but not in a good way, 
and that's my job to outsmart these people and don't let them hack and steal your devices and information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

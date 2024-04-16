import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import Github from "../assets/github.png";
import aws from "../assets/aws.png";
import SQL from "../assets/sql.png";
import Neo4j from "../assets/neo4j.png";
import Postman from "../assets/postman.png";
import Oracle from "../assets/oracle.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// Technologies I have worked with </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JS</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aws} alt="HawsTML icon" />
            <p className="my-4">aws</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SQL} alt="SQL icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Neo4j} alt="Neo4j icon" />
            <p className="my-4">Neo4j</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Postman} alt="Postman icon" />
            <p className="my-4">Postman</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Oracle} alt="Oracle icon" />
            <p className="my-4">Oracle</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-me shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

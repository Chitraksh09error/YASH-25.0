import "./Home.css";
import Navbar from '../components/Navbar/Navbar'
import logo from "../assets/logo.png";
import Sponsors from "../components/Sponsors/Sponsors";
import StepperTimeline from "../components/Timeline/StepperTimeline";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Timer/Timer";
// import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className=" h-[100vh]" id="home">
      <Navbar />
      <h1 className="mt-6 px-1 text-center text-white font-extrabold lg:text-4xl text-3xl ">YESHWANTRAO CHAVAN COLLEGE OF ENGINEERING, NAGPUR</h1>
      <div className="main-div mt-12">
        <div className="heading-conatiner">
            {/* <p className="enigma-p">YCCE Presents</p> */}
            <img src={logo} alt="" height={50} width={500} className="ycce"/>
          <p className="sub-heading mt-8 font-bold text-xl">A Celebration of Innovation and Creativity</p>
        </div>
      </div>
        <div className="flex justify-center items-center text-center flex-col mt-16 mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-8">Inauguration</h1>
          <Timer launchDate="2025-02-13T10:00:00" /> 
        </div>
      <div className="flex justify-center items-start">
        <h1 className="text-6xl text-white font-extrabold ">ABOUT YCCE</h1>
      </div>
      <h1 className="mt-15  text-center text-white font-extrabold lg:text-4xl text-3xl ">RUBY JUBILEE CELEBRATION</h1>
      <h1 className="text-center  text-white font-bold lg:text-4xl  text-2xl">COMPLETING 40 YEARS</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-8 m-8 text-white">
        <div className="bg-black bg-opacity-70 rounded-3xl lg:p-8 p-4 text-center"><p className="text-3xl font-extrabold ">Celebrating 40 Years of Excellence – Ruby Jubilee</p><p className="text-xl mt-8 text-justify">This year is very special as YCCE is completing 40 years of success in education, innovation, and community service, celebrating its Ruby Jubilee since it was founded in 1984. As the first autonomous engineering college in Vidarbha and a proud holder of NAAC A++ accreditation, YCCE has built a strong reputation for producing talented graduates who are highly valued by top companies in India. This celebration reflects YCCE’s long-lasting dedication to quality education and positive contributions to society.</p></div>
        <div className="bg-black bg-opacity-70 rounded-3xl lg:p-8 p-4 text-center "><p className="text-3xl font-extrabold ">YCCE: Where Innovation Meets Excellence</p><p className="text-xl mt-8 text-justify">Yeshwantrao Chavan College of Engineering (YCCE), Nagpur, is a prestigious institution known for its focus on academic
          excellence and holistic development. With state-of-the-art infrastructure, highly qualified faculty, and a wide range of
          programs, YCCE offers a dynamic learning environment for students. The college encourages innovation and research,
          fostering creativity among students through various technical projects, competitions, and workshops. Over the years,
          YCCE has shaped countless bright minds, helping them excel in their professional careers and contribute
          meaningfully to society.</p></div>
        <div className="bg-black bg-opacity-70 rounded-3xl lg:p-8 p-4 text-center "><p className="text-3xl font-extrabold ">YASH 25.0 – A Celebration of Innovation and Creativity</p><p className="text-xl mt-8 text-justify">Yashwantrao Chavan College of Engineering (YCCE), Nagpur, proudly presents YASH 25.0, its highly anticipated national-
          level techno-cultural extravaganza. Scheduled from 13th to 15th February, this vibrant fest brings together students
          from various institutions to celebrate creativity, innovation, and collaboration. With an exciting lineup of cultural,
          technical, and sports events, YASH 25.0 promises an amazing platform to show talents and inspire participants to reach
          new heights.</p></div>

      </div>
      <Sponsors />
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-white mb-16">SCHEDULE</h1>
        <StepperTimeline />
      </div>
      <Footer />


    </div>
  );
};

export default Home;

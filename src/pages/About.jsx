import React from "react";
import { IoFitness } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { LuCalendarHeart } from "react-icons/lu";

function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Dietcare
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              An initative to propagate healthy eating and lifestyle .
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  BMI Calculator
                </h2>
                <p className="leading-relaxed text-base">
                  The Body Mass Index (BMI) Calculator is used to calculate
                  BMI value and corresponding weight status while taking age
                  into consideration.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  <IoIosFitness className="w-6 h-6"               
                  />
                    
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Body Fat Calculator
                </h2>
                <p className="leading-relaxed text-base">
                  The Body Fat Calculator can be used to estimate your total
                  body fat based on specific measurements.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  <IoFitness className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  BMR Calculator
                </h2>
                <p className="leading-relaxed text-base">
                  The Basal metabolic rate (BMR) is the amount of energy needed
                  while resting in a temperate environment where Digestive
                  system is inactive.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  < LuCalendarHeart 
                    
                    className="w-6 h-6 "
                    
                  />
            
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Dietplan
                </h2>
                <p className="leading-relaxed text-base">
                  This generates the Dietplan for the day for a user based on
                  their Calorie requirements.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  <MdArticle                 
                    className="w-6 h-6"
                   
                  />
                  
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Blogs
                </h2>
                <p className="leading-relaxed text-base">
                  Informative Blogs provides idea
                  for healthy eating and body.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Security & Personalisation
                </h2>
                <p className="leading-relaxed text-base">
                  All these features are available with a personalized and
                  secure environment.
                </p>
              </div>
            </div>
          </div>
          <a href="https://dietcare-admin.vercel.app" target="_blank">
            <button className="flex mx-auto mt-16 text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 rounded text-lg">
              Admin Dashboard
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;

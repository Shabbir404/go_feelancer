import Lottie from "lottie-react";
import freelancerLottie from '../src/assets/anim/Animation - 1739867836556.json'
import { useState } from "react";
import JobCatagory from "./JobCatagory";
import Featured from "./Featured";
import Article from "./Article";

const Home = () => {

    const [jobKeyword, setJobKeyword] = useState('');
    const [location, setLocation] = useState('');

    const popularSearches = [
        'Designer', 'Developer', 'Web', 'IOS', 'PHP', 'Senior', 'Engineer'
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Searching for:', { jobKeyword, location });
    };

    return (
        <div>
            <div className="bg-gradient-to-b from-blue-50 to-white">
                <div className="md:flex justify-between md:w-11/12 md:mx-auto">
                    <div className="hidden md:block w-[650px] h-96 mt-28">
                        <Lottie animationData={freelancerLottie}></Lottie>
                    </div>
                    <div className="md:mt-20">
                        <div className=" min-h-[600px] pt-32 pb-20 px-4">
                            <div className="container text-center w-10/12 mx-auto">
                                {/* Main Heading */}
                                <div className="mb-6 animate-fade-in">
                                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                                        There Are <span className="text-blue-600">93,178</span> Postings Here
                                    </h2>
                                    <p className="text-xl text-gray-600">For you!</p>
                                </div>

                                {/* Subheading */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                                    Find Jobs, Employment & Career Opportunities
                                </h1>

                                {/* Search Form */}
                                <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
                                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-lg">
                                        {/* Job Keywords Input */}
                                        <div className="flex-1 relative">
                                            <svg
                                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                            <input
                                                type="text"
                                                placeholder="Job title, keywords, or company"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                                                value={jobKeyword}
                                                onChange={(e) => setJobKeyword(e.target.value)}
                                            />
                                        </div>

                                        {/* Location Input */}
                                        <div className="flex-1 relative">
                                            <svg
                                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <input
                                                type="text"
                                                placeholder="City or postcode"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                            />
                                        </div>

                                        {/* Search Button */}
                                        <button
                                            type="submit"
                                            className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex-shrink-0 transform hover:scale-105"
                                        >
                                            Find Jobs
                                        </button>
                                    </div>
                                </form>

                                {/* Popular Searches */}
                                <div className="mt-8 text-center">
                                    <span className="text-gray-600 mr-2">Popular Searches :</span>
                                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                                        {popularSearches.map((term) => (
                                            <button
                                                key={term}
                                                className="px-4 py-1.5 cursor-pointer bg-white text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 text-sm border border-gray-200"
                                            >
                                                {term}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:w-10/12 mx-auto -mt-10">
                <JobCatagory></JobCatagory>
            </div>
            <div>
                <Featured></Featured>
            </div>
            <div className="mt-10">
                <Article></Article>
            </div>

        </div>

    );
};

export default Home;
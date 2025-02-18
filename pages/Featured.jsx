import Lottie from "lottie-react";
import loginAnime from '../src/assets/anim/main-loginAnim.json'
import '../Styles/common.css'
import { Link } from "react-router-dom";

const Featured = () => {
    return (
        <div className=" bg-gradient-to-b from-slate-50 to-slate-100">
            <div>
                <h1 className="text-3xl text-center font-bold text-gray-900">Featured Jobs</h1>
                <p className="text-center mt-3 text-md font-normal text-gray-500">Find jobs easy and quickly based on you skill</p>
            </div>
            <div className="md:flex w-10/12 mx-auto">
                <div className="hidden md:block md:w-[600px] md:h-96">
                    <Lottie animationData={loginAnime}></Lottie>
                </div>
                <div className="">
                    <div className="min-h-[200px] md:mt-15 w-full flex items-center justify-center p-12">
                        <div className="container-reveal">
                            <div className="relative bg-white rounded-lg px-10 py-10 md:px-48 md:py-32 shadow-lg animate-border overflow-hidden">
                                <div className="content-wrapper">
                                    <div className="relative">
                                        <h1 className="text-2xl md:text-3xl text-slate-800 font-medium tracking-wide animate-fade-up">
                                            Login Required!
                                        </h1>

                                        <div className="mt-4 h-px bg-slate-400 animate-reveal-left" />

                                        <p className="mt-5 text-md text-center text-slate-600 animate-reveal-left">
                                            Please login to view jobs
                                        </p>
                                        <div className="flex justify-center mt-5">
                                            <Link
                                                to='/login'
                                                className="bg-[#1967D2] text-white px-6 py-2.5 rounded-md
                                     hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
                                     shadow-md hover:shadow-lg cursor-pointer">
                                                login
                                            </Link>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;
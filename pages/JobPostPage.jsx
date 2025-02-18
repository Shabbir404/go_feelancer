import Lottie from "lottie-react";
import sckeletionLoading from '../src/assets/anim/skeletion_loading.json'
import { Link } from "react-router-dom";

const JobPostPage = () => {
    return (

        <div>

            <div className="md:mt-40 mt-25  w-11/12 mx-auto">
                <h1 className="text-center text-gray-400 text-4xl ">You must need to login to view jobs</h1>

                <div className="absolute justify-center pt-10 ml-10 md:ml-30 md:flex gap-6">
                    <div className="h-96 w-96 ">
                        <Lottie animationData={sckeletionLoading}></Lottie>
                    </div>
                    <div className="hidden md:block h-96 w-96">
                        <Lottie animationData={sckeletionLoading}></Lottie>
                    </div>
                    <div className="hidden md:block h-96 w-96">
                        <Lottie animationData={sckeletionLoading}></Lottie>
                    </div>
                </div>

                <div className=" relative flex justify-center pt-110">
                    <Link
                        className="block w-[300px] p-6 text-2xl text-white hover:bg-blue-700 rounded-full text-center bg-blue-500"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default JobPostPage;
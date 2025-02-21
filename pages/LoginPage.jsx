import { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Contexts/Auth_context";
import Swal from 'sweetalert2'
const LoginPage = () => {

    const { signUser } = useContext(AuthContext)
    const [userSignIn, setUserSignIn] = useState()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signUser(email, password)
            .then(result => {
                setUserSignIn(result.user);
                if (userSignIn) {
                    navigate('/')
                }
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid email format.',
                        text: 'Please enter a valid email.',
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                    form.reset()
                }
            })




    }




    return (
        <div className="mt-10">
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login </h2>

                    <form onSubmit={handleLogin}>
                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                                Email
                            </label>
                            <input
                                name="email"
                                type="text"
                                id="username"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="remember" className="mr-2 rounded" />
                            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                        </div>

                        {/* Forgot password */}
                        <div className="text-right mb-6">
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>

                        {/* Log In Button */}
                        <button
                            type="submit"
                            className="w-full py-3 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Signup and Social Login Links */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Don`t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Signup</Link>
                        </p>
                    </div>

                    <div className="flex items-center justify-center mt-4 space-x-4">
                        <button className=" flex gap-2 cursor-pointer w-1/2 py-3 bg-gray-200 text-blue-500 rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300">
                            <FaFacebook className="ml-2 mt-1" />
                            Log In via Facebook
                        </button>
                        <button className=" flex gap-4  cursor-pointer w-1/2 py-3 bg-gray-200 text-red-600 rounded-md hover:bg-red-700 hover:text-white transition-all duration-300">
                            <FcGoogle className="ml-3 size-5 mt-1"></FcGoogle>
                            Log In via Gmail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
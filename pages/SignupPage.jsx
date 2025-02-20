import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Contexts/Auth_context";
import Swal from 'sweetalert2'
const SignupPage = () => {

    const { creatUser } = useContext(AuthContext)

    const [pass, Setpass] = useState(false)
    const [userOk, setUserOk] = useState()

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Cassword = e.target.Cpassword.value;
        const nameF = e.target.nameFull.value;

        if (password && Cassword && password !== Cassword) {
            Setpass(true);
        } else {
            Setpass(false);
        }

        creatUser(email, password)
            .then(result => {
                setUserOk(result);

                if (result) {
                    Swal.fire({
                        title: `${nameF} your account is created.`,
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                console.error("Account creation failed:", error);
            });
    }

    return (
        <div className="pt-20 bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="flex justify-center items-center min-h-screen  p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Register</h2>

                    <form onSubmit={handleSignUp}>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                name="nameFull"
                                type="text"
                                id="fullName"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">

                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Choose a username"
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
                                placeholder="Create a password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                name="Cpassword"
                                type="password"
                                id="confirmPassword"
                                className="w-full mt-2 p-3 border mb-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm your password"
                            />
                            {
                                pass && <span className="text-red-600">Passwords are not the same!</span>
                            }
                        </div>

                        {/* Terms Agreement */}
                        <div className="flex items-center mb-6">
                            <input type="checkbox" id="terms" className="mr-2 rounded" />
                            <label htmlFor="terms" className="text-sm text-gray-600">I agree to the Terms of Service and Privacy Policy</label>
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full py-3 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                        </p>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default SignupPage;
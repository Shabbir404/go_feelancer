
const LoginPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login </h2>

                    <form>
                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                Password
                            </label>
                            <input
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
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Signup and Social Login Links */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Don`t have an account? <a href="#" className="text-blue-600 hover:underline">Signup</a>
                        </p>
                    </div>

                    <div className="flex items-center justify-center mt-4 space-x-4">
                        <button className="w-1/2 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
                            Log In via Facebook
                        </button>
                        <button className="w-1/2 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300">
                            Log In via Gmail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
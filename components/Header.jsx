import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className="">
            <header className="fixed top-0 left-0 right-0  bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <nav className="container w-11/12 mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 group">
                            <span className="text-blue-600 text-2xl font-bold tracking-tight group-hover:text-blue-700 transition-colors">
                                Logo
                            </span>
                        </Link>

                        {/* Main Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {[
                                ['Home', '/'],
                                ['Find Jobs', '/jobs'],
                                ['Employers', '/employers'],
                                ['Candidates', '/candidates'],
                                ['Blog', '/blog'],
                            ].map(([title, url]) => (
                                <Link
                                    key={title}
                                    to={url}
                                    className="text-gray-600 hover:text-blue-600 relative group py-2"
                                >
                                    <span>{title}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <Link
                                to="/upload-cv"
                                className=" text-blue-400 hover:text-blue-600 transition-colors"
                            >
                                Upload your CV
                            </Link>
                            <Link
                                to="/login"
                                className="bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-500 p-2 rounded-md transition-colors"
                            >
                                Login / Register
                            </Link>
                            <Link
                                to="/post-job"
                                className="bg-[#1967D2] text-white px-6 py-2.5 rounded-md
                                 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
                                  shadow-md hover:shadow-lg"
                            >
                                Job Post
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-600 hover:text-blue-600 transition-colors p-2"
                            >
                                {isMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation - Animated slide-down menu */}
                    <div
                        className={`lg:hidden absolute left-0 right-0 bg-white px-4 pt-2 pb-6 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-full pointer-events-none'
                            }`}
                    >
                        <div className="space-y-3">
                            {[
                                ['Home', '/'],
                                ['Find Jobs', '/jobs'],
                                ['Employers', '/employers'],
                                ['Candidates', '/candidates'],
                                ['Blog', '/blog'],
                                ['Pages', '/pages']
                            ].map(([title, url]) => (
                                <Link
                                    key={title}
                                    to={url}
                                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {title}
                                </Link>
                            ))}
                            <div className="border-t border-gray-100 my-4" />
                            <Link
                                to="/upload-cv"
                                className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Upload your CV
                            </Link>
                            <Link
                                to="/login"
                                className="block px-4 py-2 text-gray-600 underline hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login / Register
                            </Link>
                            <Link
                                to="/post-job"
                                className="block mx-4 mt-4 px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Job Post
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
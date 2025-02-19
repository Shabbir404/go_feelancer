

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-16 pb-8">
                <div className="container w-10/12 mx-auto px-4">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2 mb-6">
                                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <h2 className="text-xl font-bold">JobConnect</h2>
                            </div>
                            <p className="text-blue-100 text-sm">
                                Connecting talent with opportunity. JobConnect makes finding your dream career simpler and faster than ever before.
                            </p>
                            <div className="flex space-x-4 pt-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 flex items-center">
                                <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Browse Jobs</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Submit Resume</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Companies</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Pricing Plans</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Career Advice</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Help Center</a></li>
                            </ul>
                        </div>

                        {/* For Employers */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 flex items-center">
                                <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
                                For Employers
                            </h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Post a Job</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Search Resumes</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Employer Dashboard</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Recruiting Solutions</a></li>
                                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Employer Resources</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 flex items-center">
                                <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
                                Stay Updated
                            </h3>
                            <p className="text-blue-100 text-sm mb-4">Subscribe to our newsletter for the latest job postings and career tips.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-blue-800 text-white placeholder-blue-300 border border-blue-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 rounded-r-lg transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                            <p className="text-blue-300 text-xs mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>

                    {/* Decorative Wave Divider */}
                    <div className="relative h-12 mb-8">
                        <svg className="absolute w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none">
                            <path fill="rgba(59, 130, 246, 0.2)" d="M0,50 C180,80 360,100 720,50 C1080,0 1260,20 1440,50 L1440,100 L0,100 Z"></path>
                        </svg>
                    </div>

                    {/* Bottom Footer */}
                    <div className="pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-blue-200 text-sm mb-4 md:mb-0">
                            © 2025 JobConnect. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-blue-200">
                            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
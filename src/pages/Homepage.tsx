import {Link} from "react-router-dom";
import fmd from "/src/assets/4md.png";
import byteaim from "/src/assets/byteaim.png";

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="fixed top-2 right-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-bl-md shadow-md z-50">
              <span className="text-sm">
                Developed by{' '}
                  <a
                      href={"https://nafees.eu"}
                      className="transition-colors duration-300 hover:text-blue-500"
                  >
                  Dr Nafees ↗️
                </a>
              </span>
            </div>
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        OneApp
                    </h1>

                    <p className="text-lg text-gray-600">
                        A unified application portal,
                        enabling users to apply for colleges and jobs through a single, streamlined interface. <br/>
                        It features centralized application management, secure user authentication, advanced search and filtering,
                        document upload capabilities, and real-time application tracking.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to={"/dashboard"} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            View Demo
                        </Link>
                        <Link to={"https://github.com/drnafees/oneApp"} className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </Link>
                    </div>

                    <div className="pt-6">
                        <p className="text-sm text-gray-500 mb-4">Top companies that are actively deploying and using this open source project:</p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <a href={"https://www.4md.org"}><img src={fmd} alt="4MD" className="h-6 opacity-70 hover:opacity-100 transition-opacity" /></a>
                            <a href={"https://www.byteaim.com"}><img src={byteaim} alt="Byteaim" className="h-6 opacity-70 hover:opacity-100 transition-opacity" /></a>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                        <img
                            src="https://via.placeholder.com/600x400?text=App+Screenshot"
                            alt="OneApp Screenshot"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
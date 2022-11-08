/*import React from "react";

import Navbar from "../../components/Landing/Navbar";
import Footer from "../../components/Landing/Footers/Main";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1667492988842-e0302407cbdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        width="200px"
                        height="200px"
                        src={`data:image/png;base64,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`}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}*/
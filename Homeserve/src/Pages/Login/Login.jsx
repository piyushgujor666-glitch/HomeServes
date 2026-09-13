import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import logo from "../../assets/FIX.jpg"
import bg from "../../assets/Background.png"

export default function LoginForm() {
   const [isVisible, setIsVisible] = useState(false);

   const toggleVisibility = () => {
      setIsVisible((prevState) => !prevState);
   };

   return (
      <main
  className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bg})` }}
>
         <div className="min-h-screen flex fle-col items-center justify-center px-4 py-8 md:p-8">
            <div className="grid items-center gapx-x-10 gap-y-16 max-w-6xl w-full lg:grid-cols-2">
               <div className="max-w-lg max-lg:mx-auto">
                  <img src={logo} alt="logo"
                     className="lg:w-48 w-44 mb-12 inline-block rounded-4xl" />

                  <h2 className="text-4xl font-semibold !leading-tight text-slate-50">
                     Welcome Back to Fixma🔨e
                  </h2>
                  <p className="text-base mt-6 text-slate-100 leading-relaxed">Sign in to FixmaTe and get easy access to reliable home services, manage your bookings, and keep your home running smoothly.</p>

                  <div className="text-sm mt-12 text-slate-50">Don't have an account <NavLink
                  to="signup"
                     className="text-white font-semibold underline ml-1">Register here</NavLink></div>
               </div>

               <div
                  className="bg-white border border-slate-200 rounded-lg px-6 py-8 max-w-lg mx-auto w-full md:px-8 lg:max-w-md dark:bg-neutral-800 dark:border-neutral-600">
                  <h1 className="text-3xl mb-10 font-semibold text-slate-900 dark:text-slate-50">Sign in</h1>
                  <form className="space-y-6">
                     <div>
                        <label htmlFor="email"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                        <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                     </div>

                     <div className="relative">
                        <label htmlFor="password"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>

                        <button
                           type="button"
                           id="togglePassword"
                           onClick={toggleVisibility}
                           aria-label={isVisible ? "Hide password" : "Show password"}
                           aria-pressed={isVisible}
                           className="absolute top-1 right-2 p-0.5 flex cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">
                           <svg xmlns="http://www.w3.org/2000/svg" className="size-[18px] fill-slate-400 text-slate-400 overflow-visible"
                              viewBox="0 0 128 128">
                              <path
                                 d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z">
                              </path>
                              {!isVisible && (
                                 <path
                                    d="M15 15l98 98"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    className="stroke-slate-400"
                                 />
                              )}
                           </svg>
                        </button>

                        <input
                           type={isVisible ? "text" : "password"}
                           id="password"
                           name="password"
                           placeholder="••••••••"
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
                           required
                        />
                     </div>

                     <div className="flex items-start flex-wrap gap-2">
                        <label className="flex items-center group has-[input:checked]:text-slate-900">
                           <input id="remember" name="remember" type="checkbox" required className="sr-only" />
                           {/* Custom box */}
                           <span
                              className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600 bg-white dark:bg-neutral-700 group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                              aria-hidden="true">
                              {/* Checkmark */}
                              <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10"
                                 fill="none" stroke="currentColor" strokeWidth="2">
                                 <path d="M1 5l3 3 7-7" />
                              </svg>
                           </span>
                           <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                              Remember me
                           </span>
                        </label>

                        <NavLink
                        to="/forgot"
                           className="ml-auto text-sm font-medium text-blue-700 dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                            Forgot Password
                        </NavLink>
                     </div>

                     <NavLink
                      to="/home"
                      className="w-[200px] py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                      Sign in
                    </NavLink>
                  </form>

                  <div className="flex items-center gap-4 my-8">
                     <hr className="w-full border-slate-300 dark:border-neutral-700" />
                     <p className="text-sm text-slate-700 text-center dark:text-slate-300">or</p>
                     <hr className="w-full border-slate-300 dark:border-neutral-700" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                     <a href="#"
                        className="w-full flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-[18px]" viewBox="0 0 512 512" aria-hidden="true">
                           <path fill="#fbbd00"
                              d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                              data-original="#fbbd00" />
                           <path fill="#0f9d58"
                              d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                              data-original="#0f9d58" />
                           <path fill="#31aa52"
                              d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                              data-original="#31aa52" />
                           <path fill="#3c79e6"
                              d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                              data-original="#3c79e6" />
                           <path fill="#cf2d48"
                              d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                              data-original="#cf2d48" />
                           <path fill="#eb4132"
                              d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                              data-original="#eb4132" />
                        </svg>
                        Google
                     </a>
                     <a href="#"
                        className="w-full flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-[18px] fill-black dark:fill-white"
                           viewBox="0 0 22.773 22.773" aria-hidden="true">
                           <path
                              d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                              data-original="#000000"></path>
                        </svg>
                        Apple
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}
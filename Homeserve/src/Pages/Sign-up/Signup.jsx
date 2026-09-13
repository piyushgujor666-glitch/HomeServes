import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import backgroundimage from "../../assets/login_bg.png"

export default function SignupForm() {

   return (
      <main className="grid items-center gap-y-6 lg:grid-cols-3 md:grid-cols-2">
         <div className="w-full h-full max-md:order-1 md:min-h-screen">
            <img src={backgroundimage} className="w-full h-full object-cover"
               alt="signup-image" />
         </div>

         <div className="p-4 md:p-8 lg:col-span-2">
            <div className="max-w-md mx-auto w-full">
               <div className="mb-10">
                  <h1 className="text-slate-900 text-2xl font-bold dark:text-slate-50">Create an account</h1>
               </div>

               <form className="space-y-6 w-full">
                  <div>
                     <label htmlFor="name"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Name</label>
                     <input type="text" id="name" name="name" placeholder="John Doe" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="email"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                     <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                     <input type="password" id="password" name="password" placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>
                  <div>
                     <label htmlFor="confirm-password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Confirm
                        password</label>
                     <input type="password" id="confirm-password" name="confirm-password" placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                  </div>

                  <div className="flex items-start flex-wrap gap-2">
                     <label className="flex items-center group has-[input:checked]:text-slate-900">
                        <input id="tmc" name="tmc" type="checkbox" required className="sr-only" />
                        {/* Custom box */}
                        <span
                           className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700 bg-white dark:bg-neutral-800 group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                           aria-hidden="true">
                           {/* Checkmark */}
                           <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10"
                              fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M1 5l3 3 7-7" />
                           </svg>
                        </span>
                        <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                           I accept the
                        </span>
                     </label>

                     <a href="#"
                        className="ml-1 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded dark:text-blue-500">
                        Terms and Conditions
                     </a>
                  </div>

                  <button type="submit"
                     className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Create an account</button>
               </form>

               <div className="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">Already have an account? <NavLink
               to="/login"
                  className="text-blue-700 ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded dark:text-blue-500">
                  Login here</NavLink>
               </div>
            </div>
         </div>
      </main>
   );
}
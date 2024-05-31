
import { useState } from "react";
import {Link} from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
    
    const [formData, setFormData] = useState({});
    const handleChange = (event) =>{
        setFormData({...formData, [event.target.id]: event.target.value});
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await fetch ("/api/auth/signup", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),    
        });
        const data = await res.json();
        console.log(data);

    };
    return (
      <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-6 mb-6 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up on PharmaHub  <i class="fa-solid fa-stethoscope "></i>
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                  onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex my-2 w-full justify-center rounded-md bg-[#1f9c61] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:duration-500 hover:shadow-xl hover:shadow-gray-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
                 <OAuth/>
              </div>
             
          
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              already have a account &#x3f;
              <Link className="ml-2 text-blue-500 underline" to="/SignIn">
                    Sign-in
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  
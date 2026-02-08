import { useState } from "react";
import Header from "./Header";

const LoginPage = () => {
  const [signin, setsignin] = useState("Sign in")

  const handleSignUp = () => {
    console.log("signup clicked");
    setsignin("Sign Up")
  }

  const handleSignIn = ()=>{
    setsignin("Sign in")
  }
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute z-10">
        <Header />
      </div>
      <div>
        <div className=" absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="formsection absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                py-6 px-8  w-5/12 bg-black/70 flex flex-col">
          <h1 className="text-3xl font-bold p-2 text-white"> Enter your info to sign in</h1>
          { signin === "Sign in" &&
          <p className="text-lg text-white p-2 cursor-pointer" onClick={handleSignUp}>Or get started with a new account.</p>
          }
          <form className="flex flex-col">
            {signin === "Sign Up" &&
            <input
              type="text"
              className=" text-white p-2 m-2 bg-gray-600"
              placeholder="Enter your Name"
            />
            }
            <input
              type="text"
              className=" text-white p-2 m-2 bg-gray-600"
              placeholder="Enter your Email Address"
            />
            <input
              type="password"
              className=" text-white p-2 m-2 bg-gray-600"
              placeholder="Enter your password"
            />
            <button className="text-white bg-red-600 p-2 m-2 cursor-pointer text-lg">{signin === "Sign in" ? "Sign in" : "Sign Up"}</button>

            { signin === "Sign Up" &&
            <p className="text-white p-2 m-2 text-lg cursor-pointer" onClick={handleSignIn}>already have an Account? Sign In now</p>
            }

          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

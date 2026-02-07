import Header from "./Header";

const LoginPage = () => {
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
        <div className="formsection absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                p-10 w-5/12 bg-black flex flex-col">
          <h1 className="text-4xl font-bold text-white">Netflix Enter your info to sign in</h1>
          <p className="text-2xl text-white">Or get started with a new account.</p>
          <form className="flex flex-col">
            <input
              type="text"
              className="border text-white p-2 m-2"
              placeholder="Enter your Email Address"
            />
            <input
              type="password"
              className="border text-white p-2 m-2"
              placeholder="Enter your password"
            />
            <button className="text-white bg-red-600 p-2 m-2">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

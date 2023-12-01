import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ onSignIn, onSignUp, onSignOut, currentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const homepage = () => {
    navigate("/");
  };

  const handleClick = () => {
    console.log(currentUser)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const signin = () => {
    onSignIn(email, password);
    console.log("sign in");
    closeModal();
  };

  const signout = () => {
    onSignOut();
    console.log("sign out");
    closeModal();
  };

  const signup = () => {
    onSignUp(email, password);
    console.log("sign out");
    closeModal();
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <div className="flex w-full justify-between border-black border-b-2 px-16 py-8 mb-8">
        <div className="ml-16 cursor-pointer" onClick={homepage}>
          <p className="text-4xl">Runtime Terror</p>
        </div>
        <button
          className="text-2xl border-2 border-black bg-slate-100 p-2 rounded-lg mr-16 hover:scale-110 cursor-pointer hover:bg-slate-200 transition-all duration-300"
          onClick={handleClick}
        >
          {currentUser ? "Log Out" : "Sign In"}
        </button>
      </div>
      {isModalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={closeModal}
                  >
                    X
                  </button>
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign in to your account
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={handleEmailChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={handlePasswordChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="flex my-8 gap-2">
                      <button
                        type="submit"
                        onClick={signin}
                        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Sign In
                      </button>
                      <button
                        type="submit"
                        onClick={signup}
                        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Sign Up
                      </button>
                      <button
                        onClick={signout}
                        className="flex w-full justify-center rounded-md bg-slate-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

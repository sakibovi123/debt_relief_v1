import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import thankYouImg from "../Asset/thank-you-img.jpg";

const ThankYou = () => {
  const navigate = useNavigate();

  const goHome = async () => {
    navigate("/");
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-full ">
        <div className="grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none ">
          <div className="img ">
            <img
              src={thankYouImg}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>

          <div className="thank-you-text flex flex-col items-center justify-center">
            <p className="font-bold text-slate-800 text-2xl sm:text-3xl md:text-5xl mb-6 text-center">
              Thank you for your patience!
            </p>
            <p className="font-semibold text-slate-600 text-sm sm:text-xl text-center mb-8">
              We appreciate your patience. We will get back to you soon.
            </p>
            <button
              onClick={goHome}
              className="bg-slate-800 text-white px-8 py-3 rounded-md hover:opacity-95 active:opacity-80 active:bg-slate-800"
            >
              Return home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;

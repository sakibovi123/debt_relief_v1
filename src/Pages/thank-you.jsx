import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { Link } from "react-router-dom";

import headerLogo from "../Asset/debt-relief-logo.png";
import firstOfferImage from "../Asset/cash750.png";

const ThankYou = () => {
  const navigate = useNavigate();

  const goHome = async () => {
    navigate("/");
  };

  return (
    <div>
      {/* Header */}
      <div className="w-full">
        <div className="max-w-[1320px] mx-auto">
          <img className="w-[200px] sm:w-[300px] " src={headerLogo} alt="" />
        </div>
      </div>
      {/* end header */}

      {/* thank you section */}
      <div className="max-w-[1320px] mx-auto text-center mt-12 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-2">
          Thank You!
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-2">
          Here Are Some Options To Help You
        </h2>
        <h3 className="text-lg md:text-2xl font-bold text-[#58beaa] mb-4 ">
          Select as many as you'd like!
        </h3>
        <p className="text-sm leading-6 px-2">
          Based on the information you shared with us, TurboDebt’s services
          aren’t a fit for your household at this time, but we’ve compiled a
          list of services (below) that may be able to lend a hand – feel free
          to select as many as you’d like or mix and match. We may receive
          compensation if you click through to the links on this page and make
          purchases or sign up for services. By providing this list of
          companies, we are not implying any endorsement of the
          products/services offered and recommend that you perform your own
          research prior to purchasing from them.
        </p>
      </div>
      {/* End thank you section */}

      {/* offers */}
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="offer-1 w-full border-2 px-4 py-6 rounded-lg mb-4">
          <div className=" flex flex-col md:flex-row justify-around items-center">
            <img
              src={firstOfferImage}
              alt=""
              className="w-[180px] h-[115px] mb-4 sm:mb-0"
            />
            {/* offer description */}
            <div className="max-w-[720px] grow md:ml-2 lg:ml-0">
              <p className="text-2xl font-bold text-[#58beaa] mb-2 hidden sm:block">
                750 Cash
              </p>
              <p className="text-md font-bold mb-6">
                Get up to $750 to your cash account{" "}
              </p>
              <div className="mb-4 md:pl-8 md:mb-0">
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Up to $750 in your cash account
                </p>
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Claim amazing deals
                </p>
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Get started now
                </p>
              </div>
            </div>
            {/* offer button */}
            <div>
              <a
                href="#"
                target="blank"
                className="flex items-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90"
              >
                view offer{" "}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                    />
                    <path
                      fill="currentColor"
                      d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                    />
                    <path fill="currentColor" d="M16 24h17v2H16z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="offer-2 w-full border-2 px-4 py-6 rounded-lg mb-4">
          <div className=" flex flex-col md:flex-row justify-around items-center">
            <img
              src={firstOfferImage}
              alt=""
              className="w-[180px] h-[115px] mb-4 sm:mb-0"
            />
            {/* offer description */}
            <div className="max-w-[720px] grow md:ml-2 lg:ml-0">
              <p className="text-2xl font-bold text-[#58beaa] mb-2 hidden sm:block">
                750 Cash
              </p>
              <p className="text-md font-bold mb-6">
                Get up to $750 to your cash account{" "}
              </p>
              <div className="mb-4 md:pl-8 md:mb-0">
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Up to $750 in your cash account
                </p>
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Claim amazing deals
                </p>
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Get started now
                </p>
              </div>
            </div>
            {/* offer button */}
            <div>
              <a
                href="#"
                target="blank"
                className="flex items-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90"
              >
                view offer{" "}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                    />
                    <path
                      fill="currentColor"
                      d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                    />
                    <path fill="currentColor" d="M16 24h17v2H16z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="offer-3 w-full border-2 px-4 py-6 rounded-lg mb-4">
          <div className=" flex flex-col md:flex-row justify-around items-center">
            <img
              src={firstOfferImage}
              alt=""
              className="w-[180px] h-[115px] mb-4 sm:mb-0"
            />
            {/* offer description */}
            <div className="max-w-[720px] grow md:ml-2 lg:ml-0">
              <p className="text-2xl font-bold text-[#58beaa] mb-2 hidden sm:block">
                750 Cash
              </p>
              <p className="text-md font-bold mb-6">
                Get up to $750 to your cash account{" "}
              </p>
              <div className="mb-4 md:pl-8 md:mb-0">
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Up to $750 in your cash account
                </p>
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Claim amazing deals
                </p>
                <p className="flex gap-2 text-gray-500 justify-center md:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="currentColor"
                          d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0Z"
                        />
                      </g>
                    </svg>
                  </span>
                  Get started now
                </p>
              </div>
            </div>
            {/* offer button */}
            <div>
              <a
                href="#"
                target="blank"
                className="flex items-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90"
              >
                view offer{" "}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                    />
                    <path
                      fill="currentColor"
                      d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                    />
                    <path fill="currentColor" d="M16 24h17v2H16z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end ofers */}
      {/* sponsored links */}
      <div className="max-w-[1320px] mx-auto mt-8 mb-8 px-2">
        <p className="text-gray-500 ">Sponsored links</p>
        <div className="h-[1px] bg-gray-300 w-full my-6"></div>
        <div className="flex flex-col items-center justify-around md:flex-row">
          <div className="left-links">
            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="left-links">
            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>

            <a
              href="#"
              target="blank"
              className="flex items-center justify-center capitalize font-semibold text-white bg-[#58beaa] px-6 py-2.5 rounded-md hover:opacity-90 max-w-[480px] mb-2"
            >
              Debt Consolidation Loan{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
                  />
                  <path
                    fill="currentColor"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="currentColor" d="M16 24h17v2H16z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* end  sponsored links */}

      {/* footer */}
      <div className="text-center max-w-full bg-[#0f4381] text-white px-2 py-16">
        <p>
          {" "}
          Copyright 2023,{" "}
          <Link
            className="text-slate-300 ml-3 hover:text-white duration-300"
            // href={goHome}
            target="_blank"
            to="/"
          >
            Debtreliefhelpdesk.com
          </Link>
           • 
          <a
            className="text-slate-300 ml-3 hover:text-white duration-300"
            href="https://debtreliefhelpdesk.com/chat/en/tos.html"
            target="_blank"
          >
            Terms of Use
          </a>
           • 
          <a
            className="text-slate-300 ml-3 hover:text-white duration-300"
            href="https://debtreliefhelpdesk.com/chat/en/pp.html"
            target="_blank"
          >
            Privacy Policy 
          </a>
          {/*  • 
          <a
            className="text-slate-300 ml-3 hover:text-white duration-300"
            href="https://savingproviders.com/survey2/privacy.html#donotsell"
            target="blank"
          >
            Do Not Sell My Info
          </a> */}
        </p>
      </div>
    </div>
  );
};
export default ThankYou;

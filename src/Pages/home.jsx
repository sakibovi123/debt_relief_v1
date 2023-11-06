import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import debtReliefLogo from "../Asset/debt-relief-logo.png";
import authorImage from "../Asset/agent.jpeg";
import { BsCheckLg } from "react-icons/bs";

const Home = () => {
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [fourthStep, setFourthStep] = useState(false);
  const [form, setForm] = useState(false);

  const [showFormErrorFirstName, setShowFormErrorFirstName] = useState(false);
  const [showFormErrorLastName, setShowFormErrorLastName] = useState(false);
  const [showFormErrorEmail, setShowFormErrorEmail] = useState(false);
  const [showFormErrorPhone, setShowFormErrorPhone] = useState(false);

  const [progress, setProgress] = useState(15);

  // variables
  const [debtAmount, setSetAmount] = useState(25000);
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [loadingDot1, setloadingDot1] = useState(false);

  const navigate = useNavigate();

  // function increaseWidth(increment) {
  //   // Increase the width by 20%
  //   setProgress((prevWidth) => prevWidth + increment);
  // }

  const [button, setButton] = useState(false);

  function handleRangeChange(event) {
    // Get the current value of the range input
    const currentValue = event.target.value;

    // Update the content of the <p> tag with the current value
    const pTag = document.getElementById("rangeValue");
    pTag.textContent = `$` + `${currentValue}`;

    setSetAmount(currentValue);
  }

  const handleButton = () => {
    setButton(true);
  };

  const handleFirstStep = () => {
    setSecondStep(true);
    setFirstStep(false);
    setThirdStep(false);
    setFourthStep(false);
    setForm(false);

    setProgress(30);
  };

  const handleSecondStep = () => {
    setSecondStep(false);
    setFirstStep(false);
    setThirdStep(true);
    setForm(false);

    setProgress(70);
  };

  const handleThirdStep = () => {
    setSecondStep(false);
    setFirstStep(false);
    setThirdStep(false);
    setFourthStep(true);
    setForm(false);

    setProgress(80);
  };

  const handleFourthStep = () => {
    setSecondStep(false);
    setFirstStep(false);
    setThirdStep(false);
    setFourthStep(false);
    setForm(true);

    setProgress(100);
  };

  const handleSelectChange = (event) => {
    setState(event.target.value);
    setButton(event.target.value); // Update the selected option in the state
  };

  const animatedDots = () => {};

  const sendLeads = async () => {
    if (firstName !== "" && lastName !== "" && email !== "" && phone !== "") {
      try {
        const response = await fetch("https://api.datahubb.io/api/ingest/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            campaign_id: 1,
            payload: {
              firstName: firstName,
              lastName: lastName,
              email: email,
              phone: phone,
              debt_amount: debtAmount,
              state: state,
            },
          }),
        });

        setFormSubmitted(true);

        setTimeout(() => {
          navigate("thank-you/");
          if (response.status === 200) {
            console.log(response);
          } else {
            console.log("Failed");
          }
        }, 3000);
      } catch (error) {
        return error;
      }
    } else {
      if (firstName === "") {
        setShowFormErrorFirstName(true);
      } else if (lastName === "") {
        setShowFormErrorLastName(true);
      } else if (email === "") {
        setShowFormErrorEmail(true);
      } else {
        setShowFormErrorPhone(true);
      }
    }
  };
  return (
    <div>
      <div className="max-w-[800px] mx-auto mt-3">
        <div className="max-w-[300px] mx-auto">
          <img src={debtReliefLogo} alt="" className="w-full" />
        </div>
      </div>
      {firstStep && (
        <div className="container md:mx-auto w-full flex flex-col items-center justify-center text-center mt-20">
          <div class="w-[80%] md:w-[30%] bg-gray-200 rounded-full h-2.5 my-7 transition-all">
            <div
              class="bg-gradient-to-r from-[#f16232] to-[#fff] h-2.5 rounded-full transition-all progress-bar"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
          <div className="w-full">
            <h2 className="text-3xl font-bold">
              Are you Eligible for Debt Relief in New York?
            </h2>
          </div>
          <div className="w-full flex items-center justify-center my-7">
            <p className="text-lg w-[50%]">
              Answer 3 quick qustions and I will give you a a step-by-step
              action plan showing you exactly what you need to get rid of your
              debt
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center my-7">
            <p id="rangeValue" className="text-2xl font-bold text-slate-800">
              $25,000
            </p>
            <div className="w-full flex items-center justify-center gap-3 my-4">
              {/* <p className="min-value font-bold top-[5rem]">$ 100</p> */}
              <input
                id="default-range"
                min={1000}
                max={100000}
                type="range"
                value={debtAmount}
                onChange={(event) => handleRangeChange(event)}
                className="w-[50%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />

              {/* <input
                  type="range"
                  max={7000}
                  min={100}
                  className="w-full md:w-[40%] p-2 rounded"
                  onChange={(event) => handleRangeChange(event)}
                  /> */}
              {/* <p className="max-value font-bold">$ 10,000</p> */}
            </div>
            <div className="number-section w-[50%] flex items-center justify-between">
              <p id="rangeValue" className="font-bold text-slate-800">
                $1000
              </p>
              <p className="max-value font-bold">$ 100,000</p>
            </div>

            <button
              onClick={handleFirstStep}
              className="p-2 border my-7 mx-3 w-[50%] md:w-[10%] hover:bg-slate-900 hover:text-white transition-all hover:rounded"
            >
              Next
            </button>
          </div>

          <div className="w-full flex items-center justify-center my-7">
            <img
              src={authorImage}
              className="rounded-full h-[65px]"
              alt="Author"
            />
            <div className="p-3 bg-gray-100  rounded font-sans font-normal w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px]  z-20  bg-gray-100 left-0 -translate-x-2 origin-center rotate-45 "></span>
              We analyze your current debt position, to see how we can help you
              the best
            </div>
          </div>
        </div>
      )}

      {/* second step */}
      {secondStep && (
        <div className="container md:mx-auto w-full flex flex-col items-center justify-center text-center gap-3 mt-20">
          <div class="w-[80%] md:w-[30%] bg-gray-200 rounded-full h-2.5 my-7">
            <div
              class="bg-gradient-to-r from-[#f16232] to-[#fff] h-2.5 rounded-full transition-all progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <h2 className="tex-xl md:text-3xl font-bold text-gray-600 my-6">
            Are you currently paying on your debt?
          </h2>
          <button
            onClick={handleSecondStep}
            className="border border-slate-900 p-1 w-[80%] md:w-[15%] rounded hover:bg-gray-200 transition-all font-semibold"
          >
            Yes
          </button>
          <button
            onClick={handleSecondStep}
            className="border border-slate-900 p-1 w-[80%] md:w-[15%] rounded hover:bg-gray-200 transition-all font-semibold"
          >
            SOMETIMES
          </button>
          <button
            onClick={handleSecondStep}
            className="border border-slate-900 p-1 w-[80%] md:w-[15%] rounded hover:bg-gray-200 transition-all font-semibold"
          >
            NO
          </button>

          <div className="w-full flex items-center justify-center my-7">
            <img
              src={authorImage}
              alt="Author"
              className="rounded-full h-[65px]"
            />
            <div className="p-3 bg-gray-100 font-sans  font-normal rounded w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px]  z-20  bg-gray-100 left-0 -translate-x-2 origin-center rotate-45 "></span>
              This helps us determine how much you should take on in your action
              plan.
            </div>
          </div>
        </div>
      )}

      {/* thirstep */}
      {thirdStep && (
        <div className="container md:mx-auto w-full flex flex-col  items-center justify-center text-center  gap-3 mt-20">
          <div class="w-[80%] md:w-[30%] bg-gray-200 rounded-full h-2.5 my-7">
            <div
              class="bg-gradient-to-r from-[#f16232] to-[#fff] h-2.5 rounded-full transition-all progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-600">
            What is your state of residence?
          </h2>
          <select
            onChange={handleSelectChange}
            className="w-[80%] md:w-[20%] rounded border p-2"
            name=""
            id=""
          >
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          {button && (
            <button
              onClick={handleFourthStep}
              className="border border-slate-900 p-1 w-[80%] md:w-[15%] rounded hover:bg-gray-200 transition-all font-semibold"
            >
              Submit
            </button>
          )}

          <div className="w-full flex items-center justify-center my-7">
            <img
              src={authorImage}
              alt="Author"
              className="rounded-full h-[65px]"
            />
            <div className="p-3 bg-gray-100 font-sans font-normal rounded w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px]  z-20  bg-gray-100 left-0 -translate-x-2 origin-center rotate-45 "></span>
              This helps us determine how much you should take on in your action
              plan.
            </div>
          </div>
        </div>
      )}

      {/* fourth step */}
      {/* {fourthStep && (
        <div className="container md:mx-auto w-full flex flex-col items-center justify-center text-center gap-3 mt-20">
          <div class="w-[80%] md:w-[50%] bg-gray-200 rounded-full h-2.5 my-7">
            <div
              class="bg-red-400 h-2.5 rounded-full progress-bar"
              style={{ width: "100%" }}
            ></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-600 my-6">
            Are you currently paying on your debt?
          </h2>
          <button className="border border-slate-900 p-1 w-[80%] md:w-[25%] rounded hover:bg-gray-200  font-semibold">
            I WANT CALL WITH AGENT
          </button>
          <button
            onClick={handleFourthStep}
            className="border border-slate-900 p-1 w-[80%] md:w-[25%] rounded hover:bg-gray-200 font-semibold"
          >
            EMAIL ME MORE INFO
          </button>
          <button className="border border-slate-900 p-1 w-[80%] md:w-[25%] rounded hover:bg-gray-200  font-semibold">
            I WANT TO LIVE CHAT WITH A AGENT
          </button>

          <div className="w-full flex items-center justify-center my-7">
            <img
              src={authorImage}
              alt="Author"
              className="rounded-full h-[65px]"
            />
            <div className="p-3 bg-gray-100 font-sans  font-normal rounded w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px]  z-20  bg-gray-100 left-0 -translate-x-2 origin-center rotate-45 "></span>
              This helps us determine how much you should take on in your action
              plan.
            </div>
          </div>
        </div>
      )} */}
      {/* form section */}
      {form && (
        <div className="max-w-[1000px] mx-auto mt-10">
          {/* form header */}
          <div className="text-center text-slate-700 px-1">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
              Great news - You may qualify for debt relief!
            </h1>
            <h3 className="text-md sm:text-lg font-semibold ">
              Complete this form for immediate access to your free savings
              estimate
            </h3>
          </div>
          {/* End form header */}

          {/* form features */}
          <div className="my-8 text-slate-700 ">
            <p className="flex items-center justify-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill=" #58beaa"
                    d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4L9 16.2z"
                  />
                </svg>
              </span>
              Relief available for many debt types
            </p>
            <p className="flex items-center justify-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill=" #58beaa"
                    d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4L9 16.2z"
                  />
                </svg>
              </span>
              See your monthly and total savings
            </p>
            <p className="flex items-center justify-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill=" #58beaa"
                    d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4L9 16.2z"
                  />
                </svg>
              </span>
              Take control of your financial future
            </p>
          </div>
          {/* End form features */}

          {formSubmitted === true ? (
            <div className="mt-20">
              <p className="text-center flex items-center justify-center text-2xl lg:text-4xl  font-semibold text-slate-700">
                Form has been submitted{" "}
                <BsCheckLg className="text-4xl lg:text-6xl text-[#58beaa]" />{" "}
              </p>
              <p className="mt-4 text-center text-xl font-semibold text-slate-700 flex items-center justify-center">Redirecting <div className="spinner-3 ml-3"></div></p>
            </div>
          ) : (
            <div>
              {/* form fields */}
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-full flex flex-col items-center justify-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 w-[80%] md:w-[40%] py-2 px-5 focus:outline-none focus:border-[#58beaa] focus:border-2 rounded"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {showFormErrorFirstName && (
                    <p className="text-sm text-red-600">
                      *Invalid input. Please enter valid input.
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 w-[80%] md:w-[40%] py-2 px-5 focus:outline-none focus:border-[#58beaa] focus:border-2 rounded"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {showFormErrorLastName && (
                    <p className="text-sm text-red-600">
                      *Invalid input. Please enter valid input.
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 w-[80%] md:w-[40%] py-2 px-5 focus:outline-none focus:border-[#58beaa] focus:border-2 rounded"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {showFormErrorEmail && (
                    <p className="text-sm text-red-600">
                      *Invalid input. Please enter valid input.
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border border-gray-300 w-[80%] md:w-[40%] py-2 px-5 focus:outline-none focus:border-[#58beaa] focus:border-2 rounded"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {showFormErrorPhone && (
                    <p className="text-sm text-red-600">
                      *Invalid input. Please enter valid input.
                    </p>
                  )}
                </div>
                <button
                  className="w-[80%] md:w-[40%] bg-[#58beaa] text-xl font-semibold py-3 rounded-md"
                  onClick={sendLeads}
                >
                  See if You Qualify
                </button>
              </div>
              {/* End form fields */}

              {/* description */}
              <div className="w-[80%] mx-auto mt-10 text-gray-600">
                <p className="text-[12px] sm:text-[14px] text-center leading-6">
                  By clicking <strong>"See if ou Qualify" above</strong>, you
                  agree that the phone number and email address you are
                  providing may be used to contact you by{" "}
                  <strong>Debt Relief Helpdesk</strong>
                  (including auto-dialed/auto-selected and prerecorded calls, as
                  well as text/SMS messages). Msg and data rates apply, and your
                  consent to such contact/marketing is not required for
                  purchase. Msg frequency varies; max 2 texts per day and 7
                  texts per week. We ma also e-mail ou and you may let us know
                  at any time if you are no longer interested in hearing from us
                  via a particular communication platform.
                </p>
              </div>
              {/* End description */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Home;

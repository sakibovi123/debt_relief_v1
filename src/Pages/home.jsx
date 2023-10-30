import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import avt from "../Asset/author_freeman.webp";

const Home = () => {
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [fourthStep, setFourthStep] = useState(false);
  const [form, setForm] = useState(false);

  const [progress, setProgress] = useState(15);

  // variables
  const [debtAmount, setSetAmount] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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
    setButton(event.target.value); // Update the selected option in the state
  };

  const sendLeads = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/ingest/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campaign_id: 5,
          payload: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            debt_amount: debtAmount,
            state: "CA",
          },
        }),
      });

      navigate("thank-you/");
      if (response.status === 200) {
        console.log(response);
      } else {
        console.log("Failed");
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <div>
      {firstStep && (
        <div className="container md:mx-auto w-full flex flex-col items-center justify-center text-center my-[6rem]">
          <div class="w-[80%] md:w-[50%] bg-gray-200 rounded-full h-2.5 my-7 transition-all">
            <div
              class="bg-red-400 h-2.5 rounded-full transition-all progress-bar"
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
              $100
            </p>
            <div className="w-full flex items-center justify-center gap-3 my-4">
              {/* <p className="min-value font-bold top-[5rem]">$ 100</p> */}
              <input
                id="default-range"
                min={1000}
                max={10000}
                type="range"
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
                $100
              </p>
              <p className="max-value font-bold">$ 10,000</p>
            </div>

            <button
              onClick={handleFirstStep}
              className="p-2 border my-7 mx-3 w-[50%] md:w-[10%] hover:bg-slate-900 hover:text-white transition-all hover:rounded"
            >
              Next
            </button>
          </div>

          <div className="w-full flex items-center justify-center my-7">
            <img src={avt} className="rounded-full h-[70px]" />
            <div className="p-3 bg-white border rounded font-semibold w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px] border border-t-0 border-r-0 z-20  bg-white left-0 -translate-x-2 origin-center rotate-45 "></span>
              We analyze your current debt position to see how we can help you
              the best
            </div>
          </div>
        </div>
      )}

      {/* second step */}
      {secondStep && (
        <div className="container md:mx-auto w-full flex flex-col items-center justify-center text-center my-[6rem] gap-3">
          <div class="w-[80%] md:w-[50%] bg-gray-200 rounded-full h-2.5 my-7">
            <div
              class="bg-red-400 h-2.5 rounded-full transition-all progress-bar"
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
            <img src={avt} className="rounded-full h-[70px]" />
            <div className="p-3 bg-white border font-semibold rounded w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px] border border-t-0 border-r-0 z-20  bg-white left-0 -translate-x-2 origin-center rotate-45 "></span>
              This helps us determine how much you should take on in your action
              plan.
            </div>
          </div>
        </div>
      )}

      {/* thirstep */}
      {thirdStep && (
        <div className="container md:mx-auto w-full flex flex-col gap-5 items-center justify-center text-center my-[6rem] gap-3">
          <div class="w-[80%] md:w-[50%] bg-gray-200 rounded-full h-2.5 my-7">
            <div
              class="bg-red-400 h-2.5 rounded-full transition-all progress-bar"
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
              onClick={handleThirdStep}
              className="border border-slate-900 p-1 w-[80%] md:w-[15%] rounded hover:bg-gray-200 transition-all font-semibold"
            >
              Submit
            </button>
          )}

          <div className="w-full flex items-center justify-center my-7">
            <img src={avt} className="rounded-full h-[70px]" />
            <div className="p-3 bg-white border font-semibold rounded w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px] border border-t-0 border-r-0 z-20  bg-white left-0 -translate-x-2 origin-center rotate-45 "></span>
              This helps us determine how much you should take on in your action
              plan.
            </div>
          </div>
        </div>
      )}

      {/* fourth step */}
      {fourthStep && (
        <div className="container md:mx-auto w-full flex flex-col items-center justify-center text-center my-[6rem] gap-3">
          <div class="w-[80%] md:w-[50%] bg-gray-200 rounded-full h-2.5 my-7">
            <div
              class="bg-red-400 h-2.5 rounded-full progress-bar"
              style={{ width: "100%" }}
            ></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-600 my-6">
            Are you currently paying on your debt?
          </h2>
          <button className="border border-slate-900 p-1 w-[80%] md:w-[25%] rounded hover:bg-gray-200 transition-all font-semibold">
            I WANT CALL WITH AGENT
          </button>
          <button
            onClick={handleFourthStep}
            className="border border-slate-900 p-1 w-[80%] md:w-[25%] rounded hover:bg-gray-200 transition-all font-semibold"
          >
            EMAIL ME MORE INFO
          </button>
          <button className="border border-slate-900 p-1 w-[80%] md:w-[25%] rounded hover:bg-gray-200 transition-all font-semibold">
            I WANT TO LIVE CHAT WITH A AGENT
          </button>

          <div className="w-full flex items-center justify-center my-7">
            <img src={avt} className="rounded-full h-[70px]" />
            <div className="p-3 bg-white border  font-semibold rounded w-full md:w-[30%] mx-3 text-left relative flex flex-col justify-center">
              <span className="absolute h-[14px] w-[14px] border border-t-0 border-r-0 z-20  bg-white left-0 -translate-x-2 origin-center rotate-45 "></span>
              This helps us determine how much you should take on in your action
              plan.
            </div>
          </div>
        </div>
      )}
      {/* form section */}
      {form && (
        <div className="mt-32 px-3 bg-slate-200 py-12 max-w-[800px] mx-auto shadow-md sm:px-12 sm:rounded">
          <p className="text-2xl font-semibold text-blue-700 mb-6 sm:text-4xl">
            Fill out the form.
          </p>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="first-name"
              className="text-slate-900 font-semibold "
            >
              First Name:
            </label>
            <input
              type="text"
              id="first-name"
              className="border focus:outline-none focus:border-purple-600 px-2 py-1 text-lg sm:text-xl sm:py-2"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="last-name" className="text-slate-900 font-semibold">
              Last Name:
            </label>
            <input
              type="text"
              id="last-name"
              className="border focus:outline-none focus:border-purple-600 px-2 py-1 text-lg sm:text-xl sm:py-2"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col  mb-4">
            <label htmlFor="e-mail" className="text-slate-900 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="e-mail"
              className="border focus:outline-none focus:border-purple-600 px-2 py-1 text-lg sm:text-xl sm:py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col  mb-6">
            <label htmlFor="phone" className="text-slate-900 font-semibold">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              className="border focus:outline-none focus:border-purple-600 px-2 py-1 text-lg sm:text-xl sm:py-2"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="text-center w-full">
            <button
              className="bg-green-600 w-full text-white py-4 text-lg sm:text-2xl"
              onClick={sendLeads}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;

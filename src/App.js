import React, { useState } from "react";
import RequistionDetails from "./components/RequistionDetails";
import JobDetails from "./components/JobDetails";
import InterviewSettings from "./components/InterviewSettings";
import Draft from "./components/Draft";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const [allData, setAllData] = useState([]);
  console.log(allData)

  return (
    <div className="flex justify-center">
      <div className="w-[80%] space-y-10">
        <div className="text-3xl font-bold">Create Candidate Requisition</div>
        <div>
          <ul className="border-b-2 border-black list-none flex">
            <li
              className={`p-2 ${
                activeStep === 1 ? "border-b-blue-500 border-b-2" : ""
              }`}
            >
              Requisition Details
            </li>
            <li
              className={`p-2 ${
                activeStep === 2 ? "border-b-blue-500 border-b-2" : ""
              }`}
            >
              Job Details
            </li>
            <li
              className={`p-2 ${
                activeStep === 3 ? "border-b-blue-500 border-b-2" : ""
              }`}
            >
              Interview Settings
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            {activeStep === 1 && (
              <RequistionDetails
                handleNext={handleNext}
                setAllData={setAllData}
              />
            )}
            {activeStep === 2 && (
              <JobDetails
                handlePrev={handlePrev}
                handleNext={handleNext}
                setAllData={setAllData}
              />
            )}
            {activeStep === 3 && (
              <InterviewSettings
                handlePrev={handlePrev}
                setAllData={setAllData}
              />
            )}
          </div>
          <div className="col-span-1">
            <Draft allData={allData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

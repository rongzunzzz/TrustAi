import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import { stepsConfig } from "../../config/config.jsx";
import { useContext } from "react";
import PageInfoContext from "../../context/pageInfo";

function Stepper() {
  const steps = stepsConfig;
  const { currentContextStep, incrementCurrentContextStep, allComplete } =
    useContext(PageInfoContext);
  // const [currentStep, setCurrentStep] = useState(1);
  // const [allComplete, setAllComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between mx-auto mt-6 w-6/6">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentContextStep === i + 1 && "active"} ${
              (i + 1 < currentContextStep || allComplete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentContextStep || allComplete ? (
                <TiTick size={24} />
              ) : (
                i + 1
              )}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>

      {/* {!allComplete && (
        <button
          className="bg-white btn"
          onClick={() => {
            currentContextStep === steps.length
              ? setAllComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : `To ${steps[currentStep]}`}
        </button>
      )} */}
    </>
  );
}
export default Stepper;

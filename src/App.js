import React, { useState } from "react";
import "./App.css";
import { FormStep1 } from "./FormStep1";
import { FormStep2 } from "./FormStep2";
import { FormStep3 } from "./FormStep3";
import { FormStep4 } from "./FormStep4";
import { FormStep5 } from "./FormStep5";
import { Sidebar } from "./Sidebar";

export function App() {
  const [step, setStep] = useState(1);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [planDetails, setPlanDetails] = useState({
    plan: "",
    timeFrame: "Monthly",
    price: "",
  });
  const [addOnDetails, setAddOnDetails] = useState([]);

  function handleStepState(stepStateValue) {
    setStep(stepStateValue);
  }
  function handleCustomerData(data) {
    setCustomerDetails(data);
  }
  function handlePlanData(data) {
    setPlanDetails(data);
  }
  function handleAddOnData(data) {
    setAddOnDetails(data);
  }

  console.log(customerDetails, planDetails, addOnDetails)

  if (step === 1)
    return (
      <div id="app" className="flex-row">
        <Sidebar step={1} />{" "}
        <FormStep1
          stepState={handleStepState}
          submittedData={handleCustomerData}
          savedData={customerDetails}
        />
      </div>
    );
  if (step === 2)
    return (
      <div id="app" className="flex-row">
        <Sidebar step={2} />{" "}
        <FormStep2
          stepState={handleStepState}
          submittedData={handlePlanData}
          savedData={planDetails}
        />
      </div>
    );
  if (step === 3)
    return (
      <div id="app" className="flex-row">
        <Sidebar step={3} />{" "}
        <FormStep3
          stepState={handleStepState}
          submittedData={handleAddOnData}
          timeFrame={planDetails.timeFrame}
          savedData={addOnDetails}
        />
      </div>
    );
  if (step === 4)
    return (
      <div id="app" className="flex-row">
        <Sidebar step={4} />{" "}
        <FormStep4
          stepState={handleStepState}
          savedData={{
            customerDetails: customerDetails,
            planDetails: planDetails,
            addOnDetails: addOnDetails,
          }}
        />
      </div>
    );
  if (step === 5)
    return (
      <div id="app" className="flex-row">
        <Sidebar step={4} /> <FormStep5 />
      </div>
    );
}

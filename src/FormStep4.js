import React from "react";
import { pricing } from "./pricingDb";

export function FormStep4(props) {
  function handleGoBack() {
    props.stepState(3);
  }
  function handleNextStep(event) {
    props.stepState(5);
    event.preventDefault();
  }
  function handleChange() {
    props.stepState(2);
  }
  const plan = props.savedData.planDetails.plan;
  const timeFrame = props.savedData.planDetails.timeFrame;
  let totalCost = 0;
  for (let i = 0; i < props.savedData.addOnDetails.length; i++) {
    totalCost =
      totalCost +
      pricing.addOns[props.savedData.addOnDetails[i].name][timeFrame];
  }
  totalCost = totalCost + pricing.plans[plan][timeFrame];

  return (
    <form onSubmit={handleNextStep}>
      <h1>Finishing up</h1>
      <h2>Double check that everything looks OK before confirming</h2>
      <div id="summary">
        <div id="summary-plan" className="flex-row">
          <div className="plan-details">
            <p className="grey align-left">
              {plan} ({timeFrame})
            </p>
            <p id="change" className="grey align-left" onClick={handleChange}>
              Change
            </p>
          </div>
          <p className="dark-blue align-right">
            ${pricing.plans[plan][timeFrame]}/
            {timeFrame === "Monthly" ? "mo" : "yr"}
          </p>
        </div>
        <div id="summary-add-ons">
          {props.savedData.addOnDetails.map((addOn, id) => {
            return (
              <div className="summary-add-on flex-row" key={id}>
                <p className="grey align-left">
                  {addOn.name.replace("_", " ")}
                </p>
                <p className="dark-blue align-right">
                  ${addOn.price}/{timeFrame === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div id="total-price" className="flex-row">
        <p className="grey align-left">
          Total (per {timeFrame === "Monthly" ? "month" : "year"})
        </p>
        <p className="bold dark-blue align-right">
          ${totalCost}/{timeFrame === "Monthly" ? "mo" : "yr"}
        </p>
      </div>

      <section className="buttons">
        <button type="button" className="back-btn" onClick={handleGoBack}>
          Go back
        </button>
        <button className="next-btn">Confirm</button>
      </section>
    </form>
  );
}

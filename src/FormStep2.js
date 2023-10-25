import React, { useState, useEffect } from "react";
import { Planselector } from "./PlanSelector";
import { pricing } from "./pricingDb";

export function FormStep2(props) {
  const [plan, setPlan] = useState(props.savedData.plan)
  const [timeFrame, setTimeFrame] = useState(props.savedData.timeFrame);
  console.log(timeFrame)

  useEffect(() => {
    if (props.savedData.plan !== ''){
      document.getElementById(props.savedData.plan.toLowerCase()).classList.add('selected')
      props.savedData.timeFrame === 'Yearly'? 
      document.getElementById('toggle-check').checked = true :
      document.getElementById('toggle-check').checked = false 
    }
  }, [props.savedData.plan, props.savedData.timeFrame])

  function handlePlanState(planStateValue){
    setPlan(planStateValue)
    document.getElementById('plan-error').className='hide'
  }

  function handleToggle() {
  if (timeFrame === "Monthly"){
    setTimeFrame("Yearly")
    document.getElementById('monthly-text').classList.replace('dark-blue', 'grey')
    document.getElementById('yearly-text').classList.replace('grey', 'dark-blue')
  } else {
    setTimeFrame("Monthly")
    document.getElementById('yearly-text').classList.replace('dark-blue', 'grey')
    document.getElementById('monthly-text').classList.replace('grey', 'dark-blue')
  }
  }

  function handleGoBack(){
    props.stepState(1)
  }

  function handleNextStep(event){
    if (plan === '') {
      document.getElementById('plan-error').className='error'
    } else {
      props.submittedData({
        plan: plan,
        timeFrame: timeFrame,
        price: pricing.plans[plan][timeFrame]
      })
      props.stepState(3)
    }
    event.preventDefault()
  }

  return (
    <form onSubmit={handleNextStep}>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing</h2>
        <Planselector 
        timeFrame={timeFrame} 
        plan={handlePlanState} 
        />
        <p className="hide" id="plan-error">Please select a plan</p>
        <div className="toggle flex-row center-content">
        <p id="monthly-text" className={timeFrame === 'Monthly'? 'dark-blue bold': 'grey bold'}>Monthly</p>
        <label className="switch">
          <input id='toggle-check' type="checkbox" onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
        <p id="yearly-text" className={timeFrame === 'Yearly'? 'dark-blue bold': 'grey bold'}>Yearly</p>
        </div>
        <section className="buttons">
        <button type="button" className="back-btn" onClick={handleGoBack}>Go back</button>
        <button type="submit" className="next-btn" >Next step</button>
        </section>
    </form>
  );
}

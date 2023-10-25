import React, {useEffect} from 'react';
import {AddOnComponent} from './AddOnComponent.js'
import { pricing } from "./pricingDb";

export function FormStep3(props) {

  useEffect(() => {
    if (props.savedData.length > 0){
        for (let i = 0; i < props.savedData.length; i++){
            document.getElementById(props.savedData[i].name.replace('_', '-')).classList.add('selected')
        }
    }
  },[props.savedData])

  function handleGoBack(){
    props.stepState(2)
  }

  function handleNextStep(event){
    const selected = document.querySelectorAll('.selected')
    let savedAddOns = []
    for (let i = 0; i < selected.length; i++){
      const addOnName = selected[i].id.replace('-', '_')
      const price = pricing.addOns[addOnName][props.timeFrame]
      const addOn = {
        name: addOnName,
        price: price
      }
      savedAddOns.push(addOn)
    }
    props.submittedData(
      savedAddOns
)
    props.stepState(4)
    event.preventDefault()
  }

    return (
        <form onSubmit={handleNextStep}>
          <h1>Pick add-ons</h1>
          <h2>Add-ons help enhance your gaming experience</h2>
          <div id='add-on-selector' className='flex-column'>
            <AddOnComponent 
            addOnName="Online service" 
            addOnDescription="Access to multiplayer games" 
            pricing={props.timeFrame === 'Monthly'? '+$1/mo': '+10/yr'}
            />
            <AddOnComponent 
            addOnName="Larger storage" 
            addOnDescription="Extra 1 TB of cloud save" 
            pricing={props.timeFrame === 'Monthly'? '+$2/mo': '+20/yr'}
            />
            <AddOnComponent 
            addOnName="Customizable profile" 
            addOnDescription="Custom theme on your profile" 
            pricing={props.timeFrame === 'Monthly'? '+$2/mo': '+20/yr'}
            />
        </div>
          <section className="buttons">
        <button type='button' className="back-btn" onClick={handleGoBack}>Go back</button>
        <button type='submit' className="next-btn">Next step</button>
        </section>
      </form>
    )
}
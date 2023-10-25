import React from 'react';
import { NameInput, EmailInput, PhoneInput } from './InputComponents.js';

export function FormStep1(props) {
    function handleNextStep(event){
        const nameRegEx = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/
        const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const phoneRegEx = /[0-9]{10,13}/

        let name
        let email
        let phone
        if (nameRegEx.test(document.getElementById('name-input').value)){
            name=true
            document.getElementById('name-error').className='hide'
        } else {
            document.getElementById('name-error').className='error'
        }

        if (emailRegEx.test(document.getElementById('email-input').value)){
            email=true
            document.getElementById('email-error').className='hide'
        } else {
            document.getElementById('email-error').className='error'
        }

        if (phoneRegEx.test(document.getElementById('phone-input').value)){
            phone=true
            document.getElementById('phone-error').className='hide'
        } else {
            document.getElementById('phone-error').className='error'
        }

        if (name && email && phone){
            props.submittedData({
                name: document.getElementById('name-input').value,
                email: document.getElementById('email-input').value,
                phone: document.getElementById('phone-input').value
            })
            props.stepState(2)
        }
        event.preventDefault()
    }


    return (
        <form onSubmit={handleNextStep}>
            <h1>Personal info</h1>
            <h2>Please provide your name, email address and phone number</h2>
            <NameInput value={props.savedData.name}/>
            <EmailInput value={props.savedData.email}/>
            <PhoneInput value={props.savedData.phone}/>
            <section className='buttons'>
            <button type="submit" className="next-btn">Next step</button>
            </section>
        </form>
    )
}
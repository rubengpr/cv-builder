import React from 'react';
import './App.css'

import { Pdf } from './components/pdf-view/PdfView.jsx'
import { H1 } from './components/pdf-view/components/H1/H1.jsx'
import { PersonalInfo } from './components/pdf-view/components/personal-info/PersonalInfo.jsx'
import { SectionTitle } from './components/pdf-view/components/section-title/SectionTitle.jsx'
import { CvElement } from './components/pdf-view/components/cv-element/CvElement.jsx'
import { ControlMenu } from './components/control-menu/ControlMenu.jsx'
import { InputBox } from './components/control-menu/components/input-box/InputBox.jsx'
import { Input } from './components/control-menu/components/input-box/input-element/Input.jsx'
import { useState } from 'react'

export default function App() {

  const [name, setName] = useState('Antonio Banderas')

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value)
  }

  return (
    <React.StrictMode>
      <div className="container">  
        <ControlMenu>
          <InputBox title="Personal information" showButton={false} >
            <Input handleNameChange={handleNameChange} label="Name" id="name" />
            <Input handlePhoneChange={handlePhoneChange} label="Phone number" id="phone" />
            <Input label="Email" id="email" />
            <Input label="City" id="city" />
          </InputBox>
          <InputBox title="Work experience" showButton={true} text='Add work' >
            <Input label="Company" id="company" />
            <Input label="Position" id="position" />
            <Input label="Start Date" id="work-start-date" />
            <Input label="End Date" id="work-end-date" />
            <Input label="Description" id="description" />
          </InputBox>
          <InputBox title="Education" showButton={true} text='Add education' >
            <Input label="School" id="school" />
            <Input label="Degree" id="degree" />
            <Input label="Start Date" id="education-start-date" />
            <Input label="End Date" id="education-end-date" />
            <Input label="Location" id="location" />
          </InputBox>
        </ControlMenu>
        <Pdf>
          <div className='header'>
            <H1 name={name} />
            <div className='personal-info-container'>
              <PersonalInfo src="/phone.svg" data="" />
              <PersonalInfo src="/email.svg" data="rubengpr@gmail.com" />
              <PersonalInfo src="/pin.svg" data="Barcelona, Spain" />
              </div>
          </div>
          <div className="body-cv">
            <SectionTitle title="Work Experience" />
            <CvElement period="Feb 2024-Now" city="Barcelona" place="Talenom" subject="Product Manager" />
            <CvElement period="Feb 2023-Jul 2023" city="San José" place="Moovin Logistics" subject="Product Lead" />
            <SectionTitle title="Education" />
            <CvElement period="2020-2021" city="Granada" place="Universidad de Granada" subject="Masters in Economics" />
            <CvElement period="2014-2018" city="Barcelona" place="Universitat de Barcelona" subject="Bachelor in Business Administration" />
          </div>
        </Pdf>
      </div>
    </React.StrictMode>
  )
}
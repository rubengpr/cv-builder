import './App.css'
import React from 'react';
import { Pdf } from './components/pdf/Pdf.jsx'
import { H1 } from './components/pdf/components/H1/H1.jsx'
import { PersonalInfo } from './components/pdf/components/personal-info/PersonalInfo.jsx'
import { SectionTitle } from './components/pdf/components/section-title/SectionTitle.jsx'
import { CvElement } from './components/pdf/components/cv-element/CvElement.jsx'
import { ControlMenu } from './components/control-menu/ControlMenu.jsx';
import { InputBox } from './components/control-menu/components/input-box/InputBox.jsx'
import { Input } from './components/control-menu/components/input-box/input/Input.jsx'

export default function App() {

  return (
    <React.StrictMode>
      <div className="container">  
        <ControlMenu>
          <InputBox title="Personal information">
            <Input label="Name" />
            <Input label="Phone number" />
            <Input label="Email" />
            <Input label="City" />
          </InputBox>
          <InputBox title="Work experience">
            <Input label="Company" />
            <Input label="Position" />
            <Input label="Start Date" />
            <Input label="End Date" />
            <Input label="Description" />
          </InputBox>
          <InputBox title="Education">
            <Input label="School" />
            <Input label="Degree" />
            <Input label="Start Date" />
            <Input label="End Date" />
            <Input label="Location" />
          </InputBox>
        </ControlMenu>
        <Pdf>
          <div className='header'>
            <H1 name="Ruben Godoy" />
            <div className='personal-info-container'>
              <PersonalInfo src="/phone.svg" data="+34 685 90 38 45" />
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
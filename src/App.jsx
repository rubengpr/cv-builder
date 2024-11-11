import './App.css'
import React from 'react';
import { Pdf } from './components/pdf/pdf.jsx'
import { H1 } from './components/pdf/components/H1/H1.jsx'
import { PersonalInfo } from './components/pdf/components/personal-info/personal-info.jsx'
import { SectionTitle } from './components/pdf/components/section-title/section-title.jsx'
import { CvElement } from './components/pdf/components/cv-element/cv-element.jsx'

export default function App() {

  return (
    <React.StrictMode>
      <Pdf>
        <div className='header'>
          <H1 name="Ruben Godoy" />
          <div className='personal-info-container'>
            <PersonalInfo src="./public/phone.svg" data="+34 685 90 38 45" />
            <PersonalInfo src="./public/email.svg" data="rubengpr@gmail.com" />
            <PersonalInfo src="./public/pin.svg" data="Barcelona, Spain" />
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
    </React.StrictMode>
  )
}
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
          <H1 />
          <div className='personal-info-container'>
            <PersonalInfo/>
            <PersonalInfo/>
            <PersonalInfo/>
            </div>
        </div>
        <div className="body-cv">
          <SectionTitle />
          <CvElement />
          <CvElement />
          <SectionTitle />
          <CvElement />
          <CvElement />
        </div>
      </Pdf>
    </React.StrictMode>
  )
}
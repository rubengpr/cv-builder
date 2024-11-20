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

  const [name, setName] = useState('Ruben Godoy');
  const [phone, setPhone] = useState('+34 685 30 95 44');
  const [email, setEmail] = useState('rubengpr@gmail.com');
  const [city, setCity] = useState('Barcelona');

  const [workExperiences, setWorkExperiences] = useState([
    {
      period: "Feb 2024-Now",
      city: "Barcelona",
      place: "Talenom",
      subject: "Product Manager",
    },
    {
      period: "Feb 2023-Jul 2023",
      city: "San José",
      place: "Moovin Logistics",
      subject: "Product Lead",
    },
  ]);

  const [educationExperiences, setEducationExperiences] = useState([
    {
      period: "2014-2018",
      city: "Barcelona",
      place: "Universitat de Barcelona",
      subject: "Bachelors' in Business Administration",
    },
    {
      period: "Oct 2020-Oct 2021",
      city: "Granada",
      place: "Universidad de Granada",
      subject: "Master in Economics",
    },
  ]);

  function handleChange(event) {
    let inputId = event.target.id

    switch (inputId) {
      case 'name':
        setName(event.target.value)
        break;

      case 'phone':
        setPhone(event.target.value)
        break;

      case 'email':
        setEmail(event.target.value)
        break;

      case 'city':
        setCity(event.target.value)
        break;

      case 'company':
        setCompany(event.target.value)
        break;

      case 'position':
        setPosition(event.target.value)
        break;

      case 'work-start-date':
        setStartDate(event.target.value)
        break;

      case 'work-end-date':
        setEndDate(event.target.value)
        break;

      case 'location':
        setLocation(event.target.value)
        break;
    }

  }

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  
  function handleClickButton(event) {

    let buttonText = event.target.textContent
    if (buttonText === 'Add work') {
      setWorkExperiences([
        ...workExperiences,
        {
          period: `${startDate} - ${endDate}`,
          city: location,
          place: company,
          subject: position,
        },
      ]);
    } else {
      setEducationExperiences([
        ...educationExperiences,
        {
          period: `${startDate} - ${endDate}`,
          city: location,
          place: company,
          subject: position,
        },
      ]);
    }

  }

  return (
    <React.StrictMode>
      <div className="container">  
        <ControlMenu>
          <InputBox title="Personal information" showButton={false} >
            <Input handleChange={handleChange} label="Name" id="name" />
            <Input handleChange={handleChange} label="Phone number" id="phone" />
            <Input handleChange={handleChange} label="Email" id="email" />
            <Input handleChange={handleChange} label="City" id="city" />
          </InputBox>
          <InputBox title="Work experience" showButton={true} value={company} handleClickButton={handleClickButton} text='Add work' >
            <Input handleChange={handleChange} label="Company" id="company" />
            <Input handleChange={handleChange} label="Position" id="position" />
            <Input handleChange={handleChange} label="Start Date" id="work-start-date" />
            <Input handleChange={handleChange} label="End Date" id="work-end-date" />
            <Input handleChange={handleChange} label="Location" id="location" />
          </InputBox>
          <InputBox title="Education" showButton={true} text='Add education' handleClickButton={handleClickButton} >
            <Input handleChange={handleChange} label="School" id="school" />
            <Input handleChange={handleChange} label="Degree" id="degree" />
            <Input handleChange={handleChange} label="Start Date" id="education-start-date" />
            <Input handleChange={handleChange} label="End Date" id="education-end-date" />
            <Input handleChange={handleChange} label="Location" id="location" />
          </InputBox>
        </ControlMenu>
        <Pdf>
          <div className='header'>
            <H1 name={name} />
            <div className='personal-info-container'>
              <PersonalInfo src="/phone.svg" name={phone} />
              <PersonalInfo src="/email.svg" name={email} />
              <PersonalInfo src="/pin.svg" name={city} />
              </div>
          </div>
          <div className="body-cv">
            <SectionTitle title="Work Experience" />
            {workExperiences.map((experience, index) => (
              <CvElement
                key={index}
                period={experience.period}
                city={experience.city}
                place={experience.place}
                subject={experience.subject}
              />
            ))}
            <SectionTitle title="Education" />
            {educationExperiences.map((experience, index) => (
              <CvElement
                key={index}
                period={experience.period}
                city={experience.city}
                place={experience.place}
                subject={experience.subject}
              />
            ))}
          </div>
        </Pdf>
      </div>
    </React.StrictMode>
  )
}
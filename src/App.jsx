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
import { LogCard } from './components/control-menu/log-card/LogCard.jsx'
import { StylesCard } from './components/control-menu/styles-card/StylesCard.jsx'
import { ColorCard } from './components/control-menu/color-card/ColorCard.jsx'
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
    let inputValue = event.target.value

    switch (inputId) {
      case 'name':
        setName(inputValue)
        break;

      case 'phone':
        setPhone(inputValue)
        break;

      case 'email':
        setEmail(inputValue)
        break;

      case 'city':
        setCity(inputValue)
        break;

      case 'company':
        setCompany(inputValue)
        break;

      case 'position':
        setPosition(inputValue)
        break;

      case 'work-start-date':
        setWorkStartDate(inputValue)
        break;

      case 'work-end-date':
        setWorkEndDate(inputValue)
        break;

      case 'work-location':
        setWorkLocation(inputValue)
        break;

      case 'school':
        setSchool(inputValue)
        break;

      case 'degree':
        setDegree(inputValue)
        break;
      
      case 'education-start-date':
        setEdStartDate(inputValue)
        break;

      case 'education-end-date':
        setEdEndDate(inputValue)
        break;

      case 'education-location':
        setEdLocation(inputValue)
        break;
    }

  }

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [workStartDate, setWorkStartDate] = useState("");
  const [workEndDate, setWorkEndDate] = useState("");
  const [workLocation, setWorkLocation] = useState("");

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [edStartDate, setEdStartDate] = useState("");
  const [edEndDate, setEdEndDate] = useState("");
  const [edLocation, setEdLocation] = useState("");
  
  function handleClickButton(event) {

    let buttonText = event.target.textContent
    if (buttonText === 'Add work') {
      setWorkExperiences([
        ...workExperiences,
        {
          period: `${workStartDate} - ${workEndDate}`,
          city: workLocation,
          place: company,
          subject: position,
        },
      ]);

      setCompany('');
      setPosition('');
      setWorkStartDate('');
      setWorkEndDate('');
      setWorkLocation('');

    } else {
      setEducationExperiences([
        ...educationExperiences,
        {
          period: `${edStartDate} - ${edEndDate}`,
          city: edLocation,
          place: school,
          subject: degree,
        },
      ]);

      setCompany('');
      setPosition('');
      setEdStartDate('');
      setEdEndDate('');
      setEdLocation('');

    }

  }

  function handleClickDeleteWork(indexToDelete) {
    setWorkExperiences([
      ...workExperiences.slice(0, indexToDelete),
      ...workExperiences.slice(indexToDelete + 1),
    ]);
  }

  function handleClickDeleteEducation(indexToDelete) {
    setEducationExperiences([
      ...educationExperiences.slice(0, indexToDelete),
      ...educationExperiences.slice(indexToDelete + 1),
    ]);
  }

  const [font, setFont] = useState('arial')
  const fontClass = `font-${font.toLowerCase()}`;
  
  function handleFontChange(event) {
    setFont(event.target.textContent);
  }

  const [color, setColor] = useState('#ffe4c4');

  function handleColorChange(event) {
    setColor(event.target.value)
    console.log(color);
  }

  return (
    <React.StrictMode>
      <div className="container">
        <ControlMenu>
          <InputBox title="Styling properties" showButton={false}>
            <StylesCard handleFontChange={handleFontChange} />
            <ColorCard handleColorChange={handleColorChange} color={color} />
          </InputBox>
          <InputBox title="Personal information" showButton={false} >
            <Input handleChange={handleChange} label="Name" id="name" />
            <Input handleChange={handleChange} label="Phone number" id="phone" />
            <Input handleChange={handleChange} label="Email" id="email" />
            <Input handleChange={handleChange} label="City" id="city" />
          </InputBox>
          
          <InputBox title="Work experience" showButton={true} handleClickButton={handleClickButton} text='Add work' >
            <Input handleChange={handleChange} label="Company" id="company" value={company} />
            <Input handleChange={handleChange} label="Position" id="position" value={position} />
            <Input handleChange={handleChange} label="Start Date" id="work-start-date" value={workStartDate} />
            <Input handleChange={handleChange} label="End Date" id="work-end-date" value={workEndDate} />
            <Input handleChange={handleChange} label="Location" id="work-location" value={workLocation} />
          </InputBox>
          {workExperiences.map((experience, index) => (
            <LogCard
            key={index}
            title={experience.place}
            handleClickDelete={() => handleClickDeleteWork(index)}
          />
          ))
          }
          <InputBox title="Education" showButton={true} text='Add education' handleClickButton={handleClickButton} >
            <Input handleChange={handleChange} label="School" id="school" value={school} />
            <Input handleChange={handleChange} label="Degree" id="degree" value={degree} />
            <Input handleChange={handleChange} label="Start Date" id="education-start-date" value={edStartDate} />
            <Input handleChange={handleChange} label="End Date" id="education-end-date" value={edEndDate} />
            <Input handleChange={handleChange} label="Location" id="education-location" value={edLocation} />
          </InputBox>
          {educationExperiences.map((experience, index) => (
            <LogCard
            key={index}
            title={experience.place}
            handleClickDelete={() => handleClickDeleteEducation(index)}
          />
          ))
          }
        </ControlMenu>
        <Pdf fontClass={fontClass}>
          <div className='header' style={{ backgroundColor: color }}>
            <H1 name={name} />
            <div className='personal-info-container'>
              <PersonalInfo src="/phone.svg" name={phone} />
              <PersonalInfo src="/email.svg" name={email} />
              <PersonalInfo src="/pin.svg" name={city} />
              </div>
          </div>
          <div className="body-cv">
            <SectionTitle title="Work Experience" color={color} />
            {workExperiences.map((experience, index) => (
              <CvElement
                key={index}
                period={experience.period}
                city={experience.city}
                place={experience.place}
                subject={experience.subject}
              />
            ))}
            <SectionTitle title="Education" color={color} />
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
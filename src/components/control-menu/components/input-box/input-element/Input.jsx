import './Input.css'
import { useState } from 'react'

export function Input({ label, id }) {
    const [cvName, setCvName] = useState("")
    
    const handleInputValue = (event) => {
        setCvName(event.target.value)
    }

    return(
        <div className="input">
            <label htmlFor={id} >{label}</label>
            <input
                id={id} 
                type="text"
                value={cvName}
                onChange={handleInputValue} />
        </div>
    )
}
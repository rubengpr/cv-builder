import './Input.css'

export function Input({ label, placeholder, id }) {
    return(
        <div className="input">
            <label htmlFor={id} >{label}</label>
            <input id={id} type="text" placeholder={placeholder} />
        </div>
    )
}
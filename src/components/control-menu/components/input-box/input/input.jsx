import './input.css'

export function Input({ label, placeholder }) {
    return(
        <>
            <label htmlFor="name">{label}</label>
            <input type="text" placeholder={placeholder} />
        </>
    )
}
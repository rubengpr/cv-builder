import './input-box.css'
import { Input } from './input/input.jsx'

export function InputBox({ title, label, placeholder }) {
    return(
        <div className="input-box">
            <h2>{title}</h2>
            <Input label="Name" placeholder="Ruben Godoy" />
            <Input label="Phone number" placeholder="+34 685 90 38 45" />
            <Input label="Email" placeholder="rubengpr@gmail.com" />
            <Input label="City" placeholder="Barcelona, Spain" />
        </div>
    )
}
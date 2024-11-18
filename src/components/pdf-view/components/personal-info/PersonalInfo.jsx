import './PersonalInfo.css'

export function PersonalInfo({ src, data }) {
    return(
        <div className='personal-info'>
            <img className='icon' src={src} alt="An icon" />
            <p>{data}</p>
        </div>
        
    )
}
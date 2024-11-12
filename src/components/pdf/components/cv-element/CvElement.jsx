import './CvElement.css'

export function CvElement({ period, city, place, subject }) {
    return(
        <div className="divs-container">
            <div className="div1">
                <p className='period'>{period}</p>
                <p>{city}</p>
            </div>
            <div className="div2">
                <p className='place'>{place}</p>
                <p>{subject}</p>
            </div>
        </div>  
    )
}
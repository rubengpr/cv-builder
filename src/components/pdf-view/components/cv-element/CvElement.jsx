import './CvElement.css'
import PropTypes from 'prop-types'

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

CvElement.propTypes = {
    period: PropTypes.string,
    city: PropTypes.string,
    place: PropTypes.string,
    subject: PropTypes.string,
}
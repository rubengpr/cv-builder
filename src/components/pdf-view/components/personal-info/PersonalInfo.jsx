import './PersonalInfo.css'
import PropTypes from 'prop-types'

export function PersonalInfo({ src, name }) {
    return(
        <div className='personal-info'>
            <img className='icon' src={src} alt="An icon" />
            <p>{name}</p>
        </div>
        
    )
}

PersonalInfo.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
}
import PropTypes from 'prop-types';
import './LogCard.css'
import { useState } from 'react'

export function LogCard({ title, handleClickDelete }) {
    const [isVisible, setIsVisible] = useState('./eye.svg')

    function handleClick() {
        setIsVisible(!isVisible)
    }
    
    const icon = isVisible ? './eye.svg' : './eye-closed.svg'

    return(
        <div className="log-card">
            <p className='log-card-title'>{title}</p>
            <div className='icon-wrapper'>
                <img src={icon} alt="An eye icon" className='icon' onClick={handleClick} />
                <img src='./xmark-circle-solid.svg' alt="A delete icon" className='icon' onClick={handleClickDelete} />
            </div>
        </div>
    )
}

LogCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    handleClickDelete: PropTypes.func,
    cardKey: PropTypes.number,
    index: PropTypes.number,
}
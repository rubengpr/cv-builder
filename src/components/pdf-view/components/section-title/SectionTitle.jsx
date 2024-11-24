import './SectionTitle.css';
import PropTypes from 'prop-types'

export function SectionTitle({ title, color }) {
    return(
        <div className="section-title" style={{ backgroundColor: color }}>
            <h3>{title}</h3>
        </div>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
}
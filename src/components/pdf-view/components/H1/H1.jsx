import './H1.css'
import PropTypes from 'prop-types'

export function H1({ name }) {
    return(
        <h1>{name}</h1>
    )
}

H1.propTypes = {
    name: PropTypes.string,
}
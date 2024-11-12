import PropTypes from 'prop-types';
import './ControlMenu.css'

export function ControlMenu({ children }) {
    return(
        <div className="control-menu">
            {children}
        </div>
    )
}

ControlMenu.propTypes = {
    children: PropTypes.node,
};
import PropTypes from 'prop-types';
import './control-menu.css'

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
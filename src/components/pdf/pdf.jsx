import PropTypes from 'prop-types';
import './pdf.css';

export function Pdf({ children }) {
    return(
        <div className='pdf'>
            {children}
        </div>
        
    )
}

Pdf.propTypes = {
    children: PropTypes.node,
};
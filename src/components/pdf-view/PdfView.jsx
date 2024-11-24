import PropTypes from 'prop-types';
import './PdfView.css';

export function Pdf({ children, fontClass }) {
    return(
        <div className={`pdf ${fontClass}`}>
            {children}
        </div>
        
    )
}

Pdf.propTypes = {
    children: PropTypes.node,
    fontClass: PropTypes.string,
    color: PropTypes.string,
};
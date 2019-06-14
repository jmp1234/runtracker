import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => {
    return(
        props.errorMessage ?
            <div className="mapErrorMessage">
                <div className="text-center mb-3">
                    <FontAwesomeIcon icon="exclamation-circle" color="grey" size="4x" />
                </div>
                {props.errorMessage}
            </div> :

            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

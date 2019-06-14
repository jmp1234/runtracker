import React from 'react';
import Time from './format_time';

export default props => {
    return (
        <div className="watchContainer">
            <h1 className="time">
                <Time elapsed={props.elapsed} />
            </h1>
        </div>
    )
}

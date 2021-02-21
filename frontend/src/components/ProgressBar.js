import React from 'react'
import PropTypes from 'prop-types';

const ProgressBar = ({loadedPercentage}) => {
    return (
        <div className="progress">
            <div 
                className="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" 
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100" 
                style={{ width: `${loadedPercentage}%` }}
            >
            {loadedPercentage}%
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    loadedPercentage: PropTypes.number.isRequired
}

export default ProgressBar
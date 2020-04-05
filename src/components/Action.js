import React from 'react'

const Action = (props) => (
    <div>
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            Choose for ME!
        </button>
    </div>
)

export default Action
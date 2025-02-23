import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {capitalize(props.alert.type)}<strong> :  {props.alert.msg}</strong>
            
        </div>
    )
}

export default Alert


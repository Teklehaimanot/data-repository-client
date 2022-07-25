import React from 'react'

const ButtonCreate = ({ onToggle, formToggle }) => {
    return (
        <div
            onClick={onToggle}
            className={`flex items-center bg-gray border border-gray text-${formToggle ? 'red-light' : 'primary'
                }  text-2xl rounded-lg px-5 py-2 hover:bg-blue hover:text-secondary`}
        >
            {formToggle ? 'Cancel' : 'Create'}
        </div>
    )
}

export default ButtonCreate
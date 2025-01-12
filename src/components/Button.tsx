import React from 'react';

const LinkButton = ({ label, href, type = 'button', disabled = false }) => {
    return (
        <a 
            href={disabled ? '#' : href} 
            className={`border-accent border-solid cursor-pointer py-4 border text-white px-4 rounded-lg hover:bg-accent hover:border-transparent transition-colors duration-150 ease-in-out ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={disabled ? (e) => e.preventDefault() : null}
        >
            {label}
        </a>
    );
};

export default LinkButton;

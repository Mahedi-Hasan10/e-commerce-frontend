import React from 'react';

const Button = ({ className, name }) => {
    return (
        <div className={`${className} text-black md:py-2 py-1 md:px-4 px-2 rounded-md font-medium`}>
            {name}
        </div>
    );
};

export default Button;
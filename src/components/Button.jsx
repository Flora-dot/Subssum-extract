import React from 'react';

export const CustomButton =  ({className, children , onClick, ...props}) =>  {
    return(
        <button {...props} type="button" className={className} onClick={onClick}>{children}</button>
    );

}
import classNames from 'classnames'
import React from 'react'

function Button({onClick, className, children, outline}) {
    // console.log(children)
    return(
        <button
            className={classNames(className,{'button--outline' : outline})}
            onClick={onClick}

        >{children}</button>
    )
}


export default Button
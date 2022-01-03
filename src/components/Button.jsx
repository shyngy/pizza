import classNames from 'classnames';
import React from 'react';

const Button = React.memo(function Button({
  onClick,
  className,
  children,
  outline,
}) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default Button;

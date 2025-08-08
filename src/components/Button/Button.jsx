import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable button component styled with Tailwind CSS
 * @param {string} children - Button label
 * @param {string} type - Button type (button, submit, reset)
 * @param {string} className - Extra Tailwind classes
 * @param {function} onClick - Click handler
 */
const Button = ({ children, type = 'button', className = '', onClick }) => (
  <button
    type={type}
    className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

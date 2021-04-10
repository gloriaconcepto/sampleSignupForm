import React from "react";


export const renderInput = ({
  input,
  id,
  placeholder,
  type,
  disabled,
  meta: { touched, error }
}) => (
  <div className="form__form-group-input-wrap form__form-group-input-wrap--error-above">
    <input
      {...input}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
    />
    {touched && error && (
      <span className="form__form-group-error">{error}</span>
    )}
  </div>
);



renderInput.defaultProps = {
  placeholder: "",
  meta: null,
  type: "text"
};

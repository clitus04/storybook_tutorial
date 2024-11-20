import React, { memo } from 'react';
import './index.scss';

export type InputProps = {
  label?: string;
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  required?: boolean;
  rounded?: boolean;
}

const Input: React.FC<InputProps> = ({ label, onChange, placeholder, value, required, rounded }) => {
  return (
    <div className='input-container'>
      {label && <div><label htmlFor='input'>{label}</label>{required && <span className='required-indicator'>*</span>}</div>}
      <input name='input' value={value} placeholder={placeholder} onChange={onChange} className={rounded ? 'rounded' : ''} />
    </div>
  );
};

export default memo(Input);
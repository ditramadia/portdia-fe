import React from 'react';

interface TextInputProps {
  label: string,
  type: 'text' | 'email'
  name: string,
  placeholder: string,
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const TextInput = (props: TextInputProps) => {
  const { label, type, name, placeholder, value, onChange } = props;

  return (
    <div className='w-full flex flex-col gap-2'>
      <label className='text-white poppins-extrabold text-sm'>{label}</label>
      
      <input 
        type={type}
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className='w-full h-fit p-2 bg-white/5 poppins-light text-white backdrop-blur-lg rounded-md border-[1px] border-solid border-white/10 placeholder:text-gray-500'
      />
    </div>
  );
};

export default TextInput;
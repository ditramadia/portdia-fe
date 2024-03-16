import React from 'react';

interface TextInputProps {
  label: string,
  type: 'text' | 'email'
  name: string,
  placeholder: string,
  // value: string
  // onChange: () => void
};

const TextInput = (props: TextInputProps) => {
  const { label, type, name, placeholder } = props;

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-white poppins-extrabold text-xs'>{label}</label>
      <input 
        type={type}
        name={name} 
        placeholder={placeholder}
        className='w-full h-fit p-2 bg-white/20 poppins-light text-white backdrop-blur-lg rounded-md border-[1px] border-solid border-white placeholder:text-gray-500'
      />
    </div>
  );
};

export default TextInput;
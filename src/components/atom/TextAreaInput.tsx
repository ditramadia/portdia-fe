import React from 'react';

interface TextAreaInputProps {
  label: string,
  name: string,
  placeholder: string,
  // value: string
  // onChange: () => void
};

const TextAreaInput = (props: TextAreaInputProps) => {
  const { label, name, placeholder } = props;
  return (
    <div className='w-full flex flex-col gap-2'>
      <label className='text-white poppins-extrabold text-sm'>{label}</label>
      <textarea 
        name={name} 
        placeholder={placeholder}
        rows={8}
        className='w-full h-fit p-2 bg-white/20 poppins-light text-white backdrop-blur-lg rounded-md border-[1px] border-solid border-white placeholder:text-gray-500'
      />
    </div>
  );
};

export default TextAreaInput;
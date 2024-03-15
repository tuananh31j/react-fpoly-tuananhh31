import { forwardRef } from 'react';

interface IIputProps {
    title: string;
    placeholder?: string;
    htmlFor?: string;
    require?: boolean;
    textarea?: boolean;
    type?: 'text' | 'checkbox' | 'password' | 'radio' | 'date';
}

const Input = forwardRef<HTMLInputElement & HTMLTextAreaElement, IIputProps>(
    ({ title, placeholder, require, htmlFor, type, textarea, ...passProps }, ref) => {
        let Comp: React.ElementType = 'input';
        if (textarea) {
            Comp = 'textarea';
        }

        return (
            <div>
                <label htmlFor={htmlFor} className='font-semibold text-md '>
                    {title}
                    {require && <span className='text-red-800'>*</span>}
                </label>
                <Comp
                    {...passProps}
                    id={htmlFor}
                    ref={ref}
                    type={type}
                    className='border border-gray-500 rounded-md p-2 w-full focus:-translate-x-2 focus:border-s-purple-700 focus:border-s-4 focus:shadow-purple-800 duration-100 ease-in my-2'
                    placeholder={placeholder}
                />
            </div>
        );
    }
);

export default Input;

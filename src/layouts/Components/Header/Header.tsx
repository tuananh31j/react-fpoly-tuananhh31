import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '~/assets';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };
    return (
        <div className='max-w-[580px] relative mx-auto lg:max-w-[1050px] pt-4 flex justify-between items-center'>
            <div className=''>
                <Link to={'/'}>
                    <img src={Images.logo} alt='' />
                </Link>
            </div>
            <div className='text-2xl lg:hidden  block' onClick={handleToggleMenu}>
                <FontAwesomeIcon className='hover:scale-125 transition-transform ease-in' icon={faBars} />
            </div>
            <div
                className={`absolute lg:static  right-[-40px] 
            top-12 
            ${!toggleMenu ? 'hidden' : 'block'} 
            bg-slate-100
            leading-8 
            p-4 border-transparent rounded-sm
            text-sm
            font-semibold
            lg:bg-transparent
             lg:flex lg:text-md lg: lg:gap-5 lg:items-center lg:justify-center`}
            >
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/'>Articles</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;

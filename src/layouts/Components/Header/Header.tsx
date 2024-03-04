import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container-box pt-4 flex justify-between items-center'>
            <div>
                <Link to={'/'}>
                    <img src='/public/logo.svg' alt='' />
                </Link>
            </div>
            <div className='flex text-md font-semibold gap-5 items-center justify-center'>
                <Link to='/'>Home</Link>
                <Link to='/'>Articles</Link>
            </div>
        </div>
    );
};

export default Header;

import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='bg-red-400 max-w-[20vw] max-h-[100vh] h-full w-full fixed '>
                <p className='text-center uppercase font-extrabold text-2xl py-2'>admin</p>
                <div className='p-7 ps-3 font-semibold flex flex-col gap-2'>
                    <Link to='/' className='p-1 px-2 border-transparent rounded-md'>
                        Trang chủ
                    </Link>
                    <NavLink
                        to={'blogs'}
                        className={({ isActive }) => {
                            const classAcitve = isActive
                                ? 'translate-x-4 duration-75 ease-in text-white bg-red-900 transition-transform'
                                : '';

                            return `${classAcitve}  p-1 px-2 border-transparent rounded-md`;
                        }}
                    >
                        Quản lý Blog
                    </NavLink>
                    <NavLink
                        to={'users'}
                        className={({ isActive }) => {
                            const classAcitve = isActive
                                ? 'translate-x-4 duration-75 ease-in text-white bg-red-900 transition-transform'
                                : '';

                            return `${classAcitve}  p-1 px-2 border-transparent rounded-md`;
                        }}
                    >
                        Quản lý người dùng
                    </NavLink>
                </div>
            </div>
            <div className='bg-red-400 max-w-[20vw] max-h-[100vh] h-full w-full -z-50'></div>
        </>
    );
};

export default Sidebar;

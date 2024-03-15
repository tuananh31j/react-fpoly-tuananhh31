import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const AdminLayout = () => {
    return (
        <>
            <div className='flex relative'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;

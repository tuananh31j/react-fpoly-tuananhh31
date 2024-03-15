import { useRoutes } from 'react-router-dom';
import PublicRouter, { PrivateRouter } from './routes';
import { ToastContainer } from 'react-toastify';
function App() {
    const router = useRoutes([...PublicRouter, ...PrivateRouter]);
    return (
        <>
            {router}
            <ToastContainer />
        </>
    );
}

export default App;

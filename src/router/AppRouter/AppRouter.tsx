import { Route, Routes } from 'react-router-dom';
import routes from '../routes';

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(route => {
                    return (
                        <Route Component={ route.component } path={ route.path } key={route.path}/>
                    )
                })
            }
        </Routes>
    );
};

export default AppRouter;
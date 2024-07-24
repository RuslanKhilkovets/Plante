import { Route, Routes, useLocation } from 'react-router-dom';
import routes from '../routes';
import { useLayoutEffect } from 'react';

const AppRouter = () => {
    const location = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

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
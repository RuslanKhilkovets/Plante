import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

import { Breadcrumbs, Link, Typography } from '@mui/material';

import useQuery from '../../hooks/useQuery';
import generateBreadcrumbs from '../../helpers/generateBreadcrumbs';

import PATHS from '../../router/paths';
import catalogMenuItems from '../../constants/catalogMenuItems';

import cl from "./CustomBreadcrumps.module.scss";


const CustomBreadcrumps: React.FC = () => {
    const location = useLocation();
    const query = useQuery();
    const { pathname } = location;

    const breadcrumbs = generateBreadcrumbs(pathname, query, catalogMenuItems);

    return (
        <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{mb: 3}}>
            <Link color="inherit" component={RouterLink} to={PATHS.MAIN_PAGE} className={cl["breadcrumb-link"]}>
                Головна
            </Link>
            {breadcrumbs.slice(0, -1).map((crumb) => (
                <Link
                    className={cl["breadcrumb-link"]}
                    key={crumb.url}
                    color="inherit"
                    component={RouterLink}
                    to={crumb.url}
                >
                    {crumb.title}
                </Link>
            ))}
            <Typography className={cl["breadcrumb-link"]}>
                {breadcrumbs[breadcrumbs.length - 1]?.title}
            </Typography>
        </Breadcrumbs>
    );
};

export default CustomBreadcrumps;
import PATHS from "../router/paths";

const generateBreadcrumbs = (pathname: string, query: URLSearchParams, catalogMenuItems: any[]) => {
    const breadcrumbs: { title: string; url: string }[] = [];

    if (pathname === PATHS.CATALOG) {
        const category = query.get('category');
        const menuItem = catalogMenuItems.find(item => item.to === category);
        
        if (menuItem) {
            breadcrumbs.push({
                title: menuItem.title,
                url: `${pathname}?category=${category}`,
            });
        }
    } else if (pathname === PATHS.ITEM) {
        const url = query.get('url');
        
        const subMenuItem = catalogMenuItems
            .flatMap(item => item.items || [])
            .find(subItem => subItem.to === url);

        if (subMenuItem) {
            const parentMenuItem = catalogMenuItems.find(item => 
                item.items?.some((subItem: any) => subItem.to === url)
            );

            if (parentMenuItem) {
                breadcrumbs.push({
                    title: parentMenuItem.title,
                    url: `${PATHS.CATALOG}?category=${parentMenuItem.to}`,
                });
            }

            breadcrumbs.push({
                title: subMenuItem.text,
                url: `${pathname}?url=${url}`,
            });
        }
    }

    return breadcrumbs;
};

export default generateBreadcrumbs;
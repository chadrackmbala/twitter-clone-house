import React from 'react';
import DashboardNav from './dashboard-nav';
import RightSidebar from './right-sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <DashboardNav />
            {/* <LeftSidebar /> */}
            <Outlet />
            <RightSidebar />
        </>
    );
}

export default Layout;
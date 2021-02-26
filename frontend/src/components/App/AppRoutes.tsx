import {Route, withRouter} from "react-router-dom"
import {BrowserRoutes} from "../../data/Routers/BrowserRouter"
import { UserOutlined, HomeOutlined } from '@ant-design/icons'
import React from "react"
import Home from "../Home"
import ManageUsersPage from "../ManageUsers/ManagerUsersPage"

export const AppRoutesObject = {
    'Home': {
        render: <Route key='admin-home' exact path={BrowserRoutes.home} component={Home}/>,
        path: BrowserRoutes.home,
        icon: <HomeOutlined className='icon' size={22}/>,
        hide: false,
    },
    'Manage Users': {
        render: <Route key='manage-users' exact path={BrowserRoutes.adminDashboardManageUsers} component={ManageUsersPage}/>,
        path: BrowserRoutes.adminDashboardManageUsers,
        icon: <UserOutlined className='icon' size={22}/>,
        hide: false,
    },
};
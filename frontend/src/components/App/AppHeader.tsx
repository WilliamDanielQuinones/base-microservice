import BrowserRouter, {BrowserRoutes} from "../../data/Routers/BrowserRouter";
import cx from 'classnames';
import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {Avatar, Layout, Menu, Dropdown} from 'antd';
import { connect } from 'react-redux';
import { Auth0Context } from "@auth0/auth0-react";

import './styles.scss';
import { UserOutlined } from '@ant-design/icons';

//import AppStore from "../../../data/App/Store";
import {ReactComponent as Logo} from "../../assets/rs-logo.svg";
import {AppHeaderItems, AppRoutesPathReference} from "./RoutesRegister";
import ClickParam from "antd/lib/menu";

const {Header} = Layout;

interface Props extends RouteComponentProps {

}

interface State {
    collapsed:boolean,
    showMobileMenu:boolean,
}

class AppHeader extends Component<Props, any> {

    static contextType = Auth0Context

    state:State = {
      collapsed:false,
        showMobileMenu:false,
    };

    onClickLogout = () => {
        const { logout } = this.context
        return logout({ returnTo: window.location.origin });
    };
    onClickAccountDetails = () => {
        //BrowserRouter.push(BrowserRoutes.account);
    };
    onClickAdminDashboard = () => {
        //BrowserRouter.push(BrowserRoutes.adminDashboard);
    };
    onLogoClick = () => {
        //BrowserRouter.push(BrowserRoutes.home);
    };
    // onMenuItemSelect = (param: ClickParam) => {
    //     this.setState({ showMobileMenu:false });
    //     let path = AppRoutesPathReference[param.key].path;
    //     BrowserRouter.push(path);
    // };
    onClickSettings = () => {
        // this.setState({ showMobileMenu:false });
        // BrowserRouter.push(BrowserRoutes.account)
    }

    get selectedKey() {
        for (let key in AppRoutesPathReference){
            if(this.props.location.pathname.includes(AppRoutesPathReference[key].path)) {
                return key
            }
        }
    }
    get menuItems(){
        return AppHeaderItems.map(appRouteHeader => {
            const {key, icon, path} = appRouteHeader
            return(
                <div key={key} onClick={()=>BrowserRouter.push(path)} className={cx('single-menu-item', {selected: key === this.selectedKey})}>
                    {icon}
                    <span>{key}</span>
                </div>
            )
        })
    }

    // get mobileMenu(){
    //     let items = Object.keys(AppHeaderItems).map((index: any) => {
    //         let appRouteHeader = AppHeaderItems[index];
    //         const {key, icon} = appRouteHeader;
    //         return (
    //             <Menu.Item key={key} className='single-mobile-menu-item'>
    //                 {icon}
    //                 <div className='text'>{key}</div>
    //             </Menu.Item>
    //         )
    //     })
    //     if (AppStore.adminPanelEnabled) items.push(
    //         <Menu.Item key='Administration' className='single-mobile-menu-item'>
    //             <Icon type='deployment-unit' style={{fontSize:22}}/>
    //             <div className='text'>Administration</div>
    //         </Menu.Item>
    //     )
    //     return <Menu onClick={this.onMenuItemSelect}>{items}</Menu>
    // }

    render() {
        const { user, isLoading } = this.context
        return (
            <Header className='app-header'>
                <div className='content'>
                    <div className='app-header-left'>
                        <div className='logo' onClick={() => BrowserRouter.push(BrowserRoutes.home)}>
                            <Logo/>
                            Realty Streem
                        </div>
                        {/* <Dropdown placement='bottomLeft' trigger={['click']} overlayClassName='app-header-mobile-menu-content' overlay={this.mobileMenu}>
                            <div className='app-header-mobile-menu'>
                                <Icon type='down'/>
                            Menu
                            </div>
                        </Dropdown> */}
                    </div>
                    <div className='full-width-menu'>
                        {this.menuItems}
                    </div>
                    <div className='app-header-right'>
                        {!isLoading && <div className='user' onClick={this.onClickAccountDetails}>
                            <Avatar className='avatar' size='small' icon='user'
                                    src={user.picture}/>
                            <div className='name'>{user.name}</div>
                        </div>}
                    </div>
                </div>
            </Header>
        )
    }
}

export default withRouter(connect()(AppHeader as any));

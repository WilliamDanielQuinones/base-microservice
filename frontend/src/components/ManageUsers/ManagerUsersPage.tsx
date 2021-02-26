import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

import ManageUsers from "./ManageUsers/ManageUsers";

class ManageUsersPage extends Component {

    render(){
        return (
            <div className='dashboard-page'>
                <div className='content'>
                    <ManageUsers/>
                </div>
            </div>
        );
    }
}

export default connect()(ManageUsersPage);
import * as React from 'react';
import { connect } from 'react-redux';

import {Row, Col} from "antd";

import './styles.scss';

const ManageUsers = () => {

  return (
    <div className="home-container">
      <Row className="module-row">
          <Col span={24} className="greeting-text">
            <h3>Manage Users</h3>
          </Col>
        </Row>
    </div>
  )
}


export default connect()(ManageUsers);

import * as React from 'react';
import { connect } from 'react-redux';

import { useAuth0 } from "@auth0/auth0-react";

const AuthShell = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    if(!isAuthenticated) {
        loginWithRedirect()
    }
    
    return (
        <div>
            
        </div>
)}

export default connect()(AuthShell)

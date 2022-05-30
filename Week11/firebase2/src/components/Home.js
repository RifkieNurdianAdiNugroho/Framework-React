import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";


class Home extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    
    render() {
        const { isLoggingOut, logoutError } = this.props; return (
            <div>
                
                <img src="clara.png"></img>
                <div class="px-2 bg-light "><marquee class="py-3" direction="left" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="20" behavior="slide down">
    Hehe haloo this just trying make line by Rifkie
    </marquee></div>
                <button onClick={this.handleLogout}>Logout</button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
            </div>
        );
    }
} function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
} export default connect(mapStateToProps)(Home);

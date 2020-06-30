import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./WelcomeFooter.scss";

class WelcomeFooter extends Component{
    render() {
        return(
            <menu className="welcome-menu">
                <Link to="/chat">客服</Link>
                <Link to="/activity">6.18活动</Link>
                <Link to="/about">关于我们</Link>
            </menu>
        )
    }
}
export default WelcomeFooter;
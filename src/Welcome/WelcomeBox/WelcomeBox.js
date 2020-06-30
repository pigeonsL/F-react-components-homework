import React, { Component } from 'react';
import "./WelcomeBox.scss";

class WelcomeBox extends Component{
    render() {
        const {shop} = this.props;
        const logoStyle = {
            backgroundImage: `url(${shop.logo})`,
        };
        return(
            <body className="welcome-body">
                <img className="logo" style={logoStyle}/>
                <h2>{shop.name}</h2>
            </body>
        );
    }
}
export default WelcomeBox;
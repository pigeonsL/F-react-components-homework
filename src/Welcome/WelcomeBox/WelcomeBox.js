import React, { Component } from 'react';

class WelcomeBox extends Component{
    render() {
        const {shop} = this.props;
        return(
            <body className="welcome-body">
                <img className="logo" src={shop.logo}/>
                <h2>{shop.name}</h2>
            </body>

        )
    }
}
export default WelcomeBox;
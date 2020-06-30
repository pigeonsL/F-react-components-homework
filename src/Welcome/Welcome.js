import React, { Component } from 'react';
import shopData from "../data/shop.json";

class Welcome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            shop:{},
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                shop: shopData,
            });
        }, 1000);
    }

    render() {
        const {shop} = this.state;
        return (
            <main className="welcome-page">
                <WelcomeHeader/>
                <WelcomeBox />
                <WelcomeFooter/>
            </main>
        )
    }


}
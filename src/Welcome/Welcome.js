import React, { Component } from 'react';
import shopData from "../data/shop.json";
import WelcomeBox from "./WelcomeBox/WelcomeBox";
import WelcomeFooter from "./WelcomeFooter/WelcomeFooter";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import "./Welcome.scss";

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
        const { shop } = this.state;
        return (
            <main className="welcome-page">
                <WelcomeHeader/>
                <WelcomeBox shop={shop}/>
                <WelcomeFooter/>
            </main>
        )
    }
}
export default Welcome;
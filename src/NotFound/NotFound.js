import React, { Component } from 'react';
import "./NotFound.scss";
import {Link} from "react-router-dom";

class NotFound extends Component{
    render() {
        return(
            <main className="notfound">
                <header>
                    <h1>NotFound</h1>
                </header>
                <body className="notfound-body">
                    <h2>Coming Soon...</h2>
                    <Link to="/">Back to Home</Link>
                </body>
            </main>
        )
    }
}
export default NotFound;
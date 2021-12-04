import React, {Component} from "react";
import Header from "../components/Header.jsx";
import Toolbar from "./Toolbar.jsx";

class Base extends Component {

    componentDidMount() {
        console.clear();
        console.log("%cHello adventurer. Welcome to the browser console.\n\nIf you would wish to see the code for this website feel free to check it out at:\nhttps://github.com/untocodes/personal-website","font-size: 1.25em;");
    }

    render(props) {
        return (
            <div id="app">
                <Header></Header>
                <div className={(this.props.className || "page")}id="content">
                    {this.props?.children}
                </div>
                <Toolbar></Toolbar>
            </div>
        )
    }

}
export default Base;
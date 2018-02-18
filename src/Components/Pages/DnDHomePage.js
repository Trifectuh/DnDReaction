import React, {Component} from 'react';

const dbapi = require('../../db-api.js');

dbapi.checkSRDComplete();
class DnDHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: "something"
        }
    }

    componentDidMount() {
        this.setState({contents: dbapi.checkSRDComplete()})
    }
    render() {


        return (
            <div id="DdDHomePage">
                <h1 id="App-title" className={this.state.theme}>TITLE</h1>
                <p id="App-intro" className={this.state.theme}>
                    {this.state.contents}
                    A Dungeon Master's companion
                    built with<code> React.js </code>
                    <code> Electron </code>
                </p>
            </div>
        );
    }
}

export default DnDHomePage;
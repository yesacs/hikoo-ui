'use strict';
import React from 'react';
import Hikoo from './hikoo.jsx';
import _ from 'lodash';
import jsonp from 'browser-jsonp';


export class HikooList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hikoos: []
        };
    }
    buildHikoos(){
        return _.map(this.state.hikoos, function (h){
            return (
                <li key={h.haiku.id}>
                    <Hikoo hikoo={h.haiku} />
                </li>
            );
        });
    }
    componentWillMount(){
        var self = this;

        jsonp({
            url: 'http://hikoo.us/haiku/json/casey', // TODO move to ui
            success: function(data) {
                self.setState({hikoos: data});
            }
        });
    }
    render() {
        return (
            <section>
                <header className="clearfix">
                    <span className="left">Hikoo</span>
                    <span className="right"><a href="#">Login</a></span>
                </header>

                <ul className="hikoo-list">{this.buildHikoos()[0]}</ul>

                <footer>
                    <span className="left"><a href="#">&lt;</a> The leaves change</span>
                    <span className="right">8 minutes from now <a href="#">&gt;</a></span>
                </footer>
            </section>
        );
    }
}

HikooList.propTypes = {
    hikoos: React.PropTypes.array
};

export default HikooList;

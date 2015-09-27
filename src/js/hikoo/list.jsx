'use strict';
import React from 'react';
import Hikoo from './hikoo.jsx';
import _ from 'lodash';

export class HikooList extends React.Component {
    constructor(props) {
        super(props);
    }
    buildHikoos(){
        return _.map([this.props.hikoos[0]], function (h){
            return (
                <li key={h.id}>
                    <Hikoo hikoo={h} />
                </li>
            );
        });
    }
    render() {
        return (
            <section>
                <header className="clearfix">
                    <span className="left">Hikoo</span>
                    <span className="right"><a href="#">Login</a></span>
                </header>

                <ul className="hikoo-list">{this.buildHikoos()}</ul>

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

'use strict';
import React from 'react';
import Hikoo from './hikoo.jsx';
import _ from 'lodash';

export class HikooList extends React.Component {
    constructor(props) {
        super(props);
    }

    buildHikoos(){
        return _.map(this.props.hikoos, function (h){
            return (
                <Hikoo key={h.id} hikoo={h} />
            );
        });
    }

    render() {
        return (
            <ul>{this.buildHikoos()}</ul>
        );
    }
}

HikooList.propTypes = {
    hikoos: React.PropTypes.array
};

export default HikooList;

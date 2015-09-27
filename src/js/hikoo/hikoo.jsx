'use strict';
import React from 'react';

export class Hikoo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var h = this.props.hikoo;

        return (
            <p>
                <span className="line1">{h.line1}</span>
                <span className="line2">{h.line2}</span>
                <span className="line3">{h.line3}</span>
            </p>
        );
    }
}

Hikoo.propTypes = {
    line1: React.PropTypes.string,
    line2: React.PropTypes.string,
    line3: React.PropTypes.string
};

export default Hikoo;

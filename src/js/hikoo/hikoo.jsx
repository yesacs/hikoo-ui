'use strict';
import React from 'react';

const DEEP_LINK_URL = 'http://hikoo.us/show/';

export class Hikoo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var h = this.props.hikoo;

        return (
            <div className="hikoo">
                <p className="line1">{h.line1}</p>
                <p className="line2">{h.line2}</p>
                <p className="line3">{h.line3}</p>
                <br /><br />
                <p className="author">
                    &ndash; {h.user_id} <a href={DEEP_LINK_URL + h.id} target="_blank">#</a>
                </p>
            </div>
        );
    }
}

Hikoo.propTypes = {
    line1: React.PropTypes.string,
    line2: React.PropTypes.string,
    line3: React.PropTypes.string
};

export default Hikoo;

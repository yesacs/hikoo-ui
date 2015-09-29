'use strict';
import React from 'react';

const USER_PAGE_URL = 'http://hikoo.us/people/';

export class Header extends React.Component {
    render() {
        return (
            <header className="clearfix">
                <span className="left">Hikoo</span>
                <span className="right"><a href={USER_PAGE_URL + this.props.userName}>{this.props.userName}</a></span>
            </header>
        );
    }
}

Header.propTypes = {
    userName: React.PropTypes.string
};

export default Header;

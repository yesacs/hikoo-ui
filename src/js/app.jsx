import React from 'react';
import HikooList from './hikoo/list.jsx';
import HikooData from '../hikoos.json';

React.render(<HikooList {...HikooData}/>, document.querySelector('#hikoos'), function (){});

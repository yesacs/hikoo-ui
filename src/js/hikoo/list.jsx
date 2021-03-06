'use strict'
import React  from 'react'
import addons from 'react/addons'  // eslint-disable-line
import Hikoo  from './hikoo.jsx'
import Header from './list/header.jsx'
import Footer from './list/footer.jsx'
import jsonp  from 'browser-jsonp'

const  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
const  JSON_URL                = 'http://hikoo.us/haiku/json/'

export class HikooList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hikoos: [],
            selectedHikooIndex: 0,
            userName: 'casey'
        }
    }
    componentWillMount(){
        jsonp({
            url: JSON_URL + this.state.userName, // TODO move to ui
            success: (data) => this.setState({hikoos: data})
        })
    }
    setSelectedHikooIndex(newIndex){
        this.setState({selectedHikooIndex: newIndex})
    }
    render() {
        var hikoo = (() => {
            if(this.state.hikoos.length > 0 && this.state.hikoos[this.state.selectedHikooIndex]){
                var h = this.state.hikoos[this.state.selectedHikooIndex].haiku
                return (<Hikoo key={h.id} hikoo={h} />)
            }else {
                return (<span></span>)
            }
        }())

        return (
            <section>
                <Header userName={this.state.userName} />

                <ReactCSSTransitionGroup transitionName="zen" transitionAppear={true}>
                    {hikoo}
                </ReactCSSTransitionGroup>

                <Footer hikoos={this.state.hikoos}
                        selectedHikooIndex={this.state.selectedHikooIndex}
                        setSelectedHikooIndex={this.setSelectedHikooIndex.bind(this)} />
            </section>
        )
    }
}

HikooList.propTypes = {
    hikoos: React.PropTypes.array
}

export default HikooList

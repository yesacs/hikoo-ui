'use strict'
import React from 'react'

//TODO this class is a bit to smart, can I make it a bit more open?

export class Footer extends React.Component {
    getLineOneByIndex(index){
        let hikoo = this.props.hikoos[index]

        if(hikoo){
            return hikoo.haiku.line1.replace(/[^a-zA-Z\d\s]/g, '')
        }
    }
    getIndex(previous){
        let ret = this.props.selectedHikooIndex + 1

        if(previous){
            ret = this.props.selectedHikooIndex - 1
        }

        if(ret > this.props.hikoos.length){
            return 0
        }else if(ret < 0){
            return this.props.hikoos.length - 1
        }else{
            return ret
        }
    }
    setSelectedHikooIndex(event){
        event.stopPropagation()
        this.props.setSelectedHikooIndex(parseInt(event.target.dataset.hikooIndex, 10))
    }
    render() {
        let nextIndex       = this.getIndex(),
            nextLineOne     = this.getLineOneByIndex(nextIndex),
            previousIndex   = this.getIndex(true),
            previousLineOne = this.getLineOneByIndex(previousIndex)

        if(this.props.hikoos.length > 0){
            return (
                <footer>
                    <span className="left">
                        <a href="#" data-hikoo-index={previousIndex} onClick={this.setSelectedHikooIndex.bind(this)}>&lt</a>
                        {previousLineOne}
                    </span>
                    <span className="right">
                        {nextLineOne}
                        <a href="#" data-hikoo-index={nextIndex} onClick={this.setSelectedHikooIndex.bind(this)}>&gt</a>
                    </span>
                </footer>
            )
        }else{
            return (<footer></footer>)
        }
    }
}

Footer.propTypes = {
    hikoos: React.PropTypes.array,
    selectedHikooIndex: React.PropTypes.number,
    setSelectedHikooIndex: React.PropTypes.func
}

export default Footer

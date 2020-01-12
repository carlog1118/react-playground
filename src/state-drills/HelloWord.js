import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            who: 'world'
        }
    }
    handleButtonClick = (event) => {
        const buttonSelected= event.target.value
        this.setState({
            who: buttonSelected
        })
    }
    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                <button value='friend' onClick={this.handleButtonClick}>Friend</button>
                <button value='react' onClick={this.handleButtonClick}>React</button>
                <button value='world' onClick={this.handleButtonClick}>World</button>
            </div>
        )
    }
}

export default HelloWorld;
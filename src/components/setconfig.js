import React, { Component } from 'react';

export default class SetConfig extends Component {

    state = { token: "" }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    ready = () => {
        this.props.update( this.state.token )
    }

    render() {
        return (
            <div className="token">
                <h4>Now enter your token</h4>
                <div className="info">
                    <input 
                        name="token" 
                        type="text" 
                        value={ this.state.token } 
                        onChange={ e => this.handleChange(e) }
                    />
                    <input onClick={ this.ready } type="submit" />
                </div> 
            </div>
        );
    }
}

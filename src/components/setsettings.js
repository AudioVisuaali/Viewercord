import React, { Component } from 'react';

import SetConfigSwitch from "./setsettingsswitch"

export default class SetSettings extends Component {

    state = this.props.settings

    handleCheck = (event) => {
        this.setState({
            [event.target.name]: !this.state[event.target.name]
        })      
    }

    ready = () => {
        this.props.update( this.state )
    }

    render() {
        return (
        <div className="container">     
            <div className="set-settings">
                <h4>First some important settings</h4>
                <div className="buttons">
                    <div className="row">

                        <SetConfigSwitch 
                            title="Full Width"
                            name="fullWidth"
                            checked={ this.state.fullWidth }
                            onChange={ this.handleCheck }
                        />

                        <SetConfigSwitch 
                            title="IRC mode"
                            name="ircMode"
                            checked={ this.state.ircMode }
                            onChange={ this.handleCheck }
                        />

                        <SetConfigSwitch 
                            title="Show server"
                            name="messageOriginServer"
                            checked={ this.state.messageOriginServer }
                            onChange={ this.handleCheck }
                        />

                        <SetConfigSwitch 
                            title="Show channel"
                            name="messageOriginChannel"
                            checked={ this.state.messageOriginChannel }
                            onChange={ this.handleCheck }
                        />

                        <SetConfigSwitch 
                            title="Show TimeStamp"
                            name="messageOriginTimestamp"
                            checked={ this.state.messageOriginTimestamp }
                            onChange={ this.handleCheck }
                        />

                        <SetConfigSwitch 
                            title="Allow Private"
                            name="allowPrivate"
                            checked={ this.state.allowPrivate }
                            onChange={ this.handleCheck }
                        />

                        <SetConfigSwitch 
                            title="Allow Bots"
                            name="allowBots"
                            checked={ this.state.allowBots }
                            onChange={ this.handleCheck }
                        />

                    </div>
                </div>
                <div className="casing trans_200">
                    <button onClick={this.ready}>Continue</button>
                </div>
            </div>
        </div> 
        );
    }
}

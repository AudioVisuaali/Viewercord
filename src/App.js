import React, { Component } from 'react';

import SetSettings from "./components/setsettings";
import Welcome from "./components/welcome";
import SetConfig from "./components/setconfig";
import MainAction from "./components/mainaction";

export default class App extends Component {

    state = {
        token: "",
        setupState: 0,
        settings: {
            ircMode: false,
            fullWidth: false,
            allowBots: false,
            allowPrivate: false,
            messageOriginServer: true,
            messageOriginChannel: true,
            messageOriginTimestamp: true,
        }
    };

    fromWelcomeToSettings = () => {
        this.setState({
            setupState: 1
        })
    }

    fromSettingsToConfig = (values) => {
        this.setState({
            settings: values,
            setupState: 2
        });
    }

    fromConfigToPlayground = (token) => {
        this.setState({
            setupState: 3,
            token: token
        })
    }

    render() {
        if( this.state.setupState === 0 ) {
            return( <Welcome update={ this.fromWelcomeToSettings }/> );
        }
        if(this.state.setupState === 1) {
            return( <SetSettings settings={ this.state.settings } update={ this.fromSettingsToConfig } /> );
        }
        if(this.state.setupState === 2) {
            return( <SetConfig update={ this.fromConfigToPlayground }/> );
        }
        if(this.state.setupState === 3) {
            return( <MainAction token={this.state.token} settings={this.state.settings }/> );
        }
    }
}
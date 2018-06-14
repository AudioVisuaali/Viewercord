import React, { Component } from 'react';
import Discord from 'discord.js';

import Letter from "./letter";

export default class MainAction extends Component {

    state = { messages: [] }

    componentDidMount() {

        const client = new Discord.Client();
    
        client.on('message', msg => {

            if ( this.props.settings.allowPrivate || msg.channel.type !== "dm" ) {

                if ( this.props.settings.allowBots || !msg.author.bot) {

                    const messages = this.state.messages;

                    messages.push( msg );
        
                    this.setState({ messages: messages });   
                }

            }

        });
      
        client.login( this.props.token );
    
    }

    render() {
        if ( !this.props.settings.fullWidth ) {
            return (
                <div className="msg-box">
                    <div className="container">
                        <div className="row"> 
                            <table>
                                <tbody>
                                    { this.state.messages.map((msg) => <Letter msg={msg} settings={this.props.settings} key={msg.id}/> ) }  
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>
            );
        } else {
            return (
                <div className="msg-box">
                    <table>
                        <tbody>
                            { this.state.messages.map((msg) => <Letter msg={msg} settings={this.props.settings} key={msg.id}/> ) }  
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}
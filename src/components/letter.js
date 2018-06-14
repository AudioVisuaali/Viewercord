import React, { Component } from 'react';

export default class Letter extends Component {

    render() {

        const showServer = this.props.settings.messageOriginServer
        const showChannel = this.props.settings.messageOriginChannel
        const allowTimestamp = this.props.settings.messageOriginTimestamp
        const msg = this.props.msg

        return (
            <tr>
                { this.props.settings.ircMode ? "" : <td className="profile_pic"><img alt={msg.author.username}src={msg.author.avatarURL}/></td>}
                <td>
                    <div className="information">
                        <div className="header">
                            <p>
                                { msg.author.username } 
                                <label>
                                { showServer && msg.channel.type === "text" ? " " + msg.guild.name : ""} 
                                { showServer && showChannel && msg.channel.type === "text"? " >" : ""} 
                                { showChannel && msg.channel.type === "text" ? " #" + msg.channel.name : " "} 
                                { showChannel && msg.channel.type === "dm" ? " Direct message" : " " } 
                                { allowTimestamp ? " " + msg.createdAt.toDateString() : "" }
                                </label>
                            </p>
                        </div>
                        <div className="content">
                        <p>{msg.content}</p>
                        </div>
                    </div>
                </td>
            </tr>  
        )
    }    
}
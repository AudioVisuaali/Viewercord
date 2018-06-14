import React, { Component } from 'react';

export default class SetConfigSwitch extends Component {
    render() {
        return (
            <div className="col s12">
                <div className="col s6">
                    <h6>{this.props.title}</h6>
                </div>
                <div className="col s6">
                    <div className="switch">
                        <label>
                        <input 
                            type="checkbox"
                            name={this.props.name}  
                            checked={this.props.checked} 
                            onChange={ (e) => this.props.onChange(e) }
                        />
                        <span className="lever"></span>
                        { this.props.checked ? "On" : "Off" }
                        </label>
                    </div>
                </div>
            </div>
        ); 
    }
}
import React, { Component } from 'react';

export default class Welcome extends Component {
    
    render() {
        return (
            <div className="welcome trans_200">
                <h2>Viewercord</h2>
                <h4>Simple and splashy chat viewer! for events!</h4>
                <div className="casing trans_200">
                    <button onClick={ () => this.props.update() }>continue</button>
                </div>
            </div> 
        );
    }
}

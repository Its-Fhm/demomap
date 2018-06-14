import React, { Component } from 'react';
import mapData from './mapData.json';

export default class ListContainer extends Component {

    /*
    / Import and Add Data to State.
    */
    state = {
        locations: mapData
    }

    // Handle remove
    handleRemove(Surname) {
        let locations = this.state.locations.slice();
        locations.splice(locations.indexOf(Surname), 1);
        this.setState({ locations });
    }

    componentDidMount() {
        console.log(this.state.locations);
    }

    render() {
        const listItems = this.state.locations.map((location) =>
            <li>{location.Firstname} {location.Surname}
                <button className="remove-btn" onClick={this.handleRemove.bind(this, location)}>X</button>
            </li>
        );
        return (
            <ul>{listItems}</ul>

        )

    }
}
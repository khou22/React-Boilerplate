/**************************************************************
 * Name: Kevin Hou
 * License: MIT
 *
 * Description: Main component
 *
 **************************************************************/
import React, { Component } from 'react'; // Get React modules
import PropTypes from 'prop-types'; // Helps with prop organization

class MainComponent extends Component {
 
    componentDidMount() {
        console.log('Main component mounted');
    }

    // Render the DOM
    render() {
        return (
            <div>
                Hello, World.
            </div>
        );
    }
}

MainComponent.propTypes = {
    // Prop validation
};

export default MainComponent;

/**************************************************************
 * Name: Kevin Hou
 * License: MIT
 *
 * Description: Main component
 *
 **************************************************************/
import React, { Component } from 'react'; // Get React modules
import PropTypes from 'prop-types'; // Helps with prop organization

import FormBuilder from 'react-forms-builder';

class MainComponent extends Component {
 
    componentDidMount() {
        console.log('Main component mounted');
    }


    // Render the DOM
    render() {
        const data = ["Avix", "Kevin", "etc.", "Eric"];
        const nameNodes = data.map((name) => {
            return (
                <h4 className="main-name">{name}</h4>

            )
        });
        return (
            <div>
                <div className="main-title">
                    Hello, World.
                </div>
                {nameNodes}
            </div>
        );
    }
}

MainComponent.propTypes = {
    // Prop validation
};

export default MainComponent;

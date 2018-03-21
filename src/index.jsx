/**************************************************************
* Name: Kevin Hou
* License: MIT
*
* Description: Entry point
*
* Usage:
*  <script type="text/jsx;harmoney-true" src="dist/index_bundle.js"></script>
*
**************************************************************/
import React from 'react';
import { render } from 'react-dom';
import MainComponent from './MainComponent.jsx'; // Get sub-component
import './styles.scss'; // Import styling



setTimeout(() => {
    render(
        <MainComponent />,
        document.getElementById('main'),

    );
}, 500);

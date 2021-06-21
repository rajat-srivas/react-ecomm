import React from "react";
import './menu-item.style.scss'
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match }) => (
    <div className={`${size} menu-item `}
        onClick={() => history.push(`${match.url}${title}`)} >
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />

        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div >
);

export default withRouter(MenuItem);

{/*
    dynamically assigning css class size
    used the style property in jsx to apply dynamic background image, these here have cammel casing & inteliisense
    USE THIS TO UNDERSTAND THE WAY TO SCALE THE IMAGE INSIDE DIV ON HOVER

    router only passses the route details to the first child which is homepage. In order to access it in all other child component we need 
    to use the withRouter and export the compoent wrapped inside the withRouter, this automatically adds all the required route objects like history match etc in the props. No need 
    to be passed along
*/
}
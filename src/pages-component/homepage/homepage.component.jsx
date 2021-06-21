import React from 'react';
import './homepage.style.scss'
import Directory from '../../component/directory/directory.component';
import MenuItem from '../../component/menu-item/menu-item.component';

const HomePage = () => (
    <div className='homepage'>
        <Directory></Directory>
    </div>
);

export default HomePage;
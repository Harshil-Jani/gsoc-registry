// in src/MyMenu.js
import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';

const adminMenu = (props) => (
    <>
    <img height="100" width="200" src='https://repository-images.githubusercontent.com/206319328/41804b80-cf49-11e9-9230-082533830b07' id="sunbird-logo"/>
    <Menu {...props}>
    </Menu>
    </>
);

export default adminMenu;
import React, { FunctionComponent } from 'react';
import { css } from "@emotion/react"
import MenuItem from './menu-item'

const Menu: FunctionComponent<{}> = () => (
    <div 
        css={css`
            padding-top: 10px;
    `}>
    
    <ul css = {css`
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: #fff;
    `}>
        <MenuItem path="/" name="Home"/>
        <MenuItem path="/blog" name="Blog"/>
    </ul>

    </div>
);

export default Menu;

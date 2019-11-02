import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import './index.scss'

export default function Sidebar({ links }) {
    return (
        <Menu>
            <img src={'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/43a4c862f00c8ac83ab6f11e0e8b3389.png'} />
            {links}
        </Menu>
    );
}
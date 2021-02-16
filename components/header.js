import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

function Header(){
    return(
        <div style={{margin : '20px 0 50px'}}>
            <Menu>
            <Menu.Item>
                <Link href='/'>
                    CrowdFund
                </Link>
            </Menu.Item>

            <Menu.Menu position='right'>
            <Menu.Item>
                <Link href='/'>
                    Campaigns
                </Link>
            </Menu.Item>
                
            <Menu.Item>
                <Link href='/campaigns/new'>
                    +
                </Link>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
    )
}
export default Header;
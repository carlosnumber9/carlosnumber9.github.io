import React from 'react';
import { Menu } from 'antd';
import { MENU_STYLE, SECTIONS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Navbar() {
    return (
        <Menu theme="light" mode="horizontal" style={MENU_STYLE}>
            {SECTIONS.map((section) => (
                <>
                    <Menu.Item key={section.key}>
                        <span className="section-name">{`${section.name}`}</span>
                        <FontAwesomeIcon
                            className="section-icon"
                            icon={section.icon}
                            size="2xl"
                        />
                    </Menu.Item>
                </>
            ))}
        </Menu>
    );
}

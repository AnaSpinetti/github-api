import React from 'react';
import * as s from '../styles/HeaderStyle';

function Header() {
    return (
        <s.HeaderWrapper>
                <input type="text" />
                <button type="submit">Buscar</button>
        </s.HeaderWrapper>
    )
}

export default Header;

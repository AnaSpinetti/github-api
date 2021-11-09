import React from 'react'
import * as s from '../styles/LayoutStyle';

function Layout({children}) {
    return (
        <s.LayoutWrapper>
            <header>header</header>
            {children}
        </s.LayoutWrapper>
    )
}

export default Layout

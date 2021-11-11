import React from 'react'
import Header from './Header';
import * as s from '../styles/LayoutStyle';

function Layout({children}) {
    
    return (
        <s.LayoutWrapper>
            <Header />
            {children}
        </s.LayoutWrapper>
    )
}

export default Layout

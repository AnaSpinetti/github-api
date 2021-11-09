import React from 'react';
import * as s from '../styles/RepositoriesStyle'

function Repositories() {
    return (
        <s.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <s.WrapperTabList>
                <s.WrapperTab>Repositories</s.WrapperTab>
                <s.WrapperTab>Starred</s.WrapperTab>
            </s.WrapperTabList>
            <s.WrapperTabPanel>Panel Repositories</s.WrapperTabPanel>
            <s.WrapperTabPanel>Panel Starred</s.WrapperTabPanel>
        </s.WrapperTabs>
    )
}

export default Repositories

import React from 'react';
import * as s from '../styles/RepositoriesStyle'
import RepositoryItem from './RepositoryItem'

function Repositories() {
    return (
        <s.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <s.WrapperTabList>
                <s.WrapperTab>Repositories</s.WrapperTab>
                <s.WrapperTab>Starred</s.WrapperTab>
            </s.WrapperTabList>

            <s.WrapperTabPanel>
                <RepositoryItem name="repo1" linkToRepo="linkAqui" fullName="teste" />
            </s.WrapperTabPanel>

            <s.WrapperTabPanel>
                <RepositoryItem  name="repo2" linkToRepo="linkAqui2" fullName="teste2" />
            </s.WrapperTabPanel>
        </s.WrapperTabs>
    )
}

export default Repositories

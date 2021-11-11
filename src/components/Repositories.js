import React, { useState, useEffect } from 'react';
import * as s from '../styles/RepositoriesStyle'
import RepositoryItem from './RepositoryItem'
import useGithub from '../hooks/GitHubHooks'

function Repositories() {
    const { githubstate, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setUserForSearchRepos] = useState(false);

    useEffect(() => {
        if(githubstate.user.login){
            getUserRepos(githubstate.user.login);
            getUserStarred(githubstate.user.login);
        }
        setUserForSearchRepos(githubstate.repositories);
    }, [githubstate.user.login])

    return (
    <>
    {hasUserForSearchRepos ? (
            <s.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
                <s.WrapperTabList>
                    <s.WrapperTab>Repositories</s.WrapperTab>
                    <s.WrapperTab>Starred</s.WrapperTab>
                </s.WrapperTabList>

                <s.WrapperTabPanel>
                    <s.WrapperList>
                        {githubstate.repositories.map((item) => (<RepositoryItem key={item.id} name={item.name} linkToRepo={item.full_name} fullname={item.full_name} />))}

                    </s.WrapperList>
                </s.WrapperTabPanel>

                <s.WrapperTabPanel>
                    <s.WrapperList>
                        {githubstate.starred.map((item) => (<RepositoryItem key={item.id} name={item.name} linkToRepo={item.html_url} fullname={item.full_name} />))}
                    </s.WrapperList>
                </s.WrapperTabPanel>
            </s.WrapperTabs>
        ): (<></>)}
    </>
    )
}

export default Repositories

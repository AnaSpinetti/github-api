import React, {createContext, useState} from 'react';

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
})

function GithubProvider({children}) {
    const [githubstate, setGithubState] = useState({
        user:{
            login: null,
            name: null,
            html_url: null,
            blog: null,
            company: null,
            location: null,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: []
    });

    const contextValue = {
        githubstate,
    };

    return (
        <div>
            <GithubContext.Provider value={contextValue}>
                {children}
            </GithubContext.Provider>
        </div>
    );
};

export default GithubProvider

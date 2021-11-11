import React, {createContext, useCallback, useState} from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
})

function GithubProvider({children}) {
    const [githubstate, setGithubState] = useState({
        loading: false,
                hasUser: false,
                user:{
                    login: null,
                    name: null,
                    html_url: null,
                    followers: null,
                    following: null,
                    public_gists: null,
                    public_repos: null,
                    avatar: null
                }
    });

    // Consumindo a API
    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));

        api.get(`users/${username}`).then(({data}) => {
            setGithubState((prevState) => ({
                ...prevState, 
                hasUser: true,
                user:{
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                    avatar: data.avatar_url
                }
            }))
        }).finally(() => {
            setGithubState(prevState => ({...prevState, 
                ...prevState,
                loading: !prevState.loading,
            }))
        })
    }

    const contextValue = {
        githubstate,
        getUser: useCallback((username) => getUser(username), []),
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

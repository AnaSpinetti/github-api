import React, {createContext, useCallback, useState} from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
})

function GithubProvider({children}) {
    const [githubstate, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user:{
            id: null,
            login: null,
            name: null,
            html_url: null,
            followers: null,
            following: null,
            public_gists: null,
            public_repos: null,
            avatar: null
        },
        repositories: [],
        starred: [],
    });

    // Consumindo a API - dados do usuário
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
                    id: data.id,
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

    // Consumindo a API - abas de repositórios e favoritos
    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`).then(({data}) => {
            setGithubState((prevState) => ({
                ...prevState, 
                repositories: data,
            }));
        });
    }



    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({data}) => {
            setGithubState((prevState) => ({
                ...prevState, 
                starred: data,
            }));
        });
    }
    
    const contextValue = {
        githubstate,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), [])
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

import React from 'react'
import useGithub from '../hooks/GitHubHooks'
import * as s from '../styles/ProfileStyle'

function Profile() {
    const { githubstate } = useGithub()

    return (
        <s.Wrapper>
            <s.WrapperUserImage src='https://avatars.githubusercontent.com/u/30602516?v=4' alt="User Avatar" />

            <s.WrapperUserInfo>
                <div>
                    <h1>{githubstate.user.name}</h1>
                    <s.WrapperUserName>
                        <h3>Username: </h3>
                        <a href= {githubstate.user.html_url} target='_blank'>{githubstate.user.login}</a>
                    </s.WrapperUserName>
                </div>

                <s.WrapperStatesCount>
                    <div>
                        <h4>Followers: </h4>
                        <span>{githubstate.user.followers}</span>
                    </div>
                    <div>
                        <h4>Gists: </h4>
                        <span>{githubstate.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repositories: </h4>
                        <span>{githubstate.user.public_repos}</span>
                    </div>
                    <div>
                        <h4>Followings: </h4>
                        <span>{githubstate.user.following}</span>
                    </div>
                </s.WrapperStatesCount>

            </s.WrapperUserInfo>

        </s.Wrapper>
    )
}

export default Profile

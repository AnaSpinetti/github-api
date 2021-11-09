import React from 'react'
import * as s from '../styles/ProfileStyle'

function Profile() {
    return (
        <s.Wrapper>
            <s.WrapperUserImage src='https://avatars.githubusercontent.com/u/30602516?v=4' alt="User Avatar" />

            <s.WrapperUserInfo>
                <div>
                    <h1>Ana Spinetti</h1>
                    <s.WrapperUserName>
                        <h3>Username: </h3>
                        <a href= 'https://github.com/anaspinetti' target='_blank'>anaspinetti</a>
                    </s.WrapperUserName>
                </div>

                <s.WrapperStatesCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </s.WrapperStatesCount>

            </s.WrapperUserInfo>

        </s.Wrapper>
    )
}

export default Profile

import React from 'react'
import App from './App'
import GithubProvider from './providers/GithubProvider'
import { ResetCss } from './styles/ResetCss'

function Providers() {
    return (
        <main>
            <GithubProvider>
                <ResetCss />
                <App />
            </GithubProvider>
        </main>
    )
}

export default Providers

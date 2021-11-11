import React from 'react'
import * as s from "../styles/ItemStyle"

function RepositoryItem({name, linkToRepo, fullname}) {
    return (
        <s.WrapperItem>
            <s.WrapperTittle>{name}</s.WrapperTittle> 
            <s.WrapperSubTittle>fullName: </s.WrapperSubTittle>
            <a href={linkToRepo} target="_blank" rel="noreferrer"> {fullname} </a>
        </s.WrapperItem>
    )
}

export default RepositoryItem

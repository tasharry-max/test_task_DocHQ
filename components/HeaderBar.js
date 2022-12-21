import React from 'react'

import styled from 'styled-components'
import Image from 'next/image'
import {Menu} from '@styled-icons/entypo/Menu'

const StyledHeaderBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 73px;
    @media screen and (max-width: 560px){
        justify-content: space-between;
        padding: 0 50px 0 10px;
    }
`

const StyledImage = styled.div`
    display: flex;
`

const StyledMenuIcon  = styled.div`
    color: black;
    height: 18px;
    display: none;
    align-items: center;
    p {
    padding-left: 10px;
    font-size: 12px;
    }
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 576px){
        display: flex;
        flex-basis: 40%;
        ${StyledImage} {
            flex-basis: 50%;
        }
    }
`


const HeaderBar = () => {
    return (
        <StyledHeaderBar>
            <StyledMenuIcon><Menu width={24}/><p>Menu</p></StyledMenuIcon>
            <StyledImage><Image src='/DocHQ_logo.svg' width={170} height={46} alt='Logo' priority/></StyledImage>
        </StyledHeaderBar>
    )
}

export default HeaderBar;
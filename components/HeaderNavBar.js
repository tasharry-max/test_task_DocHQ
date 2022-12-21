import React from 'react'
import styled from 'styled-components'
import px2vw from "../utils/px2vw";

const StyledHeaderNavBar = styled.div `
    background: #222B35;
    color: white;
    border-bottom: 3px solid white;
    @media (max-width: 576px) {
        display: none;
    }
    ul {
        display: flex;
        justify-content: flex-end;
        padding-right: ${px2vw(45)};
        
        li {
            padding-right: 15px;
            white-space: nowrap;
            &::after{
                width: 4px;
                height: 4px;
                margin: 2px 20px;
                content: "";
                display: inline-block;
                border-radius: 50%;
                background-color: #FF005C;
            }
            &:hover{
                cursor: pointer;
                color: #FF005C;
            }
        }
    }
`

const HeaderNavBar = () => {
    return (
        <StyledHeaderNavBar>
            <ul>
                <li>COVID TEST</li>
                <li>HEALTH APP</li>
                <li>SUPPLEMENTS</li>
            </ul>
        </StyledHeaderNavBar>
    )
}

export default HeaderNavBar;
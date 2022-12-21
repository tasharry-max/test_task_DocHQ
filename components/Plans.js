import React from 'react'
import styled from 'styled-components'
import px2vw from "../utils/px2vw";

const StyledPlan = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 20px;
    max-width: 355px;
    min-width: 30%;
    height: 203px;
    &:first-child {
        background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0,0,0, 0.75)), url(/plan-1.jpg) 
        center center / cover no-repeat;
        box-shadow: #6AFBC6 10px 10px;
    }
    &:nth-child(2) {
        background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/plan-2.jpg) 
        center center / cover no-repeat;
        box-shadow: #FFDE33 10px 10px;
    }
    &:nth-child(3) {
        background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/plan-3.jpg) 
        center center / cover no-repeat;
        box-shadow: #16D2EC 10px 10px;
    }
`

const StyledPlans = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #222B35;
    padding: ${px2vw(107)} ${px2vw(140)};
    @media (max-width: 576px) { 
        flex-direction: column;
        ${StyledPlan} {
            min-width: 80%;
            margin: 20px 0;
     }
    }
`
const StyledTitle = styled.div `
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
`

const StyledButton = styled.button `
    position: absolute;
    color: white;
    background: none;
    border: none;
    text-transform: uppercase;
    top: 70%;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 778px) {
        font-size: 14px;
    }
`

const Plans = () => {
    return (
        <StyledPlans>
            <StyledPlan>
                <StyledTitle>Plan 1</StyledTitle>
                <StyledButton>
                    View work out &#62;
                </StyledButton>
            </StyledPlan>
            <StyledPlan>
                <StyledTitle>Plan 2</StyledTitle>
                <StyledButton>
                    View work out &#62;
                </StyledButton>
            </StyledPlan>
            <StyledPlan>
                <StyledTitle>Plan 3</StyledTitle>
                <StyledButton>
                    View work out &#62;
                </StyledButton>
            </StyledPlan>
        </StyledPlans>
    )
}

export default Plans

import React from 'react'
import styled from 'styled-components'
import px2vw from "../utils/px2vw";

const StyledMainPlanText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #222B35;
    color: white;
    padding-top: ${px2vw(45)};
    h5{
        max-width: 760px;
        font:400 18px/30px 'Open Sans';
    }
    h6 {
        font-weight: 400;
        font-size: 26px;
        line-height: 32px;
        padding-top: ${px2vw(45)};
    }
    @media (max-width: 778px) {
        padding: 20px 20px 0 20px;
        h5, h6 {
            font-size: 20px;
        }
    }
`

const MainPlanText = () => {
    return (
        <StyledMainPlanText>
            <h5>Complete our simple fitness assesment and recieve your personalised workout
                plans to get you one step closer to achieving your fitness goals.</h5>
            <h6>Take our quick & easy fitness quiz in just 2 mins!</h6>
        </StyledMainPlanText>
    )
}

export default MainPlanText

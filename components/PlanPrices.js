import React from 'react'
import styled from 'styled-components'
import px2vw from "../utils/px2vw";
import {CheckmarkCircle} from "@styled-icons/ionicons-sharp/CheckmarkCircle";

const StyledPriceItem = styled.div `
    background: #222B35;
    max-width: 325px;
    min-width: 30%;
    color: #fff;
    border-radius: 30px 0px;
    padding: ${px2vw(35)};
    position: relative;
    h2 {
        font-weight: 700;
        font-size: 60px;
        line-height: 73px;
        padding: 20px 0;
    }
    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
    }
    h5 {
        padding-bottom: 25px;
        font:600 14px/26px 'Open Sans';
    }
    &:nth-child(2){
        background: #5BFAC1;
        color: black;
        svg {
            fill: #222B35;
        }
        button {
            background: #FF005C;
            color: white;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            &:hover{
                border: 1px solid #FF005C;
                background: none;
                color: black;
                transition: all .2s ease-in;
            }
        }
        &::before{
        content: "Most Popular";
        position: absolute;
        top: -35px;
        left: 0;
        background: #222B35;
        color: #5BFAC1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        width: 100%;
        height: 35px;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        border-radius: 2.5rem 2.5rem 0 2.5rem;
        }
    }  
`
const StyledPlanPrices = styled.div `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: ${px2vw(105)} ${px2vw(212)};
    @media (max-width: 568px) {
     padding: 20px;
     ${StyledPriceItem} {margin: 30px; padding:20px; min-width:80%; }
    }
    @media (min-width:568px) and (max-width: 768px) {
        ${StyledPriceItem} {margin: 20px; padding:20px; }
    }
    @media (min-width:768px) and (max-width: 992px) {
        padding: 50px;
    }
`

const StyledListItem = styled.div `
    display: flex;
    align-items: center;
    padding-bottom: ${px2vw(15)};
    svg {
        width: 20px;
        fill:white;
        margin-right: 10px;
    }
    p {
        font: 600 13px/26px 'Open Sans';
    }
`

const StyledButton = styled.button `
    background: #fff;
    width: 165px;
    height: 45px;
    border: none;
    border-radius: 25px 25px 0px 25px;
    font: 500 14px/17px 'Montserrat';
    margin-top: 23px;
    &:hover{
        cursor: pointer;
        border: 1px white solid;
        color: white;
        background: none;
        transition: all .2s ease-in;
    }
`

const ListItem = () => {
    return (
        <StyledListItem>
            <CheckmarkCircle/>
            <p>Curabitur blandit tempus</p>
        </StyledListItem>
    )
}

const PlanPrices = () => {
    return (
        <StyledPlanPrices>
            <StyledPriceItem>
                <h4>Plan 1</h4>
                <h2>£30</h2>
                <h5>PER TIMEFRAME</h5>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <StyledButton>LOREM</StyledButton>
            </StyledPriceItem>
            <StyledPriceItem>
                <h4>Plan 2</h4>
                <h2>£45</h2>
                <h5>PER TIMEFRAME</h5>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <StyledButton>LOREM</StyledButton>
            </StyledPriceItem>
            <StyledPriceItem>
                <h4>Plan 3</h4>
                <h2>£60</h2>
                <h5>PER TIMEFRAME</h5>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <StyledButton>LOREM</StyledButton>
            </StyledPriceItem>
        </StyledPlanPrices>
    )
}

export default PlanPrices

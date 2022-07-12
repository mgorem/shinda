import styled from 'styled-components'
import { useState } from 'react'
import { large } from '../../responsive/large-responsive'
import { tablet } from '../../responsive/tablet-responsive'
import { smallerTablet } from '../../responsive/tablet-smaller'
import { mobile } from '../../responsive/mobile-ressponsive'
import { mini } from '../../responsive/mini-responsive'

const SingleCardContainer = styled.div`
  width: 90%;
  height: 6%;
  margin: 14px auto 10px auto;
  border: none;
  border-radius: 8px;
  background-color: #242832;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  ${large({fontSize: "10px",
           fontWeight: "600",
           display: "none",
  })}
`
const InnerNameContainer = styled.div`
  
`
const InnerStatsContainer = styled.div`
  width: 50px;
  height: 25px;
  padding: 5px;
  margin-right: 20px;
  border: none;
  border-radius: 25px;
  background-color: #ff7f00;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`
const InnerAmountContainer = styled.div`
  
`
const RightSection = () => {
  
  const [feeds, setFeeds] = useState([
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
  ])
  return (
    <>
    {feeds.map((feed) => (
    <SingleCardContainer key={feeds.id}>
          {/* <CardContainer> */}
            <InnerNameContainer style={{marginRight:"20px"}}>
              <p>{feed.name}</p>
            </InnerNameContainer>
            <InnerStatsContainer>
              <p>{feed.stats}</p>
            </InnerStatsContainer>
            <InnerAmountContainer style={{marginRight:"20px"}}>
              <p>{feed.amount}</p>
            </InnerAmountContainer>
          {/* </CardContainer> */}
    </SingleCardContainer>
    ))}
    </>
  )
}

export default RightSection
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  height: 6%;
  margin: 14px auto 10px auto;
  border: none;
  border-radius: 8px;
  background-color: #242832;
  color: #fff;
  overflow: hidden;
`
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px auto;
  
`
const InnerNameContainer = styled.div`
  
`
const InnerStatsContainer = styled.div`
  width: 50px;
  padding: 5px;
  margin-right: 20px;
  border: none;
  border-radius: 25px;
  background-color: #ff7f00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`
const InnerAmountContainer = styled.div`
  
`

const RightSectionCard = () => {
  return (
    <Container>
      <CardContainer>
        <InnerNameContainer style={{marginLeft:"20px"}}>
          Username...
        </InnerNameContainer>
        <InnerStatsContainer>
          2.3x
        </InnerStatsContainer>
        <InnerAmountContainer style={{marginRight:"20px"}}>
          4,000
        </InnerAmountContainer>
      </CardContainer>
    </Container>
  )
}

export default RightSectionCard
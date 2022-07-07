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
  justify-content: center;
  margin: 15px auto;
`

const RightSectionCard = () => {
  return (
    <Container>
      <CardContainer>
        Display Card
      </CardContainer>
    </Container>
  )
}

export default RightSectionCard
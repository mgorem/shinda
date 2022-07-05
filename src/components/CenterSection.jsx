import React from 'react'
import styled from 'styled-components'

const CenterContainer = styled.div`
  margin: 20px 10px;
`
const TopBarCenter = styled.div`
  width: 100%;
  height: 30%;
  background-color: yellowgreen;
  margin: 20px 10px;
  border: 2px solid pink;
`
const LeftBarCenter = styled.div`
  flex: 2;
  background-color: red;
`
const RightBarCenter = styled.div`
  flex: 5;
  background-color: blue;
`

const CenterSection = () => {
  return (
    <CenterContainer>
      <TopBarCenter />
      <LeftBarCenter />
      <RightBarCenter />
    </CenterContainer>
  )
}

export default CenterSection
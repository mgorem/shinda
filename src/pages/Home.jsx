import React from 'react'
import LeftSection from '../components/LeftSection'
import CenterSection from '../components/CenterSection'
import RightSection from '../components/RightSection'

import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const Left = styled.div`
  flex: 2;
  background-color: navy;
`
const Center = styled.div`
  flex: 8;
  background-color: cadetblue;
`
const Right = styled.div`
  flex: 2;
  background-color: navy;
`

const Home = () => {
  return (
    <HomeContainer>
    <Left>
      <LeftSection />
    </Left>
    <Center>
      <CenterSection/>
    </Center>
    <Right>
      <RightSection />
    </Right>
    </HomeContainer>
  )
}

export default Home
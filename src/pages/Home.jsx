import React from 'react'
import LeftSection from '../components/LeftSection'
import CenterSection from '../components/CenterSection'
import RightSection from '../components/RightSection'

import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #080808;
  padding: 20px;
`
const Left = styled.div`
  flex: 2;
  background-color: #242832;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
`
const Center = styled.div`
  flex: 8;
  background-color: #01060e;
  color: #fff;
`
const Right = styled.div`
  flex: 2;
  background-color: #01060e;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
      <RightSection />
    </Right>
    </HomeContainer>
  )
}

export default Home
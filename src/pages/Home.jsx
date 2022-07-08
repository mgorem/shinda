import React from 'react'
import LeftSection from '../components/lefthome/LeftSection'
import CenterSection from '../components/centerhome/CenterSection'
import RightSection from '../components/righthome/RightSection'
import styled from 'styled-components'


const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #080808;
  /* padding: 20px; */
`
const Left = styled.div`
  flex: 2;
  background-color: #242832;
  border: none;
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
    </Right>
    </HomeContainer>
  )
}

export default Home
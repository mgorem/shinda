import { useState } from 'react'
import LeftSection from '../components/lefthome/LeftSection'
import CenterSection from '../components/centerhome/CenterSection'
import RightSection from '../components/righthome/RightSection'
import styled from 'styled-components'
// import { feeds } from '../userfeed'


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
    <HomeContainer>
    <Left>
      <LeftSection />
    </Left>
    <Center>
      <CenterSection/>
    </Center>
    <Right>
      <RightSection feeds={feeds}/>
    </Right>
    </HomeContainer>
  )
}

export default Home
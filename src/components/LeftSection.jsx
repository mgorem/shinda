import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WorkHistorySharpIcon from '@mui/icons-material/WorkHistorySharp';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const Container = styled.div`
  width: 90%;
  height: 90%;
  margin: 40px auto 10px auto;
  border: 5px solid yellow;
  background-color: maroon;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`
const LeftTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const LeftBottomSection = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
`
const LeftSection = () => {
  return (
    <Container>
      <LeftTopSection>
      <h1>SHINDA 24/7</h1>
      <HomeOutlinedIcon />
      Home
      <NotificationsNoneOutlinedIcon />
      Notifications
      <WorkHistorySharpIcon />
      History
      <SportsEsportsOutlinedIcon />
      Players
      </LeftTopSection>

      <LeftBottomSection>
      <AccountBoxRoundedIcon />
      <p>Help & Support</p>
      </LeftBottomSection>
    </Container>
  )
}

export default LeftSection
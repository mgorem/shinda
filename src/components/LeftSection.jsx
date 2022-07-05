import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WorkHistorySharpIcon from '@mui/icons-material/WorkHistorySharp';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const LeftTopSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const LogoContainer = styled.div`
  font-size: 7px;
`
const LeftBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 20px;
  background-color: green;
`
const LeftSection = () => {
  return (
    <Container>
      <LeftTopSection>
        <LogoContainer>
        <h1>SHINDA 24/7</h1>
        </LogoContainer>
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
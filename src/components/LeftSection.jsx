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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LogoContainer = styled.div`
  font-size: 10px;
  font-weight: 600;
  margin: 30px;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SingleIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  margin: 0 auto;
  background-color: maroon;
  
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
        <IconContainer>
        <SingleIconContainer>
          <HomeOutlinedIcon />
              Home
        </SingleIconContainer>
        <SingleIconContainer>
        <NotificationsNoneOutlinedIcon />
            Notifications
        </SingleIconContainer>
        <SingleIconContainer>
        <WorkHistorySharpIcon />
            History
        </SingleIconContainer>
        <SingleIconContainer>
        <SportsEsportsOutlinedIcon />
            Players
        </SingleIconContainer>
        </IconContainer>
      </LeftTopSection>

      <LeftBottomSection>
        <IconContainer>
          <SingleIconContainer>
          <AccountBoxRoundedIcon />
          <p>Help & Support</p>
          </SingleIconContainer>
        </IconContainer>
      </LeftBottomSection>
    </Container>
  )
}

export default LeftSection
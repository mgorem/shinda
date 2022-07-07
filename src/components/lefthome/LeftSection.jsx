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
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LogoContainer = styled.div`
  flex: 2;
  font-size: 10px;
  font-weight: 600;
  margin: 30px;
`
const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SingleIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  margin: 0;
`
const IconBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const IconName = styled.div`
  flex: 2;
  font-size: 12px;
  margin-left: 20px;
  font-weight: 600;
`
const LeftBottomSection = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
  margin-bottom: 30px;
  /* background-color: green; */
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
              <IconBox>
              <HomeOutlinedIcon />
              </IconBox>
              <IconName>
              <span>Home</span>
              </IconName>
        </SingleIconContainer>
        <SingleIconContainer>
            <IconBox>
              <NotificationsNoneOutlinedIcon />
            </IconBox>
            <IconName>
              <span>Notifications</span>
            </IconName>
        </SingleIconContainer>
        <SingleIconContainer>
            <IconBox>
              <WorkHistorySharpIcon />
            </IconBox>
            <IconName>
              <span>History</span>
            </IconName>
        </SingleIconContainer>
        <SingleIconContainer>
            <IconBox>
              <SportsEsportsOutlinedIcon />
            </IconBox>
            <IconName>
              <span>Players</span>
            </IconName>
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
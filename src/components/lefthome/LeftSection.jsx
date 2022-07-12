import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PolicyIcon from '@mui/icons-material/Policy';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { large } from '../../responsive/large-responsive'
import { tablet } from '../../responsive/tablet-responsive'
import { smallerTablet } from '../../responsive/tablet-smaller'
import { mobile } from '../../responsive/mobile-ressponsive'
import { mini } from '../../responsive/mini-responsive'


const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* ${mobile({visibility: "hidden",
            
  })} */
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
  ${tablet({fontSize: "5px",
           fontWeight: "600",
  })}
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
  padding: 25px 0;
  margin: 0;
  &:hover{
    cursor: pointer;
    border-bottom: 5px solid #ff7f00;
    border-right: 5px solid #ff7f00;
    border-radius: 10px;
  }
  ${tablet({
           fontWeight: "600",
           padding: "10px ",
           marginRight: "3px"
  })}
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
  ${tablet({
           fontSize: "10px",
  })}
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
        <SingleIconContainer style={{
          borderBottom: "5px solid #ff7f00",
          borderRight: "5px solid #ff7f00",
          borderRadius: "10px",
        }}>
              <IconBox>
              <HomeOutlinedIcon />
              </IconBox>
              <IconName>
              <span>Home</span>
              </IconName>
        </SingleIconContainer>
        <SingleIconContainer>
            <IconBox>
              <LeaderboardIcon />
            </IconBox>
            <IconName>
              <span>Leaderboard</span>
            </IconName>
        </SingleIconContainer>
        <SingleIconContainer>
            <IconBox>
              <HandshakeIcon />
            </IconBox>
            <IconName>
              <span>User Agreement</span>
            </IconName>
        </SingleIconContainer>
        <SingleIconContainer>
            <IconBox>
              <PolicyIcon />
            </IconBox>
            <IconName>
              <span>Privacy Policy</span>
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
          <AccountBoxRoundedIcon style={{marginRight:"20px"}}/>
          <p>Help & Support</p>
          </SingleIconContainer>
        </IconContainer>
      </LeftBottomSection>
    </Container>
  )
}

export default LeftSection
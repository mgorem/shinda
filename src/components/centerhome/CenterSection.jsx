import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import BoltIcon from '@mui/icons-material/Bolt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HistoryIcon from '@mui/icons-material/History';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const CenterContainer = styled.div`
  margin: 15px 10px;
`
const TopBarCenter = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
`
const TopBarAccountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`
const TopBarStatsContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TopBarSingleStatsContainer = styled.div`
  width: 50px;
  padding: 5px;
  margin-right: 20px;
  border: none;
  border-radius: 25px;
  background-color: #242832;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`
const MidBarCenter = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`
const LeftMidBarCenter = styled.div`
  flex: 1;
  height: 100%;
  border: none;
  margin-right: 20px;
`
const Wallet = styled.button`
  width: 90%;
  height: 50px;
  background-color: #242832;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 6px;
  padding: 5px 20px;
  margin: 10px auto;
`
const WalletContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`
const Deposit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`
const DepositContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const DepositContainer1 = styled.div`
  width: 45%;
  height: 50px;
  display: flex;
  background-color: #242832;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: none;
  border-radius: 6px;
`
const DepositContainer2 = styled.div`
  width: 45%;
  height: 50px;
  background-color: #ff7f00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
`
const WinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
const RightMidBarCenter = styled.div`
  flex: 8;
  /* background-image: url("images/mountains.jpg"); */
  background-size: cover;
  /* opacity: 0.5; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`
const RocketCircle = styled.div`
  width: 300px;
  height: 300px;
  background-color: #242832;
  /* border: 2px solid #fff; */
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  opacity: 0.7;
`
const RightMidBarBottomContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const RightMidBarAmount = styled.div`
  width: 35%;
  height:100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const RightMidBarBet = styled.div`
  width: 15%;
  height:40px;
  margin-top: 25px;
  color: #ff7f00;
  border: 2px solid #ff7f00;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RightMidBarStats = styled.div`
  width: 35%;
  height:100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const RightMidBarBottomInfo = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const BetAmountContainer = styled.div`
  width: 100%;
  height: 50%;
  border: 2px solid #fff;
  border-radius: 6px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`
const BetAmountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  font-weight: 600;
`
const RightMidBarAmountHeading = styled.div`
  color: #ff7f00;
  font-size: 12px;
  font-weight: 600;
`
const ArrowIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const MidBarBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  font-size: 12px;
  font-weight: 500;
`
const MidBarBottomInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`
const BottomBarCenter = styled.div`
  width: 100%;
  height: 23vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`
const LeftCenterBottomBar = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #242832;
  color: #fff;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LeftCenterBottomBarIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`
const BottomIconContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`
const BottomNameContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 10px;
  font-weight: 600;
`
const TopRightBottomBarCenter = styled.div`
  width: 100%;
  height: 40px;
  background-color: #2d323f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SingleTopRightBarContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
  padding-left: 10px;
`
const RightBottomBarCenter = styled.div`
  flex: 6;
  width: 100%;
  height: 100%;
  background-color: #04030e;
`
const SingleRightBottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  color: green;
`
const SingleBottomBarContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
  padding-left: 10px;
`

const CenterSection = () => {
  return (
    <CenterContainer>
      <TopBarCenter>
        <TopBarAccountContainer>
          <AccountCircleOutlinedIcon style={{color:'#ff7f00', marginRight:20}}/>
          SERRIA
        </TopBarAccountContainer>
        <TopBarStatsContainer>
          <TopBarSingleStatsContainer>
            0.2x
          </TopBarSingleStatsContainer>
          <TopBarSingleStatsContainer style={{backgroundColor:'#ff7f00'}}>
            2.2x
          </TopBarSingleStatsContainer>
          <TopBarSingleStatsContainer>
            4.3x
          </TopBarSingleStatsContainer>
          <TopBarSingleStatsContainer>
            5.0x
          </TopBarSingleStatsContainer>
          <TopBarSingleStatsContainer style={{backgroundColor:'#ff0000'}}>
            5.3x
          </TopBarSingleStatsContainer>
        </TopBarStatsContainer>
      </TopBarCenter>
      <MidBarCenter>
        <LeftMidBarCenter>
          <Wallet>
            <WalletContainer>
            <BoltIcon style={{color:'#ff7f00'}}/>
            wallet:
            </WalletContainer>
            <Deposit>
            Kes.2,330
          </Deposit>
          </Wallet>
          <DepositContainer>
           <DepositContainer1>
             Kes. 500
           </DepositContainer1>
           <DepositContainer2>
              <MonetizationOnIcon />
              DEPOSIT
          </DepositContainer2>
          </DepositContainer>
          <WinBox>
            <img src="images/winbox22.jpg" alt="winbox" style={{width:250, height:250, border:"none", opacity:0.9}}/>
            <h1 style={{fontWeight:500, color:"#9f9484"}}>WIN</h1>
            <h1 style={{fontWeight:600}}>JACKPOT</h1>
          </WinBox>
        </LeftMidBarCenter>
        <RightMidBarCenter>
          <RocketCircle>
            <RocketIcon style={{fontSize:60}}/>
            <img src="images/rocketflames1.png" alt="rocket flames" style={{width:"70px", height:"70px"}}/>
            <h1 style={{fontSize:40, fontWeight: 500}}>5.20x</h1>
          </RocketCircle>
          <RightMidBarBottomContainer>
            <RightMidBarAmount>
              <RightMidBarAmountHeading>
                BET AMOUNT
              </RightMidBarAmountHeading>
              <BetAmountContainer>
                <BetAmountContent>
                  2000
                </BetAmountContent>
                <ArrowIcons>
                  <ArrowUpwardIcon />
                  <ArrowDownwardIcon />
                </ArrowIcons>
              </BetAmountContainer>
            </RightMidBarAmount>
            <RightMidBarBet>
              BET
            </RightMidBarBet>
            <RightMidBarStats>
              <RightMidBarAmountHeading>
                AUTO CASH X:
              </RightMidBarAmountHeading>
              <BetAmountContainer>
              <BetAmountContent>
                  4.3x
              </BetAmountContent>
                <ArrowIcons>
                  <ArrowUpwardIcon />
                  <ArrowDownwardIcon />
                </ArrowIcons>
              </BetAmountContainer>
            </RightMidBarStats>
          </RightMidBarBottomContainer>
          <RightMidBarBottomInfo>
            <MidBarBottomContainer>
            <MidBarBottomInnerContainer>
              MAX TARGET: 70.1
            </MidBarBottomInnerContainer>
            <MidBarBottomInnerContainer>
              WIN CHANCE: 55.2%
            </MidBarBottomInnerContainer>
            </MidBarBottomContainer>
            <MidBarBottomContainer>
            <MidBarBottomInnerContainer>
            <FiberManualRecordIcon style={{fontSize:10, color:"green"}}/>
              ONLINE: 1200
            </MidBarBottomInnerContainer>
            <MidBarBottomInnerContainer>
            <FiberManualRecordIcon style={{fontSize:10, color:"blue"}}/>
              PLAYING: 825
            </MidBarBottomInnerContainer>
            </MidBarBottomContainer>
          </RightMidBarBottomInfo>
        </RightMidBarCenter>
      </MidBarCenter>
      <BottomBarCenter>
      <LeftCenterBottomBar>
      <LeftCenterBottomBarIconContainer>
          <BottomIconContainer>
            <HistoryIcon />
            </BottomIconContainer>
          <BottomNameContainer>History</BottomNameContainer>
      </LeftCenterBottomBarIconContainer>
      <LeftCenterBottomBarIconContainer>
          <BottomIconContainer><SupportAgentIcon /></BottomIconContainer>
          <BottomNameContainer>Customer Care</BottomNameContainer>
      </LeftCenterBottomBarIconContainer>
      <LeftCenterBottomBarIconContainer>
          <BottomIconContainer>
            <ControlPointDuplicateIcon />
          </BottomIconContainer>
          <BottomNameContainer>Refer and Earn</BottomNameContainer>
      </LeftCenterBottomBarIconContainer>
      </LeftCenterBottomBar>
      <RightBottomBarCenter>
        <TopRightBottomBarCenter>
          <SingleTopRightBarContainer>
            PLAYER
          </SingleTopRightBarContainer>
          <SingleTopRightBarContainer>
            X-ODD
          </SingleTopRightBarContainer>
          <SingleTopRightBarContainer>
            BET AMOUNT
          </SingleTopRightBarContainer>
          <SingleTopRightBarContainer>
            PROFIT
          </SingleTopRightBarContainer>
          <SingleTopRightBarContainer>
            HASH
          </SingleTopRightBarContainer>
        </TopRightBottomBarCenter>
        <SingleRightBottomBarContainer>
          <SingleBottomBarContainer>
              Name
            </SingleBottomBarContainer>
            <SingleBottomBarContainer>
              2.5x
            </SingleBottomBarContainer>
            <SingleBottomBarContainer>
              1,200
            </SingleBottomBarContainer>
            <SingleBottomBarContainer>
              +3,000
            </SingleBottomBarContainer>
            <SingleBottomBarContainer>
              431717030a86a...
          </SingleBottomBarContainer>
        </SingleRightBottomBarContainer>
      </RightBottomBarCenter>
      </BottomBarCenter>
    </CenterContainer>
  )
}

export default CenterSection
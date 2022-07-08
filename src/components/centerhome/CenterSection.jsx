import { useState } from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import BoltIcon from '@mui/icons-material/Bolt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HistoryIcon from '@mui/icons-material/History';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CenterContainer = styled.div`
  margin: 15px 10px;
`
const TopBarCenter = styled.div`
  width: 100%;
  height: 60px;
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
  cursor: pointer;
  &:hover{
    background-color: #ff7f00;
  }
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
  width: 95%;
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
  margin-right: 10px;
`
const DepositContainer2 = styled.button`
  width: 45%;
  height: 50px;
  background-color: transparent;
  color: #ff7f00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #ff7f00;
  border-radius: 6px;
  &:hover {
    color: #fff;
    background-color: #ff7f00;
    cursor: pointer;
  }
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
const RightMidBarBet = styled.button`
  width: 15%;
  height:40px;
  margin-top: 30px;
  color: #ff7f00;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  border: 2px solid #ff7f00;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ff7f00;
    color: #fff;
    cursor: pointer;
  }
`
const RightMidBarBottomInfo = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const BetAmountInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #ff7f00;
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
  margin-left: 25px;
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


const CenterSection = (props) => {

  const [stats, setStats] = useState([
    {id: 1, value: '0.2x',},
    {id: 1, value: '2.2x',},
    {id: 1, value: '4.3x',},
    {id: 1, value: '5.0x',},
    {id: 1, value: '5.3x',},
  ])

  const handleStats = () => {
    setStats(

    )
  }





  return (
    <CenterContainer>
      <TopBarCenter>
        <TopBarAccountContainer>
          <AccountCircleOutlinedIcon style={{color:'#ff7f00', marginRight:20}}/>
          SERRIA
        </TopBarAccountContainer>
        <TopBarStatsContainer key={stats.id} onClick={handleStats}>
          {stats.map((stat) => (
            <TopBarSingleStatsContainer>
            {stat.value}
          </TopBarSingleStatsContainer>
          ))}
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
             <TextField placeholder='Kes 500'type='number'  sx={{
                  input: {
                    color: "#fff",
                    background: "transparent",
                  }
                }}>
             </TextField>
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

            {/* Amount Input */}
            <BetAmountInput>
            <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    input: {
                      color: "#fff",
                      background: "transparent"
                    }
                  }}
                  noValidate
                  autoComplete="off"
                />
                <p style={{marginBottom:"10px"}}>BET AMOUNT:</p>
                <TextField id="outlined-basic" type='number' label="" variant="outlined" 
                sx={{
                  '& > :not(style)': { m: 0, width: '25sch' },
                  input: {
                    color: "#fff",
                    background: "transparent",
                    border:"none",
                  }
                }}
                style={
                  {backgroundColor:"transparent",
                   border:" 1px solid #fff",
                   borderRadius:"5px",
                   fontWeight:60,
                  }}/>
            </BetAmountInput>

            <RightMidBarBet>
              BET
            </RightMidBarBet>

          <BetAmountInput>
            <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    input: {
                      color: "#fff",
                      background: "transparent"
                    }
                  }}
                  noValidate
                  autoComplete="off"
                />
                <p style={{marginBottom:"10px"}}>AUTO CASH X</p>
                <TextField id="outlined-basic"type='number' label="" variant="outlined" 
                sx={{
                  '& > :not(style)': { m: 0, width: '25sch' },
                  input: {
                    color: "#fff",
                    background: "transparent",
                    border:"none",
                  }
                }}
                style={
                  {backgroundColor:"transparent",
                   border:" 1px solid #fff",
                   borderRadius:"5px",
                   fontWeight:60,
                  }}/>
            </BetAmountInput>
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
              +3000
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
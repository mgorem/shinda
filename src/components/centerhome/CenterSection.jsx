import { useState } from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import BoltIcon from '@mui/icons-material/Bolt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HistoryIcon from '@mui/icons-material/History';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Media Query
import useMediaQuery from '@mui/material/useMediaQuery';

import { large } from '../../large-responsive'
import { tablet } from '../../tablet-responsive'
import { mobile } from '../../mobile-ressponsive'
import { mini } from '../../mini-responsive'

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
  ${mobile({display: "none",
            
  })}
  ${tablet({display: "none",
            
          })}
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
  ${mobile({
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            
  })}
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
  ${mobile({display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "150px",
            marginTop: "10px",
  })}
  ${mini({
          justifyContent: "center",
          width: "100px",
          height: "100px",
          marginBottom: "150px",
  })}
`
const RightMidBarBottomContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            
  })}
`
const RightMidBarBet = styled.button`
  width: 15%;
  height:40px;
  margin-top: 30px;
  margin-right: 60px;
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
  ${mobile({
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            
  })}
`
const BetAmountInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #ff7f00;
  ${mobile({
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            
  })}
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
  height: 27vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  ${mobile({
            fontSize: "7px",
            fontWeight: "600"
  })}
  ${mini({flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "7px",
          fontWeight: "600"
  })}
`
const LeftBottomBarCenter = styled.div`
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
  ${mini({display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "7px",
          fontWeight: "600"
  })}
`
const BottomBarIconContainer = styled.div`
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
  ${mobile({
            paddingLeft: "10px",
            fontSize: "10px",
  })}
`
const BottomNameContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 10px;
  font-weight: 600;
  ${mobile({
            fontSize: "7px",
            fontWeight: "600",
            paddingRight: "10px",
  })}
`
const BottomBar = styled.div`
  flex: 7;
  width: 100%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const RightBottomBarCenter = styled.div`
  flex: 7;
  width: 100%;
  height: 100%;
  /* background-color: red; */
  color: #fff;
  margin: 2px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`
const RightBottomBarCenterHeadings = styled.div`
  width: 100%;
  height: 30px;
  background-color: #242832;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const RightBottomBarCenterInner = styled.div`
  width: 100%;
  height: 20%;
  background-color: #01060e;
  color: #fff;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SingleInnerContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #01060e;
  margin: 0 5px;
  padding: 3px 10px;
`
const SingleHeadingInnerContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #242832;
  margin: 3px 5px;
  padding: 3px 0;
`

const CenterSection = (props) => {

  // Media Query Impllementation
  const styles = {
    rocketIconStyle: {
      fontSize: "60px",
      ['@media (max-width:375px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: "30px",
      }
    }
  }

  const [stats, setStats] = useState([
    {id: 1, value: '0.2x',},
    {id: 1, value: '2.2x',},
    {id: 1, value: '4.3x',},
    {id: 1, value: '5.0x',},
    {id: 1, value: '5.3x',},
  ])
  const [playerInfo, setPlayerInfo] = useState([
    {id: 1, name: "njugush simon", odd: "2.5x", amount: "1,200", profit: "+3000", hash: "431717030c86a...",},
    {id: 1, name: "solomon kite", odd: "2.3x", amount: "4,000", profit: "+1000", hash: "431717030c86a...",},
    {id: 1, name: "atambo loki", odd: "4.2x", amount: "2,500", profit: "+800", hash: "431717030c86a...",},
    {id: 1, name: "benard lili", odd: "5.3x", amount: "1,200", profit: "+2250", hash: "431717030c86a...",},
    {id: 1, name: "benard lili", odd: "5.3x", amount: "1,200", profit: "+2250", hash: "431717030c86a...",},
  ])

  const [betAmount, setBetAmount] = useState('')
  const handleBetAmount = (e) => {
    setBetAmount(e.target.value)
    console.log(e.target.value)
  }

  const handleStats = () => {
    setStats(

    )
  }





  return (
    <CenterContainer>

      {/* CENTER TOP BAR */}
      {/* CENTER TOP NAVIGATION */}
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

      {/* CENTER ROCKET ANIMATION AREA */}
      
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
            <RocketIcon style={{fontSize:60}} />
            <img src="images/rocketflames1.png" alt="rocket flames" style={{width:"70px", height:"70px"}}/>
            <h1 style={{fontSize:40, fontWeight: 500}}>5.20x</h1>
          </RocketCircle>
          <RightMidBarBottomContainer>

            {/* Bet Amount Input */}
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
                  }}
                  onChange={handleBetAmount}
                  value={betAmount}
                  />
            </BetAmountInput>
            <h2>{ betAmount }</h2>
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
      
      {/* CENTER BOTTOM BAR */}
      {/* CENTER SUPPORT BAR */}
      <BottomBarCenter>
        <LeftBottomBarCenter>
          <BottomBarIconContainer>
              <BottomIconContainer>
                <HistoryIcon />
                </BottomIconContainer>
              <BottomNameContainer>History</BottomNameContainer>
          </BottomBarIconContainer>
          <BottomBarIconContainer>
              <BottomIconContainer><SupportAgentIcon /></BottomIconContainer>
              <BottomNameContainer>Customer Care</BottomNameContainer>
          </BottomBarIconContainer>
          <BottomBarIconContainer>
              <BottomIconContainer>
                <ControlPointDuplicateIcon />
              </BottomIconContainer>
              <BottomNameContainer>Refer and Earn</BottomNameContainer>
          </BottomBarIconContainer>
        </LeftBottomBarCenter>

        {/* RIGHT BOTTOM BAR */}
        <BottomBar>
          <RightBottomBarCenterHeadings>
            <SingleHeadingInnerContainer>
                PLAYER
            </SingleHeadingInnerContainer>
            <SingleHeadingInnerContainer>
                X-ODD
            </SingleHeadingInnerContainer>
            <SingleHeadingInnerContainer>
                BET AMOUNT
            </SingleHeadingInnerContainer>
            <SingleHeadingInnerContainer>
                PROFIT
            </SingleHeadingInnerContainer>
            <SingleHeadingInnerContainer>
                HASH
            </SingleHeadingInnerContainer>
            </RightBottomBarCenterHeadings>
          <RightBottomBarCenter>

            {/* Single Inner User Container */}
            {playerInfo.map((player) => (
            <RightBottomBarCenterInner key={playerInfo.id} style={{color:"green"}}>
              <SingleInnerContainer>
              {player.name}
              </SingleInnerContainer>
              <SingleInnerContainer>
              {player.odd}
              </SingleInnerContainer>
              <SingleInnerContainer>
              {player.amount}
              </SingleInnerContainer>
              <SingleInnerContainer>
              {player.profit}
              </SingleInnerContainer>
              <SingleInnerContainer>
              {player.hash}
              </SingleInnerContainer>
            </RightBottomBarCenterInner>
            ))}
          </RightBottomBarCenter>
        </BottomBar>
      </BottomBarCenter>
    </CenterContainer>
  )
}

export default CenterSection
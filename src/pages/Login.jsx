import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #010203;
    color: #fff;
`
const TopNavigationBar = styled.div`
    width: 100vw;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    color: #fff;
`
const LogoContainer = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
    /* background-color: red; */
    color: #fff;
`
const NavigationContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    /* background-color: green; */
    color: #fff;
`
const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ff7f00;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    padding: 6px;
`
const Login = () => {
  return (
    <Container>
        <TopNavigationBar>
            <LogoContainer>
                <h1>SHINDA 24/7</h1>
            </LogoContainer>
            <NavigationContainer>
                <Link to="jackpot" style={{color: "#fff", textDecoration: "none"}}>Jackpot</Link>
                <Link to="/" style={{color: "#fff", textDecoration: "none"}}>Shinda247</Link>
                <LoginButton>
                    <LoginIcon />
                    LOG IN
                </LoginButton>
            </NavigationContainer>
        </TopNavigationBar>
    </Container>
  )
}

export default Login

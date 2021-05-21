import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {signInAPI} from '../actions/index';
import { Redirect } from 'react-router';
const Login=(props)=>{
    return (
        <Container>
            {props.user && <Redirect to="/Home"/>}
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                <Join>Join Now</Join>
                    <Signin>Sign in</Signin>
                </div>
                
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional comunity</h1>
                    <img src="./images/login-hero.svg" alt="" />    
                </Hero>         
                <Form>
                    <Google onClick={()=>props.signIn()}>
                
                        <img src="/images/google.svg" alt=""/>
                    <label>Sign in with google</label>
                    {/* <Redirect to="/Home"/> */}
                    </Google>
                </Form>
            </Section>
        </Container>
    );
};
const Container=styled.div`
padding:0px;
`;
const Nav=styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
flex-wrap:nowrap;
& > a {
    width:135px;
    height:34px;
    @media(max-width:768px){
        padding:0 5px;
    }
}
`;
 const Join=styled.a`
 font-size:16px;
 padding:10px 12px;
 text-decoration:none;
 border-radius:4px;
 color:rgba(0,0,0,0.6);
 margin-right:12px;
 &:hover{
     background-color:rgba(0,0,0,0.08);
     color:rgba(0,0,0,0.9);
     text-decoration:none;
 }
 `;

 const Signin=styled.a`
 border:1px solid #0a66c2;
 box-shadow:inset 0 0 0 ice #0a66c2;
 color:#0a66c2;
 border-radius:24px;
 transition-duration:167ms;
 font-size:16px;
 font-weight:400;
 line-height:40px;
 padding:10px 24px;
 text-align:center;
 background-color:rgba(0,0,0,0);
 &:hover{
background-color:rgba(112,181,249,0.15);
color:#0a66c2;
text-decoration:none;
 }
 `;
 const Section=styled.section`
 display:flex;
 align-content:flex-start;
 min-height:786px;
 padding-bottom:135px;
 padding-top:40px;
 padding:60px 0px;
 position:relative;
 flex-wrap:wrap;
 width:100%;
 max-width:1128px;
 align-items:center;
 margin:auto;
 @media (max-width:786px){
margin:auto;
min-height:0px;
 }


 `;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
 img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -50px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
 `;

 const Form=styled.div`
 margin-top:100px;
 width:400px;
 @media (max-width:768px)
 {
     margin-top:20px;

 }
 `;

 const Google=styled.button`
 display:flex;
 justify-content:center;
 background-color:#fff;
 align-items:center;
 height:56px;
 width:100%;
 border-radius:20px;
 box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
 `;

 const mapStateToProps=(state)=>{
    return {
        user:state.userState.user
    };
 };

 const mapDispatchToProps=(dispatch)=>({
    signIn:()=>dispatch(signInAPI()),

 });


export default connect(mapStateToProps,mapDispatchToProps)(Login);

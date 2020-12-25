
import React, {useEffect, useState} from "react";
import {
  STATUS,
  Loading,
  Avatar,
  Container,
} from "gitstar-components";
import {BrowserRouter, Link, Redirect, Router} from 'react-router-dom';
// import {isAuth} from '../action/index';

const CLIENT_ID = "26c4b329a72917186dee";
const REDIRECT_URI = "http://localhost:3000/dashboard";

function Index({}){

  const [status, setstatus] = useState(STATUS.INITIAL);
  const [token, settoken] = useState(null);

  useEffect(() => {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
        if (code) {
        setstatus(STATUS.LOADING);
        fetch(`https://gitstar.herokuapp.com/authenticate/${code}`)
            .then(response => response.json())
            .then(({ token }) => {
              settoken(token)
              setstatus(STATUS.FINISHED_LOADING)
            });
        }
    },[]);

    return (
      <div style={{display:'flex', justifyContent:'center', marginTop:'25%', height: '100vh'}}>
      <Container>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'400px',height:'50px' ,backgroundColor:'black', borderRadius:'6px'}}>
          <Avatar
            style={{
              transform: `scale(${
                status === STATUS.AUTHENTICATED ? "1" : "0"
              })`
            }}
          />
          
          <a
            style={{
              display: status === STATUS.INITIAL ? "flex" : "none"
            }}
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
          >
            <i className="github icon" style={{color:'white', fontSize:'30px', marginTop:'1px'}}></i>
            <p style={{color:'white', fontSize:'30px'}} >Signin with Github</p>
          </a>
          
          </div>
        <Loading
          status={status}
          callback={() => {
            if (status !== STATUS.AUTHENTICATED) {
              setstatus(STATUS.AUTHENTICATED);
            }
          }}
        />
      </Container>
      </div>
    );
  }

export default Index;
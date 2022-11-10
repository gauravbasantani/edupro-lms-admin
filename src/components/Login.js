import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Edupro Admin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  
  const [data, setData] = React.useState({
    email:'',
    password:''
  });

  const handle =(e)=>{
    const newData = {...data};
    newData[e.target.id] = e.target.value
    setData(newData);

  }
  function submit(e) {
    e.preventDefault();
    axios.post('http://localhost:8081/admin/authentication/login',{
      email : data.email,
      password : data.password    
    }).then((res)=>{
      console.log(res.data.data.name);
      if(res.data.status === 'success'){
        localStorage.setItem('usertype','admin');
        localStorage.setItem('name',res.data.data.name);
        navigate('/dashboard');
      }
    })
  }
      
  let navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{mt:3}} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={data.email}
              onChange={(e)=>{handle(e);}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={data.password}
              autoComplete="current-password"
              onChange={(e)=>{handle(e);}}
            />
            
            <Button
              type="submit"
              onClick={(e)=>{submit(e)}}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login 
            </Button>
            <Grid container>
              <Grid item align='center' xs>
                <Link href="/" sx={{ mt: 3, mb: 2 }} align="center"  variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
// import React from 'react'
// import styled from 'styled-components'

 
// const Login = () => {
//     const Container = styled.div`
//  background: #F5F5F5;
//  `
//  const Form = styled.div`
//     position: absolute;
//     width: 694px;
//     height: 678px;
//     left: 278px;
//     top: 5px;
//     background: #DDDDDC;
//     border-radius: 36px;

//  `
//  const Title = styled.h4`
// position: absolute;
//     width: 187px;
//     height: 35px;
//     left: 263px;
//     top: 51px;
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 30px;
//     line-height: 35px;
//     color: #000000;



// `
//  const Email = styled.h4`
//     position: absolute;
//     left: 16.35%;
//     right: 89.44%;
//     top: 29%;
//     bottom: 71.57%;
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;
//     color: #000000;

 


//  `
//  const EmailInput = styled.div`
//  position: absolute;
//     left: 15%;
//     right: 0%;
//     width: 481px;
//     top: 37.25%;
//     bottom: 56%;
//     background: #FFFFFF;
//     border-radius: 13px;
//  `

//  const Password = styled.h4`
//  position: absolute;
//     width: 71px;
//     height: 19px;
//     left: 112px;
//     top: 324px;
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;
//     color: #000000;
//  `
//  const PasswordInput = styled.div`
//     position: absolute;
//     width: 481px;
//     height: 49px;
//     left: 104px;
//     top: 383px;
//     background: #FFFFFF;
//     border-radius: 13px;
//  `
//   const ForgotPassword =styled.h4`
//  position: absolute;
//     width: 134px;
//     height: 19px;
//     left: 291px;
//     top: 449px;
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 19px;
//     color: #000000;
//   `
//   const Button = styled.div`
// position: absolute;
//     width: 199px;
//     height: 54px;
//     left: 255px;
//     top: 536px;
//     background: #9D9D9D;
//     border-radius: 25px;
//   `
//   const ButtonText = styled.h4`
//   position: absolute;
//     width: 88px;
//     height: 56px;
//     left: 67px;
//     top: -28px;
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 25px;
//     line-height: 42px;
//     color: #000000;
//   `
//   return (
//     <div>
//       <Container>
//         <Form>
//           <Title>
//             Admin Log In
//           </Title>
//           <Email>
//             Email
//           </Email>
//           <EmailInput></EmailInput>
//           <Password>
//             Password
//           </Password>
//           <PasswordInput></PasswordInput>
//           <ForgotPassword>Forgot Password?</ForgotPassword>
//           <Button>
//             <ButtonText>Log In</ButtonText>
//           </Button>
//         </Form>
//       </Container>

//         {/* <Container>
//             <Form>
 
//     <Email>
//         Email
//     </Email>
//     <Input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
  
  
//     <Label for="pwd" class="form-Label">Password:</Label>
//     <Input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>

 
//     <Label class="form-check-Label">
//       <Input class="form-check-Input" type="checkbox" name="remember"/> Remember me
//     </Label>
  
//   <button type="submit" class="btn btn-primary">Submit</button>
// </Form>
//         </Container> */}
      
//     </div>
//   )
// }

// export default Login

import React from 'react';
import { Grid,Paper, Avatar, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './app.css';
const Login = (props) => {
    const {
        setEmail,
        setPassword,
        handleLogin,
        handlelSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        forgotPassword
        }=props;
    
        const paperStyle={padding :20,height:'70vh',width:400, margin:"30px auto "}
        const avatarStyle={backgroundColor:'#1bbd7e'}

        return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Visitor Management System</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' fullWidth required   onChange={(e) => setEmail(e.target.value)}/>
            <p className="errorMsg" > {emailError}</p>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required   onChange={(e) => setPassword(e.target.value)} />
            <p className="errorMsg">{passwordError}</p>
            
            <div className="btnContainer" >
                  { hasAccount ? (
                         <>
                             <button className="button1"  onClick={handleLogin}>Sign in</button>
                             <p>Don't have an account ? <span onClick= {()=> setHasAccount(!hasAccount)}>Sign up</span> </p>
                         </>
                 ): (
                     <>
                     <button className="button1" onClick={handlelSignup}>Sign up</button>
                     <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount) }> Sign in</span></p>
                     </>
             )}
                 </div> 
                 <div className="btnContainer">
                <button className="button3" onClick={forgotPassword}>ForgotPassword</button> 
                 </div>
        </Paper>
        <div>
                 <footer class="footer-distributed">

<div class="footer-left">
    <h3>Contact<span>Us</span></h3>
    <p class="footer-company-name">© 2020 vkssolutions </p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
          <p><span>Dwarka Nagar </span>
            Banglore-560063 India</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 7004213354 </p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:vishalkmr272@gmail.com">vishalkmr272@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
       Follow us on social media</p>
    <div className="footer-icons">
        <a href="https://github.com/vishalsinghji">  <i class="fab fa-github-alt"></i></a>
        <a href="https://www.linkedin.com/in/vishal-singh-b15708129/"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/"><i class="fab fa-twitter"></i></a>
      
    </div>
</div>
</footer>
    </div>
    </Grid>
    
        )
}

export default Login ;

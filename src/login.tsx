import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
const useStyles= makeStyles({
logc:{
positon:"relative",
top:34,
marginLeft:"800px"
}
})
interface Props{
    onClickFun? : Function;
}
const LoginButton = (props: Props) => {
  const { loginWithRedirect } = useAuth0();
  const classes= useStyles()
  return (
      <>
     <br />
     <br />
     <br />
     <br />
     <br />
  <div className={classes.logc} >
      
  <Button style={{
          maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "300px",
          minHeight: "70px"
        }}
         className="classes.logc"
          variant ="contained" 
          size="small" 
          onClick={() => loginWithRedirect()} 
          sx={{ color: 'yellow', backgroundColor: 'orange', borderColor: 'green' }} >Log in </Button>
  </div>
  </>
  )
};

export default LoginButton;
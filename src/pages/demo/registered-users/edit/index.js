import { useEffect, useState } from "react";
import Message from '../../../../views/Message'
import Link from "next/link";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountGroup from "mdi-material-ui/AccountGroup";
import Typography from "@mui/material/Typography";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
    card: {
      height: "50vh",
      marginTop: "20px",
      border: "1px solid #7fab07",
      borderStyle: "dashed",
      width: "99%",
      paddingTop: "50px",
      paddingBottom: "10px",
      [theme.breakpoints.down("sm")]: {
        height: "50vh",
        marginTop: "5px",
  
        paddingTop: "20px",
        paddingBottom: "20px",
      },
    },
    inputFieldContainer: {
      display: "flex",
      fontWeight: "500",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px",
      marginLeft: "40px",
      marginRight: "40px",
    },
    inputFieldName: {
      fontWeight: "500",
      fontSize: "18px",
      color: "#00477e",
      [theme.breakpoints.down("sm")]: {
        fontWeight: "500",
        fontSize: "15px",
      },
    },
    inputField: {
      width: "60%",
    },
    searchVendorBtnContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      paddingRight: "10px",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    searchVendorBtn: {
      background: "#9ed406",
      marginTop: "10px",
      fontWeight: 600,
      color: "5a8ff2",
      textTransform: "none",
    },
    container: {
      marginTop: "15px",
      display: "flex",
      padding: "0px 20px",
      alignItems: "center",
      justifyContent: "space-between",
    },
    registeredCustomerBtn: {
      textTransform: "capitalize",
      fontSize: "20px",
    },
  }));
  
const Edit = ()=>{
    const router = useRouter()
    const classes = useStyles();
  const [message, setMessage] = useState({});
  const { register, handleSubmit, control, setValue, getValues, reset} = useForm();
  const [ user , setUser] = useState({})

useEffect(()=>{
    const userr = {name:'karan',email:'karan@gmail.com',dob:'45678',address:'nagpur',password:'4567890'}
const fields = ['name','email','dob','address','password']
fields.forEach(field => setValue(field,userr[field]))
setUser(user)
},[])
  

    const {id} = router.query

    const onSubmit = (data)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <Card
        style={{
          padding: "0px 10px 10px 10px",
          boxShadow: "0 0 0 0",
          borderRadius: "0",
        }}
      >
        <Box className={classes.container}>
          <Typography
            variant="h6"
            sx={{
              ml: 3,
              lineHeight: 1,
              fontWeight: 600,
              fontSize: "1.5rem !important",
            }}
          >
            Register User
          </Typography>
          <Box style={{ display: "flex", alignItem: "center" }}>
            <AccountGroup />
            &nbsp;&nbsp;
            <Link href="registered-users/">
              <a>Users</a>
            </Link>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <div className={classes.inputFieldContainer}>
                <div className={classes.inputFieldName}>User Name</div>
                <TextField
                  className={classes.inputField}
                  placeholder="Customer Name"
                 
                  name="name"
                  {...register("name")}
                />
              </div>

              <div className={classes.inputFieldContainer}>
                <div className={classes.inputFieldName}>User E-Mail</div>
                <TextField
                  className={classes.inputField}
                  placeholder="Customer E-Mail"
                 
                  name="email"
                  {...register("email")}
                />
              </div>

             

              <div className={classes.inputFieldContainer}>
                <div className={classes.inputFieldName}>Customer DOB</div>
                <TextField
                  type="date"
                  className={classes.inputField}
                  placeholder="Customer DOB"
                 
                  name="dob"
                  {...register("dob")}
                />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <div
                style={{
                  alignItems: "center",
                  color: "#d4220f",
                  marginBottom: "14px",
                  marginLeft: "40px",
                  marginRight: "40px",
                }}
              >
                <div className={classes.inputFieldName}>User Address</div>
                <TextField
                  className={classes.inputField}
                  style={{ width: "100%" }}
                  placeholder="Customer Address"
                 
                  name="address"
                  {...register("address")}
                />
              </div>

              <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>User Image</div>
             <TextField
                 className={classes.inputField}
                 type='file' 
                 
                
                placeholder='ID Proof' 
                name="image"
                {...register("image")}
              />
               </div>

              <div className={classes.inputFieldContainer}>
                <div className={classes.inputFieldName}>Password</div>
                <TextField
                  className={classes.inputField}
                  type="password"
                  placeholder="Password"
                
                  name="password"
                  {...register("password")}
                />
              </div>
            </Card>
          </Grid>
          <div className={classes.searchVendorBtnContainer}>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Message message={message} />
            </div>

            <Button
              size="small"
              className={classes.searchVendorBtn}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Card>
    </form>
    )
}
export default Edit 
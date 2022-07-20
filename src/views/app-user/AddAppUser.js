// ** MUI Imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import { styled, useTheme } from '@mui/material/styles'
import Alert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core/styles'

// const TextField = styled('div')(() => ({
//  height:'20px'
const useStyles = makeStyles(theme => ({
  customerInfoSubmitBtn: {
    background: '#9ed406',
    marginTop: '10px',
    fontWeight: 600,
    color: '#5a8ff2',
    textTransform: 'none'
  },
  inputFieldContainer:{
    display:'flex',fontWeight:'500',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'
  },      
  inputFieldName:{
    fontWeight:'500',
    color:'#00477e',
    fontSize:'18px',
  [theme.breakpoints.down("sm")]:{
    fontWeight:'500',
    fontSize:'13px'  
  }
  },
  inputField:{
    width:'60%',
    [theme.breakpoints.down("sm")]:{
      width:'56%', 
      fontSize:'12px'  
    }
  },
  card: {
    height: '60vh',
    border: '1px solid ',
    borderStyle: 'dashed',
    width: '99%',
    paddingTop: '50px',
    paddingBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5px',
      height: 'auto',
      paddingTop: '20px',
      paddingBottom: '20px'
    }
  },
  customerInfoSubmitBtnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent:'space-between',
    paddingRight: '10px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  }
}))
const salutation = [
  {
    value: 'Mr.',
    label: 'Mr.'
  },
  {
    value: 'Mrs.',
    label: 'Mrs.'
  }
]
const role = [
    {
        value: 'appUser',
        label: 'App User(non-admin)'
      }
]
const initialUserInfo = {
  uniqueUserId: '',
  firstName: '',
  middleName:'',
  lastName: '',
  salutation:'',
  dob:'',
  email:'',
  role:''
  
}

const AddAppUser = () => {
  const classes = useStyles()
  const [userInfo, setUserInfo] = useState(initialUserInfo)
  const [message,setMessage] = useState({});
  const handleChange = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
  }
  
  const submitUserInfo = async() => {
    console.log(userInfo)
  
    // backend api will be called here
  //   await axios.post('http://localhost:3006/vendors',customerInfo
  //   ).then(resp => {
  //     setMessage({text:"Information has been submitted...",color:"green"})
  //   }).catch(error => {
  //     setMessage({text:"Something went wrong, try again later...",color:"red"})
  // });

   
    setTimeout(()=>{
      setMessage({})
      setUserInfo(initialUserInfo)
    },3000)
  }
  return (
    <Grid container>
      {/* <form noValidate autoComplete='off'  > */}
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
        <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Unique User Id</div>
             <TextField
                 className={classes.inputField}    
                 name='uniqueUserId'  
                 value={userInfo.uniqueUserId}          
                placeholder='Unique User Id'
                onChange={(e)=>handleChange(e)}  
              />
               </div> 

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>First Name</div>
             <TextField
                 className={classes.inputField}    
                 name='firstName' 
                 value={userInfo.firstName}            
                placeholder='First Name'
                onChange={(e)=>handleChange(e)}  
              />
               </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Middle Name</div>
             <TextField
                 className={classes.inputField}    
                 name='middleName' 
                 value={userInfo.middleName}            
                placeholder='Middle Name'
                onChange={(e)=>handleChange(e)}  
              />
               </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Last Name</div>
             <TextField
                 className={classes.inputField}    
                 name='lastName' 
                 value={userInfo.lastName}            
                placeholder='Last Name'
                onChange={(e)=>handleChange(e)}  
              />
               </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Salutation</div>
             <TextField
                 className={classes.inputField}
                 value={userInfo.salutation}                 
                 select
                 required
                 name='salutation'
                 onChange={(e)=>handleChange(e)} 
              >
                {salutation.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div> 
              
              
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
        <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>DOB</div>
             <TextField
                 className={classes.inputField}    
                 name='dob' 
                 type='date'
                 value={userInfo.dob}            
            
                onChange={(e)=>handleChange(e)}  
              />
               </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>E-Mail Id</div>
             <TextField
                 className={classes.inputField}    
                 name='email' 
                 value={userInfo.email}            
            
                onChange={(e)=>handleChange(e)}  
              />
               </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Default System Role</div>
             <TextField
                 className={classes.inputField}
                 value={userInfo.role}                 
                 select
                 required
                 name='role'
                 onChange={(e)=>handleChange(e)} 
              >
                {role.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div> 


       

               
        </Card>
      </Grid>
      <div className={classes.customerInfoSubmitBtnContainer}>
        <div style={{width:'100%',textAlign:'center',justifyContent:'center',display:'flex'}}>
          {message && message.color === "green" ? 
          (<Alert severity="success" >{message.text}</Alert>): message.color === "red" ?
          (<Alert severity="error" >{message.text}</Alert>) : (<span></span>)  
          }
          
        </div>
        <Button size='small' className={classes.customerInfoSubmitBtn} onClick={submitUserInfo}>
          Submit
        </Button>
      </div>
      {/* </form> */}
    </Grid>
  )
}
export default AddAppUser

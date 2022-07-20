// ** MUI Imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";
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
const soleTrader = [
  {
    value: 'Yes',
    label: 'Yes'
  },
  {
    value: 'No',
    label: 'No'
  }
]
const countries = [
  {
    value: 'United Kingdom',
    label: 'United Kingdom'
  },
  {
    value: 'India',
    label: 'India'
  },
  {
    value: 'Germany',
    label: 'Germany'
  }
]
const vendorStatusType = [
  {
    value: 'Pending Verification',
    label: 'Pending Verification'
  },
  {
    value: 'Verified',
    label: 'Verified'
  },
  {
    value: 'Inactive',
    label: 'Inactive'
  }
]
const customerAreSelfServeType = [
  {
    value: 'No: Vendor Uploads for Customers',
    label: 'No: Vendor Uploads for Customers'
  },
  {
    value: 'Yes: Customer Uploads by self',
    label: 'Yes: Customer Uploads by self'
  }
]
// const initialVendorInfo = {
//   uniqueVendorId: '',
//   otherTradingName: '',
//   soleTrader: 'Yes',
//   registrationNumber: '',
//   country: 'United Kingdom',
//   vendorStatus: 'Pending Verification',
//   customerAreSelfServe: 'No: Vendor Uploads for Customers'
// }
const initial = {
  name:"",
  email:"",
  address:"",
  phone:"",
  password:""
}
const AddCustomer = () => {
  const classes = useStyles()
  const router = useRouter()
  const [customerInfo, setCustomerInfo] = useState(initial)
  const [message,setMessage] = useState({});


 
  const handleChange = event => {
    setCustomerInfo({ ...customerInfo, [event.target.name]: event.target.value })
  }
  
  const submitVendorInfo = async() => {
    console.log(customerInfo)
     const cdata = {}
     cdata.ur_name = customerInfo.name
     cdata.ur_email = customerInfo.email
     cdata.ur_address = customerInfo.address
     cdata.ur_phone = customerInfo.phone
     cdata.ur_password = customerInfo.password
     cdata.cs_vn_id = "f4cc1426-9158-47fa-81bc-5171eb3423c3"

  console.log(cdata)
     
  await axios
        .post(
          'https://nq0tehfqgh.execute-api.us-east-1.amazonaws.com/dev/customers',cdata
        )
        .then((res) => {
          console.log(res);
          if(res.status == 200){
            setCustomerInfo(initial)
          }
        })
        .catch((error) => console.log(error));
  
//     backend api will be called here
//     await axios.post('http://localhost:3006/vendors',customerInfo
//     ).then(resp => {
//       setMessage({text:"Information has been submitted...",color:"green"})
//     }).catch(error => {
//       setMessage({text:"Something went wrong, try again later...",color:"red"})
//   });

   
   
  }
  return (
    <Grid container>
      {/* <form noValidate autoComplete='off'  > */}
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
        <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer Name</div>
             <TextField
                 className={classes.inputField}    
                 name='name'  
                 value={customerInfo.name}          
                placeholder='Customer Name'
                onChange={(e)=>handleChange(e)}  
              />
               </div> 

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer Email</div>
             <TextField
                 className={classes.inputField}    
                 name='email'  
                 value={customerInfo.email}          
                placeholder='Customer Email'
                onChange={(e)=>handleChange(e)}  
              />
               </div> 

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer phone</div>
             <TextField
                 className={classes.inputField}    
                 name='phone'  
                 value={customerInfo.phone}          
                placeholder='Customer Phone'
                onChange={(e)=>handleChange(e)}  
              />
               </div> 
               {/* <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Unique Vendor Id</div>
             <TextField
                 className={classes.inputField}    
                 name='uniqueVendorId'  
                 value={vendorInfo.uniqueVendorId}          
                placeholder='Unique Vendor Id'
                onChange={(e)=>handleChange(e)}  
              />
               </div> 

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Other Trading Name</div>
             <TextField
                 className={classes.inputField}    
                 name='otherTradingName' 
                 value={vendorInfo.otherTradingName}            
                placeholder='Other Trading Name'
                onChange={(e)=>handleChange(e)}  
              />
               </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Individual/Sole Trader</div>
             <TextField
                 className={classes.inputField}
                 value={vendorInfo.soleTrader}                 
                 select
                 required
                 name='soleTrader'
                 onChange={(e)=>handleChange(e)} 
              >
                {soleTrader.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div> 
               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Registration Number</div>
             <TextField
                 className={classes.inputField}    
                 name='registrationNumber' 
                 value={vendorInfo.registrationNumber}        
                placeholder='Registration Number'
                onChange={(e)=>handleChange(e)}  
              />
               </div>
               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Country Of Operation</div>
             <TextField
                 className={classes.inputField}
                 value={vendorInfo.country}                 
                 select
                 required
                 name='country'
                 onChange={(e)=>handleChange(e)} 
              >
                {countries.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div> */}
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
        <div
            style={{
              alignItems: 'center',
              color: '#d4220f',
             marginBottom:'14px',
              marginLeft: '40px',
              marginRight: '40px'
            }}
          >
            <div className={classes.inputFieldName}>Customer Address</div>
            <TextField
             value={customerInfo.address}
              className={classes.inputField}
              style={{ width: '100%' }}
              placeholder='Customer Address'
              name='address'
              onChange={(e)=>handleChange(e)} 
              
            />
              
           
          </div>

          <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer Password</div>
             <TextField
             type='password'
                 className={classes.inputField}    
                 name='password'  
                 value={customerInfo.password}          
                placeholder='Customer Password'
                onChange={(e)=>handleChange(e)}  
              />
               </div> 
        {/* <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Vendor Status</div>
             <TextField
                 className={classes.inputField}
                 value={vendorInfo.vendorStatus}                 
                 select
                 required
                 name='vendorStatus'
                 onChange={(e)=>handleChange(e)} 
              >
                {vendorStatusType.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer are Self Serve?</div>
             <TextField
                 className={classes.inputField}
                 value={vendorInfo.customerAreSelfServe}                 
                 select
                 required
                 name='customerAreSelfServe'
                 onChange={(e)=>handleChange(e)} 
              >
                {customerAreSelfServeType.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div> */}
        </Card>
      </Grid>
      <div className={classes.customerInfoSubmitBtnContainer}>
        <div style={{width:'100%',textAlign:'center',justifyContent:'center',display:'flex'}}>
          {message && message.color === "green" ? 
          (<Alert severity="success" >{message.text}</Alert>): message.color === "red" ?
          (<Alert severity="error" >{message.text}</Alert>) : (<span></span>)  
          }
          
        </div>
        <Button size='small' className={classes.customerInfoSubmitBtn} onClick={submitVendorInfo}>
          Submit
        </Button>
      </div>
      {/* </form> */}
    </Grid>
  )
}
export default AddCustomer

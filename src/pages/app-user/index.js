// ** MUI Imports
import { useState,useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
// ** Demo Components Imports

import AddAppUser from 'src/views/app-user/AddAppUser'
import AssignSystemRole from 'src/views/app-user/AssignSystemRole'




import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";



const AppUser = () => {
  const [tabStatus,setTabStatus] = useState('addAppUser');
  

 
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            MUI Tables
          </Link>
        </Typography>
        <Typography variant='body2'>Tables display sets of data. They can be fully customized</Typography>
      </Grid> */}
      <Grid item xs={12} >
      <Card style={{display:'flex',gap:'1px',marginBottom:'0px',padding:'15px 10px 0px 10px',boxShadow:'0 0 0 0',borderRadius:'0'}}> 
        <Button
              size='small'
              sx={{ marginBottom: 7 }}
             style={{border:'solid 1px #282828',marginBottom:'0px',color:'#00477e',fontWeight:'600',textTransform:'none',
                    background: tabStatus === 'addAppUser' ? '#f7ea9c' : 'none'
                   }}
             onClick={()=>setTabStatus("addAppUser")}
             >
              App User
            </Button>
            
            <Button
              size='small'
              style={{border:'solid 1px #282828',color:'#00477e',fontWeight:'600',marginBottom:'0px',textTransform:'none',
              background: tabStatus === 'assignSystemRoles' ? '#f7ea9c' : 'none'}}
              sx={{ marginBottom: 7 }}
              onClick={()=>setTabStatus("assignSystemRoles")}
            >
              Assign System Roles
            </Button>
            </Card>
        <Card style={{padding:'0px 10px 10px 10px',boxShadow:'0 0 0 0',borderRadius:'0'}}>
        
           {tabStatus !== "" && tabStatus === "addAppUser" ? (
            <AddAppUser/>
           ) :  
           (
            <AssignSystemRole/>
           )
          
           }
           
        </Card>
      </Grid>
          </Grid>
  )
}

export default AppUser;

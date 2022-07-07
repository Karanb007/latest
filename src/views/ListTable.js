import {useState,useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'
// ** MUI Imports
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { makeStyles } from "@material-ui/core/styles"
import Button from '@mui/material/Button'
//icon
import AccountEdit from 'mdi-material-ui/AccountEdit'

const useStyles = makeStyles((theme) => ({
  table:{
    maxHeight:'70vh'
  },
  card:{
   
  border:'1px solid #7fab07',borderStyle:'dashed',paddingTop:'30px',paddingBottom:'10px',
 
  },
  btns:{
    display:'flex'
  }
}))

const ListTable = ({tableData})=>{
    const classes = useStyles()
    let headings = []
    let data = []
   
    for(let i in tableData[0]){
        headings.push(i)
    }

    
    
    
    return(
      <Card className={classes.card} >
        <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth:650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
             
                <TableCell align='left' >Id</TableCell>
                <TableCell align='left' >Name</TableCell>
                <TableCell align='left' >Phone</TableCell>
                <TableCell align='left' >E-mail</TableCell>
                <TableCell align='left' >DOB</TableCell>
                <TableCell align='left' >Address</TableCell>
            
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {tableData.map(customer => (
              <TableRow
                key={customer.name}
               
              >
                <TableCell component='th' scope='row'>
                  {customer.id}
                </TableCell>
                <TableCell align='left'>{customer.name}</TableCell>
                <TableCell align='left'>{customer.phone}</TableCell>
                <TableCell align='left'>{customer.email}</TableCell>
                <TableCell align='left'>{customer.dob}</TableCell>
                <TableCell align='left'>{customer.address}</TableCell>
                {/* <TableCell align='left' className={classes.btns}>
                   <Button>
                     edit
                   </Button>
                   <Button>
                     delet
                   </Button>
                   <Link href={{ pathname: "/workList/vendorProfile/", query: { id: vendor.id } }}><a>profile</a></Link>
                </TableCell> */}
              </TableRow>
            ))}
          {/* {tableData.map((items)=>(
              <TableRow>
                
                {
                  Object.values(items).map(item => {
                    return<TableCell>{item}</TableCell>
                  })
                
                }
                
               
                
              </TableRow>
               ))}
            */}
           
           
                
            
            
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
    )
}
export default ListTable;
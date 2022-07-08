import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
// ** MUI Imports
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
//icon
import AccountEdit from "mdi-material-ui/AccountEdit";

const useStyles = makeStyles((theme) => ({
  table: {
    maxHeight: "70vh",
  },
  card: {
    border: "1px solid #7fab07",
    borderStyle: "dashed",
    paddingTop: "30px",
    paddingBottom: "10px",
  },
  btns: {
    display: "flex",
  },
}));

const ListTable = ({ headings, data, actions,srno,buttons }) => {
  const classes = useStyles();
  
  // let headings = []
  // let data = []

  // for(let i in tableData[0]){
  //     headings.push(i)
  //
console.log("data from listtable:",data)
  return (
    <Card className={classes.card}>
      <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* headings */}
          <TableHead>
            <TableRow>
              {headings.map((item) => (
                <TableCell align="left">{item}</TableCell>
              ))}

              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          {/* data */}
          <TableBody>
           
            
            {data.map((items, i) => (
              
              <TableRow>
                {srno &&  <TableCell>{i + 1}</TableCell>}
               
                {Object.values(items).map((item) => {
                  return <TableCell>{item}</TableCell>;
                })}
               
                {buttons && <TableCell>{buttons.map((btn)=>(<button onClick={()=>console.log(btn.path+items.vendorId)}>{btn.name}</button>))}</TableCell>}
                {/* <TableCell>{actions.map((item)=> item)} </TableCell> */}
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
export default ListTable;

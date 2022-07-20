import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from '../Loader'
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
// components
import ListTable from "../ListTable";

const useStyles = makeStyles((theme) => ({
  table: {
    maxHeight: "70vh",
  },
  card: {
    border: "1px solid #7fab07",
    borderStyle: "dashed",
    paddingTop: "30px",
    paddingBottom: "10px",
    //     [theme.breakpoints.down("sm")]:{
    //       marginTop:'5px',
    //       height:'auto',
    //       paddingTop:'20px',
    //       paddingBottom:'20px',

    //  }
  },
  btns: {
    display: "flex",
  },
}));

const CustomerList = () => {
  const classes = useStyles();
  const [customer, setCustomer] = useState([]);
  const [loading,setLoading] = useState(false)
  const [data, setData] = useState([]);
  const router = useRouter()
  console.log("path:"+JSON.stringify(router))
  // const headings = [
  //   "Vendor Id",
  //   "Other Trading Name",
  //   "Individual/SoleTrader",
  //   "Registration Number",
  //   "Country of Operation",
  //   "Vendor Status",
  //   "Active Users",
  //   "Inactive Users",
  //   "",
  // ];
  const headings = ["Id", "Name", "Email", "Address", "Phone", "Role", ""];

  // const data = [
  //   {
  //     vendorId: "Vendor Id",
  //     otherTradingName: "Other Trading Name",
  //     soleTrader: "SoleTrader",
  //     registrationNumber: "Registration Number",
  //     countryOfOperation: "Country of Operation",
  //     vendorStatus: "Vendor Status",
  //     activeUsers: 5,
  //     inactiveUsers: 2,
  //   },
  // ];

  const buttons = [
    { name: "profile", path: "/customer/customer-profile/" },
    { name: "edit", path: "/customer/customer-edit/" },
    { name: "delete", backendLink:'https://nq0tehfqgh.execute-api.us-east-1.amazonaws.com/dev/customers/',redirectingPath:'/customer' },
  ];
  
  useEffect(()=>{
    getAllCustomers()
  },[])
  
  const getAllCustomers = async () => {
    const vid = localStorage.getItem("vid")
    setLoading(true)
    await axios
      .get(
        `https://nq0tehfqgh.execute-api.us-east-1.amazonaws.com/dev/vendors/${vid}`
      )
      .then((res) => {
        console.log(res.data.customers)
        const cdata = [];
        res.data.customers.forEach((item) => {
          const a = {};
          a.id = item.ur_id;
          a.name = item.ur_name;
          a.email = item.ur_email;
          a.address = item.ur_address;
          a.phone = item.ur_phone;
          a.role = item.ur_role;
          cdata.push(a);
        });
        setData(cdata)
      setLoading(false)
      })
      .catch((error) => console.log(error));
  };
  return (
    <>

      {data.length > 0 && (
        <ListTable
          srno={false}
          buttons={buttons}
          headings={headings}
          data={data}
        />
      )}
    </>

    // <ListTable/>
    // <Card className={classes.card} >
    //   <TableContainer component={Paper} className={classes.table}>
    //   <Table sx={{ minWidth:650}} aria-label='simple table'>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell align='left'>Id</TableCell>
    //         <TableCell align='left'>Other Trading Name</TableCell>
    //         <TableCell align='left'>Individual/Sole Trader</TableCell>
    //         <TableCell align='left'>Registration Number</TableCell>
    //         <TableCell align='left'>Coutry of Operation </TableCell>
    //         <TableCell align='left'>Vendor Status</TableCell>
    //         <TableCell align='right'></TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {vendors.map(vendor => (
    //         <TableRow
    //           key={vendor.name}

    //         >
    //           <TableCell component='th' scope='row'>
    //             {vendor.uniqueVendorId}
    //           </TableCell>
    //           <TableCell align='left'>{vendor.otherTradingName}</TableCell>
    //           <TableCell align='left'>{vendor.soleTrader}</TableCell>
    //           <TableCell align='left'>{vendor.registrationNumber}</TableCell>
    //           <TableCell align='left'>{vendor.country}</TableCell>
    //           <TableCell align='left'>{vendor.vendorStatus}</TableCell>
    //           {/* <TableCell align='left' className={classes.btns}>
    //              <Button>
    //                edit
    //              </Button>
    //              <Button>
    //                delet
    //              </Button>
    //              <Link href={{ pathname: "/workList/vendorProfile/", query: { id: vendor.id } }}><a>profile</a></Link>
    //           </TableCell> */}
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    // </Card>
  );
};
export default CustomerList;

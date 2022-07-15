import { useEffect, useState } from "react";
import axios from "axios";
import ListTable from '../../../views/ListTable'
import { makeStyles } from "@material-ui/core/styles";
import AccountGroup from "mdi-material-ui/AccountGroup";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";


const RegisteredUser = () => {
  // const classes = useStyles();

  const [registeredCustomers, setRegisteredCustomers] = useState([]);

  const [data, setData] = useState([{id:1,name:'karan',email:'kalrna@gmail.com',dob:'44995',address:'nagpur',image:'image'}]);
  const [headings, setHeadings] = useState(["id","name","email","dob","address","image"]);

//   useEffect(() => {
//     const getAllRegisteredCustomer = async () => {
//       await axios
//         .get("http://localhost:5000/api/employee/employee")
//         .then((res) => {
//           console.log(res.data);
//           setHeadings(Object.keys(res.data[0]));
//           let newData = [...res["data"]];
//           console.log("from index", newData);
//           setData(res.data[0]);
//           //  c
//         })
//         .catch((err) => console.log(err));
//     };

//     getAllRegisteredCustomer();
//   }, []);

  

  return (
    <ListTable
      headings={headings}
      data={data}
      componentHeading={"Registered Customer"}
      buttons={[{name:'edit',path:'registered-users/edit/'},{name:'delete',path:''}]}
    />
  );
};
export default RegisteredUser;

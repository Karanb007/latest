import { useEffect, useState } from "react";
import axios from "axios";
import ListTable from "../../views/ListTable";
import { makeStyles } from "@material-ui/core/styles";
import AccountGroup from "mdi-material-ui/AccountGroup";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

// const useStyles = makeStyles((theme) => ({
//     // container:{
//     //     marginTop:'15px',
//     //    display:'flex',
//     //    padding:'0px 20px',
//     //    alignItems:'center',
//     //    justifyContent:'space-between'
//     //   }
// }))
const registeredCustomer = () => {
  // const classes = useStyles();

  const [registeredCustomers, setRegisteredCustomers] = useState([]);

  const [data, setData] = useState([
    {
      address: "mangaon",
      createdAt: "2022-07-06T08:52:11.691Z",
      dob: "1/7/2072",
      email: "mulik@gmail.com",
      id: 1,
    },
    {
      address: "mangaon",
      createdAt: "2022-07-06T08:52:11.691Z",
      dob: "1/7/2072",
      email: "mulik@gmail.com",
      id: 1,
    },
  ]);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const getAllRegisteredCustomer = async () => {
      await axios
        .get("http://localhost:5000/api/employee/employee")
        .then((res) => {
          console.log(res.data);
          setHeadings(Object.keys(res.data[0]));
          let newData = [...res["data"]];
          console.log("from index", newData);
          setData(res.data[0]);
          //  c
        })
        .catch((err) => console.log(err));
    };

    getAllRegisteredCustomer();
  }, []);

  // const func = (registeredCustomer)=>{
  //  for(let i in registeredCustomer[0]){
  //    console.log(i)
  //  }

  // }
  // func(registeredCustomer)

  return (
    <ListTable
      headings={headings}
      data={data}
      componentHeading={"Registered Customer"}
    />
  );
};
export default registeredCustomer;

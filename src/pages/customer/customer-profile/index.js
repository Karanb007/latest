import {useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ListTable from '../../../views/ListTable'
const VendorProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [customer,setCustomer] = useState({})
  const [customerForms,setCustomerForms]= useState([]);
  const headings = ["id","cf_a1","cf_a2","cf_a3","cf_a4"]
  const [data,setData] = useState([])
  const buttons = [
    { name: "edit", path: "/customer-form/edit-customer-form/" },
  ];
  useEffect(() => {
    getVendor();
    getCustomerForms();
  }, []);

  const getVendor = async () => {
    await axios
      .get(
        `https://nq0tehfqgh.execute-api.us-east-1.amazonaws.com/dev/customers/${id}`
      )
      .then((res) => {
        console.log(res)
   setCustomer(res.data.customer);
      })
      .catch((error) => console.log(error));
  };
  const getCustomerForms = async()=>{
      await axios.get(`https://nq0tehfqgh.execute-api.us-east-1.amazonaws.com/dev/customers/91e8abb1-c8e7-458e-ba01-2338258078a5/allform`)
                 .then((res)=>{
                  console.log(res.data)
                  const cdata = [];
        res.data.forEach((item) => {
          const a = {};
          a.id = item.cf_id
          a.cf_a1 = item.cf_a1;
          a.cf_a2 = item.cf_a2;
          a.cf_a3 = item.cf_a3;
          a.cf_a4 = item.cf_a4;
          
          cdata.push(a);
        });
        console.log(cdata)
        setData(cdata)
                 })
                 .catch((err)=>console.log(err))
  }
  return <div>
    <div >
        <span>id : </span><span>{customer.ur_id}</span>
       
    </div>
    <div >
        <span>name : </span><span>{customer.ur_name}</span>
       
    </div>
    <div >
        <span>email : </span><span>{customer.ur_email}</span>
       
    </div>
    <div >
        <span>phone : </span><span>{customer.ur_phone}</span>
       
    </div>
    <div >
        <span>address : </span><span>{customer.ur_address}</span>
       
    </div>
<div style={{display:'flex',justifyContent:'center'}}>
  {/* <ListTable headings={headings} data={data}/> */}
  {data.length > 0 && (
        <ListTable
          srno={false}
          buttons={buttons}
          headings={headings}
          data={data}
        />
      )}
  </div>    
  </div>;
};

export default VendorProfile;

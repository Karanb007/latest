import {useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const VendorProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [customer,setCustomer] = useState({})

  useEffect(() => {
    getVendor();
  }, []);

  const getVendor = async () => {
    await axios
      .get(
        `https://nq0tehfqgh.execute-api.us-east-1.amazonaws.com/dev/customers/${id}`
      )
      .then((res) => {
   setCustomer(res.data.customer);
      })
      .catch((error) => console.log(error));
  };
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
    
  </div>;
};

export default VendorProfile;

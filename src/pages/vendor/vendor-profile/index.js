import {useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const VendorProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [vendor,setVendor] = useState({})
  const [vendorCustomers,setVendorCustomers] = useState([])

  useEffect(() => {
    getVendor();
  }, []);

  const getVendor = async () => {
    await axios
      .get(
        `https://nq0tehfqgh.execute-api.us-east-1.amazonaws.com/dev/vendors/${id}`
      )
      .then((res) => {
    setVendor(res.data.vendor);
      })
      .catch((error) => console.log(error));
  };
  return <div>
    <div >
        <span>id : </span><span>{vendor.ur_id}</span>
       
    </div>
    <div >
        <span>name : </span><span>{vendor.ur_name}</span>
       
    </div>
    <div >
        <span>email : </span><span>{vendor.ur_email}</span>
       
    </div>
    <div >
        <span>phone : </span><span>{vendor.ur_phone}</span>
       
    </div>
    <div >
        <span>address : </span><span>{vendor.ur_address}</span>
       
    </div>
    
  </div>;
};

export default VendorProfile;

import {useState} from 'react'
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import {useForm ,useFieldArray, Controller} from 'react-hook-form'
import { makeStyles } from "@material-ui/core/styles";
import Select from 'react-select'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


const useStyles = makeStyles((theme) => ({
    table: {
      maxHeight: "70vh",
    },
    card: {
      border: "1px solid #7fab07",
      borderStyle: "dashed",
      paddingTop: "30px",
      paddingBottom: "10px",
      height:'40vh'
    },
    btns: {
      display: "flex",
    },
  }));

  const permissionList = [
    {
        value:'',label:'Manage Croftz Admin'
      },
    {
    value:'Manage Croftz Admin',label:'Manage Croftz Admin'
  },
  {
    value:'Manage Croftz User',label:'Manage Croftz User'
  },
  {
    value:'Manage Vendor',label:'Manage Vendor'
  },
  {
    value:'Manage Vendor Admin',label:'Manage Vendor Admin'
  },
]

let renderCount = 0;
 
const CreateSystemRole = () => {
    const [age, setAge] = useState('');
    const classes = useStyles();
    const {register, handleSubmit,control} = useForm()
    const headings = ["Sr.No","Permission Name"," "]
    const [personName, setPersonName] = useState([]);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "permissions"
      });    

    const onSubmit = (data)=>{
console.log(data)
    }

    renderCount++;   
   
   
  return (
    <Card
      style={{
        padding: "0px 10px 10px 10px",
        boxShadow: "0 0 0 0",
        borderRadius: "0",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          ml: 3,
          lineHeight: 1,
          fontWeight: 500,
          marginBottom: "50px",
          fontSize: "1.5rem !important",
        }}
      >
        Edit/CreateSystemRole
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="inputGroup"
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <lable>Unique System Role ID </lable>
          <TextField placeholder="Unique System Role ID"  name='uniqueSystemRoleId'  {...register('uniqueSystemRoleId')}/>
        </div>

        <div
          className="inputGroup"
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <lable>System Role Name </lable>
          <TextField placeholder="System Role Name" name='systemRoleName' {...register('systemRoleName')}/>
          
        </div>
        <div>
        <lable>System Role Permissions </lable>
        
        {/* <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <Controller
                  as={<TextField label="Name" />}
                  name={`permissions[${index}].text`}
                  control={control}
                  mode="onBlur"
                  defaultValue={item.text}
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul> */}
        
       

        {/* <Card className={classes.card}>
        <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          
          <TableHead>
            <TableRow>
              {headings.map((item) => (
                <TableCell align="left">{item}</TableCell>
              ))}

              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
         
          <TableBody >
           <TableRow >
            <TableCell >1</TableCell>
            <TableCell >
            <Controller
        name="permission name"
        control={control}
        defaultValue=''
        render={({ field }) => <Select 
          {...field} 
          options={permissionList} 

        />}
      />
                
            
            </TableCell>
            <TableCell >1</TableCell>
           </TableRow>
         
            
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
        */}

        </div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
        <Button type='submit' variant="contained" color="primary" >Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateSystemRole;

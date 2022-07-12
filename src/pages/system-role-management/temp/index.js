import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Select from 'react-select'


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

const Temp = ()=>{

    const { register, control, handleSubmit, reset, trigger, setError } = useForm({
        // defaultValues: {}; you can populate the fields by this attribute 
      });
      const { fields, append ,remove} = useFieldArray({
        control,
        name: "test"
      });
      
      return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <ul>
            {fields.map((item, index) => (
              <li key={item.id}>
                {/* <input {...register(`test.${index}.firstName`)} /> */}
                <Controller
                  render={({ field }) => <input {...field} />}
                  name={`test.${index}.lastName`}
                  control={control}
                />
                  <Controller
        name={`test.${index}.firstName`}
        control={control}
        defaultValue=''
        render={({ field }) => <Select 
          {...field} 
          options={permissionList} 

        />}
      />
                <button type="button" onClick={() => remove(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => append({ firstName: "bill", lastName: "luo" })}
          >
            append
          </button>
          <input type="submit" />
        </form>
      );
}
export default Temp;
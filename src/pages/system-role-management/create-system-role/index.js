import { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Select from "react-select";
import { permissionList } from "./permissionList";



const useStyles = makeStyles((theme) => ({
  card: {
    padding: "20px 10px 300px 10px",
    boxShadow: "0 0 0 0",
    borderRadius: "0",
    color: "#00477e",
  },
  inputGroup: {
    display: "flex",
    gap: "20px",
    marginBottom: "10px",
    alignItems: "center",
  },
  permissionSection: {
    marginTop: "20px",
  },
  permissionSectionTable: {
    display: "flex",
    flexDirection: "column",
    width: "100",
    border: "solid 1px black",
  },
  permissionHeadingContainer: {
    display: "flex",
    padding: "20px 10px",
    fontSize: "20px",
    fontWeight: "600",
    borderBottom: "solid 1px black",
  },
  permissionDataContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 10px",
    borderTop: "solid 1px black",
  },
  submitBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));



const CreateSystemRole = () => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
 
  

  const { fields, append, remove } = useFieldArray({
    control,
    name: "permissions",
  });

  const onSubmit = (data) => {
    console.log(data);
    setPermission(data.permissions);
  };

  return (
    <Card className={classes.card}>
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
      {/* form starts here  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* first input  */}
        <div className={classes.inputGroup}>
          <lable>Unique System Role ID </lable>
          <TextField
            placeholder="Unique System Role ID"
            name="uniqueSystemRoleId"
            {...register("uniqueSystemRoleId")}
          />
        </div>
          {/* second input */}
        <div className={classes.inputGroup}>
          <lable>System Role Name </lable>
          <TextField
            placeholder="System Role Name"
            name="systemRoleName"
            {...register("systemRoleName")}
          />
        </div>

         {/* permissions section starts here */}
            
        <div className={classes.permissionSection}>
          <lable>System Role Permissions </lable>
          <div className={classes.permissionSectionTable}>
            {/* table headings section */}
            <div className={classes.permissionHeadingContainer}>
              <div style={{ flex: "2" }}>srno</div>
              <div style={{ flex: "4" }}>
                <span style={{ marginLeft: "10px" }}>Permissions Name</span>
              </div>
              <div style={{ flex: "3" }}></div>
            </div>

            {/* table data section */}
            {fields.map((item, index) => (
              <div
                key={item.id}
                className={classes.permissionDataContainer}
                style={{}}
              >
                <div style={{ flex: "2" }}>{index + 1}</div>
                <div style={{ flex: "4" }}>
                  <div style={{ width: "80%", marginLeft: "10px" }}>
                    <Controller
                      name={`permissions.${index}.permissionName`}
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select {...field} options={permissionList} />
                      )}
                    />
                  </div>
                </div>
                <div style={{ flex: "3" }}>
                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => append({ permissionName: "" })}>
            add permission
          </button>
        </div>
        <div className={classes.submitBtnContainer}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateSystemRole;

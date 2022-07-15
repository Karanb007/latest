import ListTable from '../../../views/ListTable'

const SystemRoleList = ()=>{
const headings = ["Sr.No.","System Role Name"," "];
const data = [{titel:"Croftz Admin"},{titel:"Croftz User"}]
    return (
  
           
         <ListTable srno={true} headings={headings} data={data} buttons={[{name:'edit',path:'/'}]}/>
         
        


    )
}

export default SystemRoleList;
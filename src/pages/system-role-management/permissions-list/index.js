import ListTable from '../../../views/ListTable'
import { permissionList } from "../permissionList";

const PermissionList = ()=>{
    const headings = ["Sr.No.","Permission Name","SHORT_ID"];
    
    return (
<ListTable srno={true} headings={headings} data={permissionList} />
    )
}
export default PermissionList
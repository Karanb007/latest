import ListTable from '../../views/ListTable';

const manageUsers = ()=>{
   const headings = ["Sr.No","Name","Unique User ID","E-mail ID","System Roles","Status","Action"];
   const data = [
                 {name:'mr.om',id:'xyz',emailId:'xyz',role:'admin',status:'active'},
                 {name:'mr.om',id:'xyz',emailId:'xyz',role:'admin',status:'active'}
                ]
    
    //    useEffect & functionality of getting data from backend will goes here         
  
    return (<>
    <ListTable srno={true} headings={headings} data={data} actions={[<button style={{marginRight:'5px'}}>toggle</button>,<button>edit</button>]} />
    </>)
}
export default manageUsers
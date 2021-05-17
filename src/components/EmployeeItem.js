import {Link,useHistory} from 'react-router-dom';

function EmployeeItem({data={}, setCurrentEmployee,employees,setEmployees}) {
  
    const {name,surname,id,phone,position,age} = data;
    const url = `employee/${id}`;
    const history = useHistory();

//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log('submit',data);
function handleEditClick(){
    history.push(url);
    setCurrentEmployee(data);
}

function handleRemoveClick(e){
    const filterEmployyes = employees.filter((item)=>{
        console.warn('filter',id, name, item,item.id != id)
        return item.id != id;
    })
    console.log('filterd', filterEmployyes)
    setEmployees(filterEmployyes);
}

  console.log('item',{data})
   return (
       <div style={{padding: '20px',margin: '10px', borderRadius: '4px', border: '1px solid'}}>
            <div>First Name: {name}</div>
            <div>Last Name: {surname}</div>
            <div>Age: {age}</div>
            <div>Phone: {phone}</div>
            <div>Position: {position ? position.toUpperCase() : 'n/a'}</div>
            <button onClick={handleEditClick}>edit</button>
            <button onClick={handleRemoveClick}>remove</button>
        </div>
   )
    {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20, value: name })} />
        <input type="submit" />
    </form> */}
}

export default EmployeeItem;

import {useState} from 'react'

function AddTodo({todoList,setTodoList}) {
  const [form,setForm] = useState({id:1,fullname:'',description:''})

  const handleChange = (e)=>setForm({...form,[e.target.id]:e.target.value})

  const handleSubmit = (e)=>{
    e.preventDefault()

    // const newForm = {
    //   id:form.id+1,
    //   fullname:form.fullname,
    //   description:form.description
    // }


    setTodoList((prevState)=>[...prevState,form])
    setForm({id:form.id+1,fullname:'',description:''})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='fullname' value={form.fullname} id='fullname' onChange={handleChange} placeholder='Full Name' /><br/>
        <textarea name="description" id="description" value={form.description} onChange={handleChange} placeholder='Todo description'></textarea><br/>
        <button>Add Todo</button>
      </form>

      <br/><br/><br/>

      {JSON.stringify(todoList)}

    </div>
  )
}

export default AddTodo
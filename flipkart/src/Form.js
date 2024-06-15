import React, { useState } from 'react'

function Form() {
    let [formData, setFormData] = useState({
        name:'',
        email:''
    });
    function handleChange(e) {
        var {name,value} = e.target;
        setFormData({
            ...formData , [name]: value
    })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log([formData.name, formData.email]);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            </label>
            <br/>
            
            <label>
                Email
                <input type='text' name='email' value={formData.email} onChange={handleChange}/>
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
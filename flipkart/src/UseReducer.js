import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialState = {
        data: [],
        loading : false,
        error: null
    }

    function reducer(state, action){
        switch(action.type){
            case 'FETCH_DATA_START' :
                return {...state, loading:true};
            case 'DATA_FETCH_SUCCESS':
                return {loading:false, error: null, data: action.payload};
            case 'DATA_FETCH_FAILIURE':
                return {...state, loading:false , error:action.payload};
            case 'DATA_DELETE' :
                return {...state, data : state.data.filter((item) => 
                    action.payload !== item.id 
                )}
            case 'ADD_DATA' :
                return {...state, data: [...state.data, action.payload]};   
        }

    }

    const [state, dispatch] = useReducer(reducer , initialState);
    const handleClick = async () => {
        dispatch ({type :'FETCH_DATA_START'});

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch ({type : 'DATA_FETCH_SUCCESS', payload : data});
        }
        catch(error){
            dispatch({type:'FETCH_DATA_FAILIURE', payload : error.message});
        }

    }
    const handleDelete = (id)=>{
        dispatch({type: 'DATA_DELETE' , payload: id})
    }
    const addData = (d)=>{
        dispatch({type: 'ADD_DATA', payload : d});
    }
  return (
    <div>
        <button onClick={handleClick}>Fetch Data</button>
        
            {state.loading && <p>Loading....</p>}
            {state.error && <p>ERROR: {state.error}</p>}
        <ul>
            {state.data.map((item)=>{
                return <li key = {item.id}>

                    {item.title}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
                
                
            })}
        </ul>
        <form onSubmit={(e)=>{
            e.preventDefault();
            addData({
                id: Date.now(),
                title: e.target.title.value
        })
        }}>
            <input type='text' name='title' placeholder='Add Some Data'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UseReducer
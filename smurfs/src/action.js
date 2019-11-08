import axios from "axios"

export function fetchSmurfs(input) {
    
    return (dispatch) => {
        axios.get("http://localhost:3333/smurfs")
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_NEW_SMURF",payload:res.data})
    })
  .catch(err => 
      console.log(err))
    }
}
export function addSmurf(input) {
    
    return (dispatch) => {
        axios.post("http://localhost:3333/smurfs",{
            name:input.name,
            age:input.age,
            height:input.height,
            id:Date.now()
        })
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_NEW_SMURF",payload:res.data})
    })
  .catch(err => 
      console.log(err))
    }
}
export function deleteSmurf(input) {
    
    return (dispatch) => {
        axios.delete(`http://localhost:3333/smurfs/${input}`)
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_NEW_SMURF",payload:res.data})
    })
  .catch(err => 
      console.log(err))
    }
}
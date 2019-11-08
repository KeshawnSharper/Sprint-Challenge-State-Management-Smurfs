import React,{useState} from "react"
import { connect } from "react-redux"
import { fetchSmurfs,addSmurf,deleteSmurf } from "./action"
const App = (props) => {
    const [input,setInput] = useState({
        name:"",
        age:"",
        height:"",
        id:""
    })
    const [id,setId] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(input)
    }
    const deleteSmurfs = e => {
        e.preventDefault()
        props.deleteSmurf(id)
    }
    console.log(id)
    
    return (<div>
        <form onSubmit={handleSubmit}>
        {props.smurfs.map(i => <p key={i.id}>Name: {i.name} Age: {i.age} Height: {i.height} id:{i.id} </p>)}
            <input placeholder="name" onChange={(e) => setInput({...input,name:e.target.value})}/>
            <input placeholder="age"onChange={(e) => setInput({...input,age:e.target.value})}/>
            <input placeholder="height"onChange={(e) => setInput({...input,height:e.target.value})}/>
            <button onClick={props.fetchSmurfs}>Fetch Smurfs</button>
        </form>
        <form onSubmit={deleteSmurfs}>
        <input placeholder="Delete smurf by ID "onChange={(e) => setId(e.target.value)}/>
        <button>Delete Smurf</button>
        </form>
        </div>
    )
}
function mapStateToProps(state){
    return{
    smurfs:state.smurfs
    }
}
const mapDispatchToProps= {
    fetchSmurfs,
    addSmurf,
    deleteSmurf
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
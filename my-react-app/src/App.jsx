import { useEffect, useState } from "react"
import axios from 'axios';
function App() {
    const [entervalue,setvalue]=useState("")
    const [furit, setfurit] = useState([])
useEffect(()=>{
    axios.get("http://localhost:5000/fruitlist").then(function(data){
       setfurit(data.data)
    })
},[])
function addfurit() {
      axios.post("http://localhost:5000/addfruit",{newfruit:entervalue})
        setfurit([...furit,{name:entervalue}])
        setvalue("")
    }
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="header">
                        <h1>Enter to the food world</h1>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => setvalue((e.target.value))} name="fruit" placeholder="Enter fruits Name..."></input><br></br>
                        <div className="button1">
                            <button onClick={addfurit}>Add</button>
                            {
                furit.map(function(list,index){
                    return <h1 key={index}>{list.name}</h1>
                })
               }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default App

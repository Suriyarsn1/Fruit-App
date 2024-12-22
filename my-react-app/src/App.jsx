import { useEffect, useState } from "react"
import axios from 'axios';
function App() {
    const [entervalue, setvalue] = useState("")
    const [furit, setfurit] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/fruitlist").then(function (data) {
            setfurit(data.data)
        })
    }, [])
    function addfurit() {
        axios.post("http://localhost:5000/addfruit", { newfruit: entervalue })
        setfurit([...furit, { name: entervalue }])
        setvalue("")
    }
    return (
        <>
           <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center rounded-md p-4 gap-4 mt-[20vh] bg-pink-200 w-[300px]">
                        <h1 className="font-bold text-2xl">Enter to the Fruit world</h1>
                    <div className="flex flex-col items-center gap-4">
                        <input className="p-1 rounded-md" type="text" onChange={(e) => setvalue((e.target.value))} name="fruit" placeholder="Add your fav fruits Name..."></input>
                        <button className="bg-transparent p-2 rounded-md border  border-black" onClick={addfurit}>Add</button>
                    </div>
                </div>
                <h1 className="font-bold text-2xl">In Your Database</h1>
                <div className="bg-slate-300 h-[300px] w-[300px] rounded-lg p-4 flex flex-col items-center flex-wrap" >
                    
                    {
                        furit.map(function (list, index) {
                            return <h1>{list.name}</h1>
                        })

                    }
                </div>
                </div>

        </>
    )
}

export default App

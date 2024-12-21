



function App() {


  return (
    <>
     <div class="main">
        <div class="container">
            <div class="header">
                <h1>Enter to the food world</h1>
            </div>
            <div class="form">
                <form action="http://localhost:5000/addfriut" method="get">
                    <input type="text" name="fruit" placeholder="Enter fruits Name..."></input><br></br>
                    <div class="button1">
                        <button>Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default App

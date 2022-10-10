import './App.css';

function App() {
    return (
        <div className = "App">
            <section>
                <div className = "location">
                    <h1 className = "city"> Bangkok </h1>
                    <p className = "state"> TH </p>
                </div>
                <div className = "card">
                    <div className = "weather">
                        <h1> 28 Degree </h1>
                        <small> max : 37, min : 20</small>
                    </div>
                    <div className = "information">
                        <div className = "status"> Good </div>
                        <div className = "humidity"> 100 </div>
                        <div className = "wind"> 4.0 </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;
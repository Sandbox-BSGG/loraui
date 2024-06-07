import './App.css';
import {useEffect, useState} from 'react';
import SensorChart from "./components/LineChart";

function App() {

    const [timeStamps, setTimeStamps] = useState([]);
    const [sensor, setSensor] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:8000/data")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setTimeStamps(data.timestamps);
                setSensor(data.sensor);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };
    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
    }, []);


    return (<>
            <div>
                <h2>Line Chart</h2>
                <SensorChart sensor={sensor} timestamps={timeStamps}/>

            </div>

        </>
    );
}

export default App;

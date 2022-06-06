import React, {useState, useEffect} from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";
import './App.css';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users);
            });
    }, [count]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    {
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !robots.length ? <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <button onClick={() => setCount(count + 1)}>Counter.</button> <span>{count}</span>
                    <SearchBox searchField={searchField} searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
};

export default App;
import React from 'react';
import './App.css';
import NewComponent from "./NewComponent";

const topCars = [
    {manufacturer:"BMW",model:'m5cs'},
    {manufacturer:"Mercedes",model:'e63s'},
    {manufacturer:"Audi",model:'rs6'}
]

function App() {
    return (
        <NewComponent topCars={topCars}/>)
}

export default App;

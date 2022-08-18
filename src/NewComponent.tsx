import React from "react";

type NewComponentType = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string
}

function NewComponent(props: NewComponentType) {
    return <table>
        {props.topCars.map((objectCarsType, index) => {
            return (
                <tr key={index}>
                    <td>{objectCarsType.manufacturer}</td>
                    <td>{objectCarsType.model}</td>
                </tr>
            )
        })}
    </table>
}

export default NewComponent;
import React from "react";

type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

function NewComponent(props: NewComponentType) {
    return <ul>
        {props.students.map((objectFromStudentsArray, index) => {
            return (
                <li key={objectFromStudentsArray.id}>
                    <span>{objectFromStudentsArray.name}</span>
                    <span> age: {objectFromStudentsArray.age}</span>
                </li>
            )
        })}
    </ul>
}

export default NewComponent;
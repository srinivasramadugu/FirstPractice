import React from 'react';


const emp_data = [
    {
        id:1,
        name:'srinivas',
        salary:100000
    },
    {
        id:2,
        name:'nitesh',
        salary:500000
    },
    {
        id:3,
        name:'krutika',
        salary:200000
    },
    {
        id:4,
        name:'kiran',
        salary:500000
    },
    {
        id:1,
        name:'srinivas',
        salary:100000
    },
    {
        id:2,
        name:'nitesh',
        salary:500000
    },
    {
        id:3,
        name:'krutika',
        salary:200000
    },
    {
        id:4,
        name:'kiran',
        salary:500000
    },
]

export default function Emp() {
    return (
        <div className="emp_list">
            {emp_data.map((employee) => {
                return(
                <div className="emp_card" key={employee.id}>
                     <h3>{employee.name}</h3>
                     <p>{employee.salary}</p>
                </div>
                )
            })}
        </div>
    )
}

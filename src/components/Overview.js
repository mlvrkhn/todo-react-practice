import React from 'react';
// import App from '../App';
import uniqid from 'uniqid';

const Overview = (props) => {
    const { tasks } = props;
    const delBtnStyle = {
        backgroundColor: '#FF6961',
        padding: '5px 10px',
        float: 'right',
        borderRadius: '50%',
        cursor: 'pointer',
        color: '#fff',
        border: 'none',
        transform: 'scale(0.7)'
    }
    
    const liStyle = {
        fontSize: '1.2em'
    };

    return (
        <ul>
            {tasks.map(task => {
                return (
                <p style={ liStyle } key={uniqid()}>{task.nr}. {task.desc}</p>
                )
            })}
        </ul>
    )
};

export default Overview;
import React from 'react';
import classes from "./person.module.css";
const Person = ({photo,name,age,desc}) => {
    return (
        <div className={classes.card}>
            <img src={photo} alt="photo"/>
            <p>{`Имя: ${name}`}</p>
            <p>{`Возраст: ${age}`}</p>
            <span className={classes.desc}>{desc}</span>
        </div>
    );
};

export default Person;
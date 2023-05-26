import React from 'react';
import {useParams} from "react-router-dom";

const Trying = () => {
    const {animal_id} = useParams();
    return (
        <div>
            <h1>{animal_id}</h1>
        </div>
    );
};

export default Trying;
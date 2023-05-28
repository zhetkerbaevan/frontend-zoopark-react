import React from 'react';

function AnimalList({ animals, renderAnimal }) {
    return (
        <div>
            {animals.map((animal) => renderAnimal(animal))}
        </div>
    );
}



export default AnimalList;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Service from "../../services/Service";
import {connect} from "react-redux";
import {fetchAnimals} from "../Redux/Actions/Actions";

class ListAnimals extends Component {
    constructor(props){
        super(props)

        this.state = {
            animals: []
        }
    }
    componentDidMount() {
        this.props.fetchAnimals();
    }

    handleDeleteAnimal = (id) => {
        // Выполняем удаление животного из базы данных или других источников
        Service.deleteAnimal(id)
            .then(() => {
                // Успешно удалено, обновляем состояние списка animals
                this.setState((prevState) => {
                    // Фильтруем массив animals, исключая удаленное животное
                    const updatedAnimals = prevState.animals.filter(
                        (animal) => animal.animal_id !== id
                    );
                    return { animals: updatedAnimals };
                });
            })
            .catch((error) => {
                console.log('Ошибка при удалении животного:', error.message);
            });
    };
    componentDidUpdate(prevProps, prevState) {
        // Проверяем, изменился ли массив animals
        if (prevState.animals !== this.state.animals) {
            console.log('Массив animals был изменен:', prevState.animals, '->', this.state.animals);
            // Выполняем дополнительные действия, связанные с изменением массива animals
            // Например, обновляем какие-то данные или вызываем другие методы
        }
    }
    render() {
        const { animals } = this.props;

        return (
            <div>
                <h2 className="text-center">Animals</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Classification</th>
                        <th>Meal</th>
                        <th>Habitat</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {animals.map((animal) => (
                        <tr key={animal.animal_id}>
                            <td>{animal.animal_id}</td>
                            <td>{animal.type}</td>
                            <td>{animal.description}</td>
                            <td>{animal.classification.classification_name}</td>
                            <td>{animal.meal.meal_name}</td>
                            <td>{animal.habitat.habitat_name}</td>
                            <td>
                                <button
                                    onClick={() => this.handleDeleteAnimal(animal.animal_id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                                <br></br>
                                <br></br>
                                <button className="btn btn-warning">
                                <Link to={`/edit/animal/${animal.animal_id}`}>Edit</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    animals: state.animals,
});

const mapDispatchToProps = {
    fetchAnimals,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAnimals);



import React, {Component} from 'react';
import Service from "../../services/Service";
import {Link} from "react-router-dom";

class ListAnimals extends Component {

    constructor(props){
        super(props)

        this.state = {
            animals: []
        }
    }

    componentDidMount() {
        this.fetchAnimals();
    }

    fetchAnimals() {
        Service.getAnimals()
            .then((res) => {
                this.setState({ animals: res.data });
            })
            .catch((error) => {
                console.error('Error fetching animals:', error);
            });

    }

    deleteAnimal(id) {
        fetch(`http://localhost:8000/api/v1/deleteAnimal/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.fetchAnimals(); // Обновление списка животных после удаления
            })
            .catch((error) => {
                console.error('Error deleting animal:', error);
            });
    }

    render() {
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
                    {
                       this.state.animals.map(
                           animal =>
                               <tr key = {animal.animal_id}>
                                   <td> {animal.animal_id} </td>
                                   <td> {animal.type}</td>
                                   <td> {animal.description}</td>
                                   <td> {animal.classification.classification_name}</td>
                                   <td> {animal.meal.meal_name}</td>
                                   <td> {animal.habitat.habitat_name}</td>
                                   <td><button onClick={()=>this.deleteAnimal(animal.animal_id)} className="btn btn-danger">Delete</button>
                                       <Link to={`/edit/animal/${animal.animal_id}`}>Edit</Link></td>
                               </tr>
                       )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ListAnimals;
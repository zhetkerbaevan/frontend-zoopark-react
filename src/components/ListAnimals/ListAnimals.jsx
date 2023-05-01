import React, {Component} from 'react';
import AnimalsService from "../../services/AnimalsService";
import { Link } from "react-router-dom";
class ListAnimals extends Component {
    constructor(props){
        super(props)

        this.state = {
            animals: []
        }
    }
    componentDidMount() { //get immediately called after component is mounted
        AnimalsService.getAnimals().then((res) => {
            this.setState({animals: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Animals</h2>
                <Link className="btn btn-primary" to="/add-classification">Add Classification</Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
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
                               <tr key = {animal.id}>
                                   <td> {animal.type}</td>
                                   <td> {animal.amount}</td>
                                   <td> {animal.description}</td>
                                   <td> {animal.classification.classification_name}</td>
                                   <td> {animal.meal.meal_name}</td>
                                   <td> {animal.habitat.habitat_name}</td>
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
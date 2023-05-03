import React, {Component} from 'react';
import AnimalsService from "../../services/AnimalsService";
import './Home.css'

class Home extends Component {
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
            <div className="animal-card-container">
                {
                this.state.animals.map(
                animal => (
                <div className="animal-card" key = {animal.id}>
                    <h5 className="card-title">{animal.type}</h5>
                    <img src={animal.photo} alt={animal.type} />
                    <p className="card-text">{animal.description.substr(0, 65)}...</p>
                    <p className="card-text">
                        {animal.classification.classification_name}
                    </p>
                    <p className="card-text"><small className="text-muted">{animal.habitat.habitat_name}</small></p>
                </div>
                    )
                )
                }
            </div>
        );
    }
}

export default Home;

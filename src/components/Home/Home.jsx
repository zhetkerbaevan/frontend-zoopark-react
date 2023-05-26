import React, { Component } from "react";
import Service from "../../services/Service";
import "./Home.css";
import AnimalModal from "./AnimalModal";
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
        };
    }
    async componentDidMount() {
        try {
            const res = await Service.getAnimals();
            this.setState({ animals: res.data });
        } catch (error) {
            console.log("Failed to fetch animals:", error.message);
        }
    }

    render() {
        return (
            <div className="animal-card-container">
                {this.state.animals.map((animal) => (
                    <AnimalModal animal={animal} key={animal.animal_id} />
                ))}
            </div>
        );
    }
}

export default Home;

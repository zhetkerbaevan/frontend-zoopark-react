import React, { Component, useState } from "react";
import AnimalsService from "../../services/AnimalsService";
import "./Home.css";
import AnimalModal from "./AnimalModal";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
        };
    }
    componentDidMount() {
        //get immediately called after component is mounted
        AnimalsService.getAnimals().then((res) => {
            this.setState({ animals: res.data });
        });
    }

    render() {
        return (
            <div className="animal-card-container">
                {this.state.animals.map((animal) => (
                    <AnimalModal animal={animal} key={animal.id} />
                ))}
            </div>
        );
    }
}

export default Home;

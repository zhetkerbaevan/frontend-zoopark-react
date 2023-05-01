import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AnimalsService from "../../services/AnimalsService";
class AddClassification extends Component {

    constructor(props){
        super(props)

        this.state = {
          classification_name : ''
        }
        this.changeClassificationHandler = this.changeClassificationHandler.bind(this);
        this.saveClassification = this.saveClassification.bind(this);
    }
    changeClassificationHandler = (event) => {
        this.setState({classification_name: event.target.value});
    }
    saveClassification = (e) => {
        e.preventDefault();
        let classification = {classification_name: this.state.classification_name};
        console.log('classification =>' + JSON.stringify(classification));

        AnimalsService.addClassification(classification).then(res => {
            this.props.history.push('/animals');
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Classification</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Classification: </label>
                                        <input placeholder="Classification" name="classification_field" className="form-control" value={this.state.classification_name} onChange={this.changeClassificationHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveClassification}>Save</button>
                                    <Link className="btn btn-danger" to="/animals" style={{marginLeft: "10px"}}>Cancel</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddClassification;
import React, {Component} from 'react';

class AddAnimal extends Component {
    constructor(props){
        super(props)

        this.state = {
            type: '',
            amount: 0,
            description: '',
            classification_id: 0,
            meal_id: 0,
            habitat_id: 0
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Animal</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Type: </label>
                                        <input placeholder="Type" name="type_field" className="form-control" value={this.state.type} onChange={this.ChangeTypeHandler}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAnimal;

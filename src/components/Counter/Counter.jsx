import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from "../../components/Actions/actions";
import {bindActionCreators} from "redux";


const Counter = ({ count, actions }) => {
    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={actions.incrementCount}>Увеличить</button>
            <button onClick={actions.decrementCount}>Уменьшить</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ incrementCount, decrementCount }, dispatch),
    };
};

// Connect the component to the Redux store
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;
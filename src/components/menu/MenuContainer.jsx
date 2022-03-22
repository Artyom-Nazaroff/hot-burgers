import React, {Component} from 'react';
import Menu from "./Menu";
import {connect} from "react-redux";
import {addToOrder} from "../../redux/commonReducer";
import PropTypes from "prop-types";

class MenuContainer extends Component {

    static propTypes = {
        burgers: PropTypes.object,
        currentRestaurant: PropTypes.object,
        addToOrder: PropTypes.func,
    }

    render() {
        return (
            <>
                <Menu
                    burgers={this.props.burgers}
                    currentRestaurant={this.props.currentRestaurant}
                    addToOrder={this.props.addToOrder}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        burgers: state.reducer.burgers,
        currentRestaurant: state.reducer.currentRestaurant,
    }
}

export default connect(mapStateToProps, {addToOrder})(MenuContainer);
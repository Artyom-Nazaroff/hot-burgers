import React, {Component} from 'react';
import Landing from "./Landing";
import {connect} from "react-redux";
import {setCurrentRestaurant} from "../redux/commonReducer";
import PropTypes from "prop-types";

class LandingContainer extends Component {

    static propTypes = {
        restaurants: PropTypes.object,
        setCurrentRestaurant: PropTypes.func,
    }

    render() {
        return (
            <div>
                <Landing
                    restaurants={this.props.restaurants}
                    setCurrentRestaurant={this.props.setCurrentRestaurant}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.reducer.restaurants
    }
}

export default connect(mapStateToProps, {setCurrentRestaurant})(LandingContainer);
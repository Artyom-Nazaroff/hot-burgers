import React, {Component} from 'react';
import {connect} from "react-redux";
import Order from "./Order";
import {deleteFromOrder} from "../../redux/commonReducer";
import PropTypes from "prop-types";

class OrderContainer extends Component {

    static propTypes = {
        burgers: PropTypes.object,
        order: PropTypes.object,
        deleteFromOrder: PropTypes.func,
    }

    render() {
        return (
            <>
                <Order
                    burgers={this.props.burgers}
                    order={this.props.order}
                    deleteFromOrder={this.props.deleteFromOrder}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        burgers: state.reducer.burgers,
        order: state.reducer.order,
    }
};

export default connect(mapStateToProps, {deleteFromOrder})(OrderContainer);
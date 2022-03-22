import React from 'react';
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewBurger, deleteBurger, updateBurger} from "../../redux/commonReducer";

class MenuAdminContainer extends React.Component {

    static propTypes = {
        burgers: PropTypes.object,
        deleteBurger: PropTypes.func,
        updateBurger: PropTypes.func,
        createNewBurger: PropTypes.func,
    };

    render() {
        return (
            <div className={'menu-admin'}>
                <h2>Управление меню</h2>
                {Object.keys(this.props.burgers).map(item => {
                    return <EditBurgerForm
                        burger={this.props.burgers[item]}
                        key={item}
                        index={item}
                        updateBurger={this.props.updateBurger}
                        deleteBurger={this.props.deleteBurger}
                    />
                })}
                <AddBurgerForm createNewBurger={this.props.createNewBurger}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        burgers: state.reducer.burgers,
    }
}

export default connect(mapStateToProps,
    {updateBurger, deleteBurger, createNewBurger})(MenuAdminContainer);
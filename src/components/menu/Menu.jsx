import React from 'react';
import Header from "./Header";
import Burger from "./Burger";
import PropTypes from "prop-types";

const Menu = ({burgers, currentRestaurant, addToOrder}) => {
    return (
        <div className={'menu'}>
            <Header title={currentRestaurant.title}/>
            <ul className={'burgers'}>
                {Object.keys(burgers).map(item =>
                    <Burger
                        key={item}
                        index={item}
                        burger={burgers[item]}
                        addToOrder={addToOrder}
                    />
                )}
            </ul>
        </div>
    );
};

Menu.propTypes = {
    burgers: PropTypes.object,
    currentRestaurant: PropTypes.object,
    addToOrder: PropTypes.func,
};

export default Menu;
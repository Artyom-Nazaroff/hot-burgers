import sampleBurgers from "../sample-burgers";
import sampleRestaurants from "../sample-restaurants";

const GO_TO_RESTAURANT = 'GO_TO_RESTAURANT';
const ADD_TO_ORDER = 'ADD_TO_ORDER';
const DELETE_FROM_ORDER = 'DELETE_FROM_ORDER';
const UPDATE_BURGER = 'UPDATE_BURGER';
const DELETE_BURGER = 'DELETE_BURGER';
const CREATE_NEW_BURGER = 'CREATE_NEW_BURGER';



const initialState = {
    restaurants: sampleRestaurants,
    currentRestaurant: {},
    burgers: sampleBurgers,
    order: {},
}

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_TO_RESTAURANT:
            return {
                ...state,
                currentRestaurant: {
                    title: action.title,
                    url: action.url,
                }
            };
        case ADD_TO_ORDER:
            const value = state.order.hasOwnProperty(action.index) ? state.order[action.index] + 1 : 1;
            return {
                ...state,
                order: {
                    ...state.order,
                    [action.index]: value,
                },
            };
        case DELETE_FROM_ORDER:
            const changedOrder = {...state.order};
            delete changedOrder[action.item];
            return {
                ...state,
                order: {...changedOrder},
            };
        case UPDATE_BURGER:
            return {
                ...state,
                burgers: {
                    ...sampleBurgers,
                    [action.index]: action.burger,
                }
            };
        case DELETE_BURGER:
            const burgersCopy = {...sampleBurgers};
            delete burgersCopy[action.index];
            return {
                ...state,
                burgers: {
                    ...burgersCopy
                },
            };
        case CREATE_NEW_BURGER:
            return {
                ...state,
                burgers: {
                    ...sampleBurgers,
                    [`burger${Date.now()}`]: action.newBurger,
                },
            };
        default:
            return state
    }
};

export const setCurrentRestaurant = (title, url) => ({type: GO_TO_RESTAURANT, title, url});
export const addToOrder = index => ({type: ADD_TO_ORDER, index});
export const deleteFromOrder = item => ({type: DELETE_FROM_ORDER, item});
export const updateBurger = (index, burger) => ({type: UPDATE_BURGER, index, burger});
export const deleteBurger = index => ({type: DELETE_BURGER, index});
export const createNewBurger = newBurger => ({type: CREATE_NEW_BURGER, newBurger});


export default CommonReducer;
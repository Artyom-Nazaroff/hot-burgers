import React from 'react';
import MenuAdminContainer from "./admin/MenuAdminContainer";
import MenuContainer from "./menu/MenuContainer";
import OrderContainer from "./order/OrderContainer";

const App = () => {
    return (
        <div className={'burger-app-wrapper'}>
            <div className={'burger-paradise'}>
                <MenuContainer/>
                <OrderContainer/>
                <MenuAdminContainer/>
            </div>
        </div>
    );
}

export default App;
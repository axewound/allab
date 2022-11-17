import './App.css';
import {withRouter} from "react-router-dom";

import {connect} from "react-redux";
import ProductPages from "./products/ProductPage";
import {getProductThunk, setProduct} from "./redux/products-reducer";
import {useEffect} from "react";

function App(props) {
    useEffect(() => {
        props.getProductThunk();
    }, []);



    return (
        <div className="App">
            <ProductPages products={props.products}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        products: state.productsPage.products
    }
}
let WithContainer = withRouter(App)

export default connect(mapStateToProps, {getProductThunk, setProduct})(WithContainer);



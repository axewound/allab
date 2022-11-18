import './App.css';
import {Route, withRouter} from "react-router-dom";

import {connect} from "react-redux";
import ProductPages from "./products/ProductPage";
import {getProductThunk, setProduct} from "./redux/products-reducer";
import {useEffect} from "react";
import ProductOnePagesContrtainer from "./products/ProductOnePageContainer";
import {Container} from "react-bootstrap";

function App(props) {
    useEffect(() => {
        props.getProductThunk();
    }, []);



    return (
        <div className="App">
            <Container>
            <Route path='/' exact
                   render={() => <ProductPages products={props.products}/> } />
            <Route path='/product/:userId?'
                   render={() => <ProductOnePagesContrtainer/>}/>
            </Container>
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



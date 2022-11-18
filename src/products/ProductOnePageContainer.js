import React from 'react';
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserProfile} from "../redux/products-reducer";
import ProfileInfo from "./ProfileInfo";


class ProductOnePagesContrtainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        console.log(this.props)
        this.props.getUserProfile(userId);

    }
    render() {

        return (
            <ProfileInfo  {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => (

    {
        products: state.productsPage.products,
    profile: state.productsPage.profile,
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProductOnePagesContrtainer);


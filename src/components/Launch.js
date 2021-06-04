import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Moment from "react-moment";
import axios from 'axios';

const URL = "https://api.spacexdata.com/v4/launches"

export default class Rocket extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            spaceData: []
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios(`${URL}/` + id)
            .then(response => {
                this.setState({
                    spaceData: response.data,
                    isLoaded: true
                });
            }).catch((err) => console.error(err));
    }


    render() {

        if (!this.state.isLoaded) {
            return <h4>Loading...</h4>;
        }
        else {
            console.log(this.state.spaceData);
            const {
                id,
                name,   
                success,
                details,
            } = this.state.spaceData;
            return (
                <>
                    <h1 className="display-4 my-4 border-bottom border-secondary">
                        {name}
                    </h1>

                    <h4 className="mb-3">Launch Details</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="font-weight-bold text-white mr-2">
                                Launch Id:
                                        </span>
                            {id}
                        </li>
                        <li className="list-group-item">
                            <span className="font-weight-bold text-white mr-2">
                                Success :
                            </span>
                            {success==false ? "False":"True"}
                        </li>
                        {details && (
                            <li className="list-group-item">
                                <span className="font-weight-bold text-white mr-2">
                                    Details:
                                            </span>
                                {details}
                            </li>
                        )}
                    </ul>
                    <hr />

                    <Link to="/" className="btn btn-secondary mb-4">
                        Back
                    </Link>
                </>
            );
        }

    }
}
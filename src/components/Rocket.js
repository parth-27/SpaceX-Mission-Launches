import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Moment from "react-moment";
import axios from 'axios';

const URL = "https://api.spacexdata.com/v4/rockets"

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
                first_flight,
                cost_per_launch,
                success_rate_pct,
                details,
                flickr_images,
            } = this.state.spaceData;
            return (
                <>
                    <h1 className="display-4 my-4 border-bottom border-secondary">
                        {name}
                    </h1>

                    <h4 className="mb-3">Rocket Details</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="font-weight-bold text-white mr-2">
                                Rocket Id:
                                        </span>
                            {id}
                        </li>
                        <li className="list-group-item">
                            <span className="font-weight-bold text-white mr-2">
                                First Flight : 
                                        </span>
                            <Moment format="YYYY-MM-DD HH:mm">
                                {first_flight}
                            </Moment>
                        </li>
                        <li className="list-group-item">
                            <span className="font-weight-bold text-white mr-2">
                                Cost Per Launch :
                                        </span>
                                {cost_per_launch}
                        </li>
                        <li className="list-group-item">
                            <span className="font-weight-bold text-white mr-2">
                                Success Rate:
                            </span>
                            {success_rate_pct} %
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
                    
                    <h4 className="my-3">Images</h4>
                    {
                        flickr_images.length !== 0
                            ?
                            [
                                <ul className="list-group">
                                    {
                                        flickr_images.map((image) => (

                                            <li className="list-group-item">
                                                <img
                                                    width="500"
                                                    height="500"
                                                    src={image}
                                                    alt="Error" />

                                            </li>
                                        ))
                                    }
                                </ul>
                            ]
                            :
                            <h5 className="my-3">No Images Present</h5>
                    }
                    <hr />
                    <Link to="/" className="btn btn-secondary mb-4">
                        Back
                    </Link>
                </>
            );
        }

    }
}
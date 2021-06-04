import React, { Component } from 'react';
import axios from 'axios';
import LaunchItem from './LaunchItem';

const URL = "https://api.spacexdata.com/v4/launches/"

export default class Launches extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            spaceData: []
        };
    }

    componentDidMount() {
        axios(`${URL}`)
            .then(response => {
                this.setState({
                    spaceData: [...response.data],
                    isLoaded: true
                }, () => console.log("new", this.state));
            }).catch((err) => console.error(err));
    }

    render() {
        const launch = this.state.spaceData.map((launch) => {
            return <LaunchItem key={launch.id} launch={launch} />
        })
        if (!this.state.isLoaded) {
            return (
                <h1>Loading...</h1>
            )
        } else {

            return (
                <>
                    <h1 className="display-4 my-4">Launches</h1>
                    {launch}
                </>
            )
        }
    }
}

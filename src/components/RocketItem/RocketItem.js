import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function RocketItem(props) {
    console.log(props.launch.id)
    const {
        active,
        flickr_images,
        description,
        name,
        type,
        id,
    } = props.launch;

    return (
        <div className="card card-body mb-3">
            <div className="row">
                {flickr_images[0] && (
                    <div className="col-md-2 text-center">
                        <img
                            className="img-fluid"
                            src={flickr_images[0]}
                            alt={name}
                            style={{ width: "100px" }}
                        />
                    </div>
                )}
                <div
                    className={classNames({
                        "col-md-7": flickr_images[0],
                        "col-md-9": !flickr_images[0]
                    })}
                >
                    <h4>
                        <span
                            className={classNames({
                                "text-success": active,
                                "text-danger": !active
                            })}
                        >
                            Rocket Name : {name}
                        </span>
                    </h4>
                    <p>
                        <span className="font-weight-bold text-white mr-2">
                            Rocket Type : {type}
                        </span>
                    </p>
                    <p>
                        <span className="font-weight-bold text-white mr-2">
                            Description : {description ? description : "No Description Found"}
                        </span>
                    </p>
                </div>
                <div className="col-md-3 text-center">
                    <Link to={`/rockets/${id}`} className="btn btn-secondary">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
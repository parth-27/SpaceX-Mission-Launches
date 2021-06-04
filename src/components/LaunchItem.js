import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Moment from 'react-moment';

export default function LaunchItem(props) {
    const {
        success,
        links,
        details,
        name,
        date_local,
        id,
    } = props.launch;

    return (
        <div className="card card-body mb-3">
            <div className="row">
                {links.patch.small && (
                    <div className="col-md-2 text-center">
                        <img
                            className="img-fluid"
                            src={links.patch.small}
                            alt={name}
                            style={{ width: "100px" }}
                        />
                    </div>
                )}
                <div
                    className={classNames({
                        "col-md-7": links.patch.small,
                        "col-md-9": !links.patch.small
                    })}
                >
                    <h4>
                        <span
                            className={classNames({
                                "text-success": success,
                                "text-danger": !success
                            })}
                        >
                            Launch Name : {name}
                        </span>
                    </h4>
                    <p>
                        <span className="font-weight-bold text-white mr-2">
                            <Moment format="YYYY-MM-DD">
                                Launch Date : {date_local}
                            </Moment>
                        </span>
                    </p>
                    <p>
                        <span className="font-weight-bold text-white mr-2">
                            Details : {details ? details : "No details Found"}
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
import React from 'react'
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({
    launch: { id, mission_name, launch_date_local, launch_success }
}) {
    return (
        <div data-testid="Missions">
            <div className="card card-body mb-3 bg-dark ">
                <div className="row">
                    <div className="col-md-9">
                        <h4>Mission: {' '}
                            <span className={classNames({
                                'text-success': launch_success,
                                'text-danger': !launch_success
                            }
                            )}>{mission_name}</span></h4>
                        <p>Date: <Moment format="dddd, MMMM Do YYYY, h:mm a">{launch_date_local}</Moment></p>
                    </div>
                    <div className="col-md-3">
                        <Link to={`/launcheinfo/${id}`} className="btn btn-secondary">Launch Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

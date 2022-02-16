import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import Loader from './../Loader';

const LAUNCH_QUERY = gql`
query LaunchQuery($id:ID!) {
    launch(id: $id) {
        
        mission_name
        launch_year
        launch_success
        launch_date_local
        rocket {
            rocket {
                id
              }
            rocket_name
            rocket_type
        }
    }
}
`;

function LaunchDetail() {
    {
        let { id } = useParams();



        const { loading, error, data } = useQuery(LAUNCH_QUERY, { variables: { id } });
        if (loading) return <Loader />;
        if (error) return <p>Error :(</p>;

        console.log(data)
        const { mission_name, launch_year, launch_success,
            rocket: { rocket_name, rocket_type } } = data.launch;

        return (
            <div>
                <h1 className="display-4 my-3 mt-5 d-flex justify-content-center">
                    <span className="text-dark">Mission:</span> {mission_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                    <li className="list-group-item bg-dark ">Mission Id: {id}</li>
                    <li className="list-group-item bg-dark">Launch Year: {launch_year}</li>
                    <li className="list-group-item bg-dark">
                        Launch Successful:{' '}
                        <span className={classNames({
                            'text-success': launch_success,
                            'text-danger': !launch_success
                        })}>
                            {launch_success ? 'Yes' : 'No'}
                        </span>
                    </li>
                </ul>
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                    <li className="list-group-item bg-dark">Rocket ID: {data.launch.rocket.rocket.id}</li>
                    <li className="list-group-item bg-dark">Rocket Name: {rocket_name}</li>
                    <li className="list-group-item bg-dark">Rocket Type: {rocket_type}</li>
                </ul>
                <hr />
                <Link to="/launcheinfo" className="btn btn-secondary">Back</Link>
            </div>
        )
    }
}

export default LaunchDetail
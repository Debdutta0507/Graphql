import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Loader from '../Loader';
import Error from '../Error';
import LaunchItem from '../LaunchItem';
import Filter from '../Filter/Filter';
const GET_LAUNCH_DETAILS = gql`
{
    launches {
  
      mission_name
      launch_date_local
      launch_success
      id
      rocket {
        rocket_name
        rocket_type
        rocket {
          id
        }
      }
    }
  }`

function Launches() {
  const [val, changeVal] = useState('')
  const listenToYear = (year) => {
    changeVal(year)
    console.log(year);
  }
  const { loading, error, data } = useQuery(GET_LAUNCH_DETAILS);
  if (loading)
    return <Loader></Loader>
  if (error)
    return <Error />
  { console.log(data) }
  return (<div className="container">

    <h1 className="display-4 mt-5 my-3 d-flex justify-content-center" >Launches</h1>
    <div className="my-3">
      <p><span className="px-3 mr-2 bg-success" /> = Success</p>
      <p><span className="px-3 mr-2 bg-danger" /> = Fail</p>
      <Filter listenToYear={listenToYear} />
    </div>
    <div className='con'>
      {data.launches.map(launch => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </div>
  </div>
  )
}

export default Launches
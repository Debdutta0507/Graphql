import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Loader from '../Loader';
import Error from '../Error';

import DisplayLaunches from '../DisplayLaunches/DisplayLaunches';
const GET_LAUNCH_DETAILS = gql`
{
    launches {
  
      mission_name
      launch_date_local
      launch_success
      launch_year
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
  {
    let filtered_data
    console.log(data)

    return (
      <DisplayLaunches data={data} />

    )
  }
}

export default Launches
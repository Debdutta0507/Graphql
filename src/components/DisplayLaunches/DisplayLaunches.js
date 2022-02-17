import React, { useState } from 'react'
import Filter from '../Filter/Filter'
import LaunchItem from '../LaunchItem'

function DisplayLaunches({ data }) {
    const [val, changeVal] = useState('2020')
    const listenToYear = (year) => {
        changeVal(year)
        console.log(year);
    }

    let filtered_data = data.launches.filter(
        p => {

            if ((p.launch_year).toString() == val.toString())
                return p;
        }
    )
    return (
        <div className="container">

            <h1 className="display-4 mt-5 my-3 d-flex justify-content-center" >Launches</h1>
            <div className="my-3">
                <p><span className="px-3 mr-2 bg-success" /> = Success</p>
                <p><span className="px-3 mr-2 bg-danger" /> = Fail</p>
                <Filter listenToYear={listenToYear} />
            </div>
            <div className='con'>
                {filtered_data.map((launch, i) => (
                    <LaunchItem key={i} launch={launch} />
                ))}
            </div>
        </div>
    )
}

export default DisplayLaunches
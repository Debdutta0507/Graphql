import React from 'react'

function Filter(props) {
    const onChangeYear = (event) => {

        props.listenToYear(event.target.value);

    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={onChangeYear}>

                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2016'>2016</option>
                </select>
            </div>
        </div>
    );

}

export default Filter
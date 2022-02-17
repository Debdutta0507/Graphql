import React from 'react';
import { gql, useQuery } from '@apollo/client';
//components
import Error from './../../components/Error';
import Loader from './../../components/Loader';
import MainHeader from './../../components/MainHeader';
// style
import './style.scss';
import Cards from '../../components/Cards.js';

export const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(GET_COMPANY_INFO);

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return (<>
        <div className="home__container d-flex align-items-center text-center h-60">
            <MainHeader name={data.company.name} description={data.company.summary} />


        </div>
        <div className='container w-50 mb-auto mx-auto mb-8 '>
            <Cards />

        </div>


    </>
    );
};

export default Home;

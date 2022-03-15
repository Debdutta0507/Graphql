import React from 'react';
import { render, screen } from "@testing-library/react"

import Rocket, { GET_ROCKET_INFO, rocketId } from "./Rocket"
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import ReactRouter from 'react-router'



import { MockedProvider } from "@apollo/client/testing";

const mocks = [
    {
        request: {
            query: GET_ROCKET_INFO,
            variables: { rocketId: "falcon9", }
        },

        result: {
            data: {
                "rocket": {
                    "name": "Falcon 9",
                    "height": {
                        "feet": 229.6,
                        "meters": 70
                    },
                    "diameter": {
                        "feet": 12,
                        "meters": 3.7
                    },
                    "stages": 2,
                    "cost_per_launch": 50000000,
                    "engines": {
                        "type": "merlin",
                        "number": 9,
                        "propellant_1": "liquid oxygen",
                        "propellant_2": "RP-1 kerosene",
                        "thrust_to_weight": 180.1
                    }
                }
            }
        }
    }
];
test("it renders product and loading is working", async () => {
    const { debug, getByText } = render(
        <MockedProvider mocks={mocks} >
            <BrowserRouter>
                <Rocket />
            </BrowserRouter>
        </MockedProvider>
    )





    const name = screen.getByTestId("loading")
    debug(name);
    expect(name).toBeInTheDocument();


})
test("it renders product and loading is working", async () => {

    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 'falcon9' });
    const { debug, getByText } = render(
        <MockedProvider mocks={mocks}>
            <BrowserRouter>
                <Rocket />
            </BrowserRouter>
        </MockedProvider>
    )





    const name = await screen.findAllByText("FALCON 9")
    debug();
    expect(name.length).toBe(2);


})




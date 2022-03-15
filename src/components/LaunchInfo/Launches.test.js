import React from 'react';
import { render, screen } from "@testing-library/react"

import Launches, { GET_LAUNCH_DETAILS } from "./Launches"
import '@testing-library/jest-dom'

import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from 'react-router-dom';

const mocks = [
    {
        request: {
            query: GET_LAUNCH_DETAILS
        },

        result: {
            "data": {
                "launches": [
                    {
                        "mission_name": "Thaicom 6",
                        "id": "13",
                        "launch_date_local": "2020-01-06T14:06:00-04:00",
                        "launch_success": true,
                        "launch_year": "2020",
                        "rocket": {
                            "rocket_name": "Falcon 9",
                            "rocket_type": "v1.1",
                            "rocket": {
                                "id": "falcon9"
                            }
                        }
                    },
                    {
                        "mission_name": "AsiaSat 6",
                        "id": "17",
                        "launch_date_local": "2020-09-07T01:00:00-04:00",
                        "launch_success": true,
                        "launch_year": "2020",
                        "rocket": {
                            "rocket_name": "Falcon 9",
                            "rocket_type": "v1.1",
                            "rocket": {
                                "id": "falcon9"
                            }
                        }
                    }
                ]

            }
        }
    }];


test("it renders product", async () => {
    const { debug, getByText } = render(
        <MockedProvider mocks={mocks}>
            <BrowserRouter>

                <Launches />
            </BrowserRouter>
        </MockedProvider>
    )





    const name = screen.getByTestId("loading")
    expect(name).toBeInTheDocument();


})

test("Loader is working", async () => {
    const { debug } = render(
        <MockedProvider mocks={mocks}>
            <BrowserRouter>

                <Launches />
            </BrowserRouter>



        </MockedProvider>
    )





    const name = await screen.findAllByTestId("Missions")

    expect(name.length).toBe(2);


})

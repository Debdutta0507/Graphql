import React from 'react';
import { render, screen } from "@testing-library/react"

import LaunchDetail, { LAUNCH_QUERY } from "./LaunchDetail"
import '@testing-library/jest-dom'
import ReactRouter from 'react-router'



import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from 'react-router-dom';

const mocks = [
    {
        request: {
            query: LAUNCH_QUERY,
            variables: {
                id: '9',
            },
        },

        result: {
            data: {

                "launch": {
                    "mission_name": "COTS 1",
                    "launch_year": "2010",
                    "launch_success": true,
                    "launch_date_local": "2010-12-08T11:43:00-04:00",
                    "rocket": {
                        "rocket": {
                            "id": "falcon9"
                        },
                        "rocket_name": "Falcon 9",
                        "rocket_type": "v1.0"
                    }
                }

            }

        }
    }
];
test("Loding is working", async () => {
    const { debug } = render(
        <MockedProvider>
            <BrowserRouter>
                <LaunchDetail></LaunchDetail>
            </BrowserRouter>
        </MockedProvider>
    )
    const load = screen.getByText("It's Loading")
    expect(load).toBeInTheDocument();

})
test("Fethced data working", async () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '9' });
    const { debug } = render(

        <MockedProvider mocks={mocks}>
            <BrowserRouter>
                <LaunchDetail></LaunchDetail>
            </BrowserRouter>
        </MockedProvider>
    )
    const load = await screen.findByText("COTS 1")

    expect(load).toBeInTheDocument();

})

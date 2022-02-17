import React from 'react';
import { render, screen } from "@testing-library/react"

import Home, { GET_COMPANY_INFO } from "./Home"
import '@testing-library/jest-dom'



import { MockedProvider } from "@apollo/client/testing";

const mocks = [
    {
        request: {
            query: GET_COMPANY_INFO
        },

        result: {
            data: {
                "company": {
                    "name": "SpaceX",
                    "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
                }
            }

        }
    }
];



test("it renders product", async () => {
    const { debug, getByText } = render(
        <MockedProvider mocks={mocks}>
            <Home />
        </MockedProvider>
    )




    debug();
    const name = screen.getByRole("img", { name: "rocket" })
    expect(name).toBeInTheDocument();


})

test("Loader is working", async () => {
    const { debug, getByText } = render(
        <MockedProvider mocks={mocks}>
            <Home />
        </MockedProvider>
    )




    debug();
    const name = await screen.findByText("SpaceX")
    expect(name).toBeInTheDocument();


})

// describe("CharactersList test suite", () => {

//     beforeEach(() => {

//         render(<MockHome />)

//         screen.debug()

//     })

//     test("contains a heading element", () => {

//         screen.debug();

//     })

// })
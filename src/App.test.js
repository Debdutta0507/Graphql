import React from 'react';
import { render, screen } from "@testing-library/react"

import App from "./App"
import '@testing-library/jest-dom'



import { MockedProvider } from "@apollo/client/testing";

// const mocks = [
//     {
//         request: {
//             query: GET_COMPANY_INFO
//         },

//         result: {
//             data: {
//                 "company": {
//                     "name": "SpaceX",
//                     "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
//                 }
//             }

//         }
//     }
// ];



test("it renders product", async () => {
    const { debug, getByText } = render(
        <MockedProvider>
            <App />
        </MockedProvider>
    )





    const name = screen.getAllByRole("img", { name: "rocket" })

    expect(name.length).toBe(2);


})

test("Spacex is Loading", async () => {
    const { debug, getByText } = render(
        <MockedProvider >
            <App />
        </MockedProvider>
    )





    const name = await screen.findAllByText("It's Loading")

    expect(name.length).toBe(2);


})
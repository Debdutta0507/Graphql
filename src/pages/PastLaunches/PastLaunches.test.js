import React from 'react';
import { render, screen } from "@testing-library/react"

import PastLaunches, { GET_LAUNCHES_QUERY } from "./PastLaunches"
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';



import { MockedProvider } from "@apollo/client/testing";
const mocks = [
    {
        request: {
            query: GET_LAUNCHES_QUERY
        },

        result: {

            data: {
                "launchesPast": [
                    {
                        "mission_name": "Starlink-15 (v1.0)",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": null,
                            "flickr_images": []
                        },
                        "id": "109"
                    },
                    {
                        "mission_name": "Sentinel-6 Michael Freilich",
                        "launch_site": {
                            "site_name_long": "Vandenberg Air Force Base Space Launch Complex 4E"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg",
                                "https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg",
                                "https://live.staticflickr.com/65535/50631544171_66bd43eaa9_o.jpg",
                                "https://live.staticflickr.com/65535/50631543966_e8035d5cca_o.jpg",
                                "https://live.staticflickr.com/65535/50631643257_c214ceee7b_o.jpg",
                                "https://live.staticflickr.com/65535/50631643917_cb7db291d0_o.jpg"
                            ]
                        },
                        "id": "108"
                    },
                    {
                        "mission_name": "Crew-1",
                        "launch_site": {
                            "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/11/16/astronauts-ride-spacex-crew-capsule-in-landmark-launch-for-commercial-spaceflight/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
                                "https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg",
                                "https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg",
                                "https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg",
                                "https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg",
                                "https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg",
                                "https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg",
                                "https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg",
                                "https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg",
                                "https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg",
                                "https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg",
                                "https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg",
                                "https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg",
                                "https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg",
                                "https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg",
                                "https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg",
                                "https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg"
                            ]
                        },
                        "id": "107"
                    },
                    {
                        "mission_name": "GPS III SV04 (Sacagawea)",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/11/06/spacex-launches-gps-navigation-satellite-from-cape-canaveral/",
                            "flickr_images": []
                        },
                        "id": "106"
                    },
                    {
                        "mission_name": "Starlink-14 (v1.0)",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/10/24/spacex-adds-another-60-satellites-to-starlink-network/",
                            "flickr_images": []
                        },
                        "id": "105"
                    },
                    {
                        "mission_name": "Starlink-13 (v1.0)",
                        "launch_site": {
                            "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/10/18/spacex-launches-another-batch-of-starlink-satellites/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50500804918_eb1187e1b2_o.jpg",
                                "https://live.staticflickr.com/65535/50501674637_f16f528728_o.jpg",
                                "https://live.staticflickr.com/65535/50501515611_2a3753bed1_o.jpg",
                                "https://live.staticflickr.com/65535/50501674632_0d5276b1b5_o.jpg"
                            ]
                        },
                        "id": "104"
                    },
                    {
                        "mission_name": "Starlink-12 (v1.0)",
                        "launch_site": {
                            "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                        },
                        "links": {
                            "article_link": null,
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50428228397_6151927733_o.jpg",
                                "https://live.staticflickr.com/65535/50427359318_67b3397892_o.jpg",
                                "https://live.staticflickr.com/65535/50428050591_36defbe958_o.jpg"
                            ]
                        },
                        "id": "103"
                    },
                    {
                        "mission_name": "Starlink-11 (v1.0)",
                        "launch_site": {
                            "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                        },
                        "links": {
                            "article_link": null,
                            "flickr_images": []
                        },
                        "id": "102"
                    },
                    {
                        "mission_name": "SAOCOM 1B, GNOMES-1, Tyvak-0172",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50291453997_aa715950e7_o.jpg",
                                "https://live.staticflickr.com/65535/50291306296_85b6ff12a2_o.jpg",
                                "https://live.staticflickr.com/65535/50291306061_2f9e350a85_o.jpg",
                                "https://live.staticflickr.com/65535/50291306216_4fd44c261e_o.jpg",
                                "https://live.staticflickr.com/65535/50291306346_136d3dce7b_o.jpg"
                            ]
                        },
                        "id": "101"
                    },
                    {
                        "mission_name": "Starlink-10 (v1.0) & SkySat 19-21",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg",
                                "https://live.staticflickr.com/65535/50242057637_ea4f98d517_o.jpg",
                                "https://live.staticflickr.com/65535/50242057682_6084977bf7_o.jpg",
                                "https://live.staticflickr.com/65535/50242057677_e96fbd46e6_o.jpg"
                            ]
                        },
                        "id": "100"
                    },
                    {
                        "mission_name": "Starlink-9 (v1.0) & BlackSky Global 5-6",
                        "launch_site": {
                            "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/08/07/spacex-closes-out-busy-week-with-launch-of-more-starlink-satellites",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50198901143_0bb53a499e_o.jpg",
                                "https://live.staticflickr.com/65535/50199448011_35d0e9c8bf_o.jpg",
                                "https://live.staticflickr.com/65535/50199715777_eca6f41d25_o.jpg"
                            ]
                        },
                        "id": "99"
                    },
                    {
                        "mission_name": "ANASIS-II",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/07/20/spacex-delivers-south-koreas-first-military-satellite-into-on-target-orbit/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50136967628_eda99b6353_o.jpg",
                                "https://live.staticflickr.com/65535/50137510881_4618ba6c84_o.jpg",
                                "https://live.staticflickr.com/65535/50136967553_e1ac93fab0_o.jpg",
                                "https://live.staticflickr.com/65535/50136967658_9347d7c575_o.jpg"
                            ]
                        },
                        "id": "98"
                    },
                    {
                        "mission_name": "GPS III SV03 (Columbus)",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/06/30/spacex-launches-its-first-mission-for-u-s-space-force/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50065947228_804efe6117_o.jpg",
                                "https://live.staticflickr.com/65535/50065947263_e1a6ea1e22_o.jpg",
                                "https://live.staticflickr.com/65535/50065947218_88ef29951a_o.jpg",
                                "https://live.staticflickr.com/65535/50066762457_8c92090037_o.jpg",
                                "https://live.staticflickr.com/65535/50085443052_9f6b843a02_o.jpg",
                                "https://live.staticflickr.com/65535/50085211776_588bed76f0_o.jpg",
                                "https://live.staticflickr.com/65535/50084627433_89d8915596_o.jpg"
                            ]
                        },
                        "id": "97"
                    },
                    {
                        "mission_name": "Starlink-8 & SkySat 16-18",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": "https://spaceflightnow.com/2020/06/13/starlink-satellite-deployments-continue-with-successful-falcon-9-launch/",
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/50009748327_93e52a451f_o.jpg"
                            ]
                        },
                        "id": "96"
                    },
                    {
                        "mission_name": "Starlink 7",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": null,
                            "flickr_images": [
                                "https://live.staticflickr.com/65535/49971196871_a0462d0084_o.jpg",
                                "https://live.staticflickr.com/65535/49970682603_e6333945ee_o.jpg"
                            ]
                        },
                        "id": "95"
                    }
                ]
            }


        }
    }
];

test("it renders product", async () => {
    const { debug, getByText } = render(
        <MockedProvider mocks={mocks}>
            <PastLaunches />
        </MockedProvider>
    )





    const name = screen.getByTestId("loading")
    expect(name).toBeInTheDocument();


})

test("Loader is working", async () => {
    const { debug } = render(
        <MockedProvider mocks={mocks}>
            <BrowserRouter>
                <PastLaunches />
            </BrowserRouter>
        </MockedProvider>
    )





    const name = await screen.findAllByTestId("Launch")

    expect(name.length).toBe(9);


})
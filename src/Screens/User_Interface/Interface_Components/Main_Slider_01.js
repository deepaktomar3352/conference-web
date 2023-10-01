import React, { useState, useEffect } from "react";
import { createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Grid, colors } from "@mui/material";
// import { serverURL, getData } from "../../../services/ServerServices";

export default function Main_Slider() {

    const [Banner, setBanner] = useState([])

    // const fetchAllBanner = async () => {
    //     var result = await getData('banner/fetch_all_banner')
    //     var Data=result.data[0].images
    //     var Images = Data.substring(0,Data.length-1).split(',')
    //     setBanner(Images)
    // };

    useEffect(function () {

        // fetchAllBanner();

    }, [])
    const Text = [
        { Heading: 'I AM Rohit', P: 'Hello everyone this is the most entertaining charater Rohit tomar', source: 'https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp' },
        { Heading: 'I AM Vikash', P: 'Hello everyone this is the most entertaining charater Vikash tomar', source: 'https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp' },
        { Heading: 'I AM Deepak', P: 'Hello everyone this is the most entertaining charater Deepak tomar', source: 'https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp' },
        { Heading: 'I AM Rohit', P: 'Hello everyone this is the most entertaining charater Rohit tomar', source: 'https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp' }

    ]

    const playImage = () => {
        return Text.map((item) => {
            return (
                <Grid xs={12} container style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Grid item xs={8}>
                            <div><h1 style={{ color: 'white', fontFamily: 'poppins', letterSpacing: 7 }}>{item.Heading}</h1></div>
                            <div><p style={{ color: 'white', fontFamily: 'poppins', fontSize: 18, width: '25vw' }}>{item.P}</p></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div><img src={item.source} width={'74%'}></img></div>
                        </Grid>
                    </div>
                </Grid>
            )
        })

    }


    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false // Hide the arrow navigation
    };

    const Refferance = createRef();
    function handleLeftSlide() {
        Refferance.current.slickPrev()
    }
    function handleRightSlide() {
        Refferance.current.slickNext()
    }


    return (
        <div>
            <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Slider ref={Refferance} {...settings}>
                    {playImage()}
                </Slider>
                <div style={{ width:'82%', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ marginRight: '6%' }}><KeyboardArrowLeftIcon onClick={handleRightSlide} style={{ position: 'absolute', zIndex: 1, backgroundColor: 'white', borderRadius: 25, marginTop: '8.5%', marginRight: '2%', cursor: 'pointer', fontSize: 42 }} /></div>
                    <div><KeyboardArrowRightIcon onClick={handleLeftSlide} style={{ position: 'absolute', zIndex: 1, marginTop: '8.5%', backgroundColor: 'white', borderRadius: 25, marginLeft: '2%', cursor: 'pointer', fontSize: 42 }} /></div>
                </div>
            </div>
        </div>
    )
}
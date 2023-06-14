import React, { useEffect } from 'react'
import "./Home.css";
import Carousel from "./Carousel/Carousel";
import Card from "./Card/Card";
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";




export default function Home() {
    useEffect(() => {
        AOS.init({
            offset: 170,
            duration: 700
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <Carousel />

            <div className='home-category' data-aos="fade-up">
                <Link to="/product">
                    <div className='men'>
                        <div className='dashed-line container'></div>
                        <img className="img-fluid" src="../asset/image1.jpg" alt="woman-image" />
                        <p className='home-category-title-m'>Men's Fashion</p>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='women'>
                        <div className='dashed-line container'></div>
                        <img className="img-fluid" src="../asset/image2.jpg" alt="man-image" />
                        <p className='home-category-title-f'>Women's Fashion</p>
                    </div>
                </Link>
            </div>
            <div className='home-quote' data-aos="fade-right">
                <div className='home-quote-left'>
                    <img src='./asset/img3.jpg' className='img-fluid' />
                </div>
                <div className='home-quote-right'>
                    <p className='home-p'>Style is a way <br />to say who you are <br />without having to speak.</p>
                </div>
            </div>
            <div className='featured-product' data-aos='zoom-in-left'>
                <p className='f-prooduct-title'>Featured Product</p>
                <div className='f-line'></div>
                <div className="flex-div">
                    <Card
                        img="./asset/Black_sleeves.glb"
                        title="Black Sleeves"
                        price="$10"
                    />
                    <Card
                        img="./asset/Yellow_accordian.glb"
                        title="Yellow Accordian"
                        price="$35"
                    />
                    <Card
                        img="./asset/top.glb"
                        title="Pink Top"
                        price="$50"
                    />
                </div>
            </div>
            <div className='customer-testimonial' data-aos="fade-zoom-in">
                <h1>Customer-Testimonial</h1>
                <div className='contant'>
                    <img src='./asset/test.svg' alt='test' />
                    <p>Everybody is different, which is why we offer styles for every body. </p>

                </div>
            </div>
            <div className='home-quote' data-aos="flip-up">
                <div className='home-quote-left-c'>
                    <p className='home-p'>Fashion is like <br />eating, you shouldn't <br />stick to the same menu.</p>
                </div>
                <div className='home-quote-right-c'>
                    <img src='./asset/img4.jpg' className='img-fluid' />
                </div>

            </div>
            <div className='latest-product' data-aos="fade-right">
                <p className='f-prooduct-title'>Latest Product</p>
                <div className='f-line'></div>
                <div className='flex-div'>
                    <Card
                        img="./asset/white_sportOutfit.glb"
                        title="Sports Outfit"
                        price="$70"
                    />
                    <Card
                        img="./asset/cream_tank_top.glb"
                        title="Cream Tank Top"
                        price="$13"
                    />
                    <Card
                        img="./asset/skyblue_blackneck_tshirt.glb"
                        title="Skybule Blackneck Tshirt"
                        price="$20"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

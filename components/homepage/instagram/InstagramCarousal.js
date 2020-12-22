import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import styled from 'styled-components';

const InstagramCarousal = ({ data }) => {
	let settings = {
		margin: '1rem',
		dots: true,
		infinite: false,
		speed: 500,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Slider {...settings}>
			{data.posts.map((post) => (
				<div style={{ margin: '1rem' }}>
					<Image src={post.imageUrl} height="500" width="500" key={uuidv4()} />
				</div>
			))}
		</Slider>
	);
};

export default InstagramCarousal;

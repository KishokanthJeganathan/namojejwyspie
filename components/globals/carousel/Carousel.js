import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecipeItem from '../recipeItem/RecipeItem';
import { v4 as uuidv4 } from 'uuid';

const Carousel = ({ data }) => {
	let settings = {
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
			{data.map((item) => (
				<RecipeItem
					key={uuidv4()}
					title={item.fields.title}
					src={`https://${item.fields.mainImage.fields.file.url}`}
					alt={item.fields.mainImage.fields.file.fileName}
					slug={`/${item.fields.type}/${item.fields.slug}`}
				/>
			))}
		</Slider>
	);
};

export default Carousel;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecipeItem from '../recipeItem/RecipeItem';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';

const Carousal = ({ otherRecipes, padding }) => {
	let settings = {
		dots: true,
		arrows: false,
		infinite: false,
		speed: 500,
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
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<S.Wrapper>
			<h2>You might also like</h2>
			<Slider {...settings}>
				{otherRecipes.map((item) => (
					<RecipeItem
						key={uuidv4()}
						title={item.fields.title}
						src={`https:${item.fields.mainImage.fields.file.url}`}
						alt={item.fields.mainImage.fields.file.fileName}
						slug={`/${item.sys.contentType.sys.id}/${item.fields.slug}`}
						padding={padding}
					/>
				))}
			</Slider>
		</S.Wrapper>
	);
};

export default Carousal;

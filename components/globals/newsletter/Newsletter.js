import React from 'react';
import * as S from './styles';

const Newsletter = () => {
	return (
		<S.SectionWrapper>
			<p>Subscribe to NEW RECIPES, it's free and always delicious!</p>
			<S.InputWrapper>
				<S.Input placeholder="your e-mail address" />
				<button>SUBMIT</button>
			</S.InputWrapper>
		</S.SectionWrapper>
	);
};

export default Newsletter;

import Image from 'next/image';
import * as S from './styles';

const Background = () => (
	<div>
		<S.BgWrap>
			<Image alt="Mountains" src="/Srilankan Cooking.jpg" layout="fill" objectFit="cover" quality={100} />
		</S.BgWrap>
		<S.BgText className={bgText}>
			Image Component
			<br />
			as a Background
		</S.BgText>
	</div>
);

export default Background;

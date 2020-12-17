import Image from 'next/image';
import * as S from './styles';

const Background = () => (
	<div>
		<S.BgWrap>
			<Image alt="Mountains" src="/Srilankan Cooking.jpg" layout="fill" objectFit="cover" quality={100} />
		</S.BgWrap>
	</div>
);

export default Background;

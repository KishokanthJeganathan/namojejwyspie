import React from 'react';
import { animated, useSpring } from 'react-spring';
import { AiOutlineClose } from 'react-icons/ai';
import NavigationLinks from '../constants/NavigationLinks';
import Link from 'next/link';
import * as S from './styles';
import { v4 as uuidv4 } from 'uuid';

const OpenNavBar = ({ toggle, toggleHandler }) => {
	const { x } = useSpring({
		x: toggle ? 0 : 100
	});
	return (
		<animated.nav
			style={{
				transform: x.interpolate((x) => `translate3d(${x * -1}%, 0,0)`),
				position: 'fixed',
				backgroundColor: 'black',
				color: 'white',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
				zIndex: '2',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<S.UL>
				{NavigationLinks.map((link) => (
					<li key={uuidv4()}>
						<Link href={`/${link.link}`}>
							<a onClick={() => toggleHandler(toggle)} style={{ marginTop: '3rem' }}>
								{link.destination}
							</a>
						</Link>
					</li>
				))}
				<li>
					<AiOutlineClose onClick={() => toggleHandler(toggle)} style={{ marginTop: '3rem' }} />
				</li>
			</S.UL>
		</animated.nav>
	);
};

export default OpenNavBar;

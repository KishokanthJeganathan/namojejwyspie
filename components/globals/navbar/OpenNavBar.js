import React from 'react';
import { animated, useSpring } from 'react-spring';
import { AiOutlineClose } from 'react-icons/ai';
import NavigationLinks from '../constants/NavigationLinks';
import Link from 'next/link';
import * as S from './styles';

const OpenNavBar = ({ toggle, toggleHandler }) => {
	const { x } = useSpring({
		x: toggle ? 0 : 100
	});
	return (
		<animated.div
			style={{
				transform: x.interpolate((x) => `translate3d(${x * -1}%, 0,0)`),
				position: 'fixed',
				backgroundColor: 'black',
				color: 'white',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
				zIndex: '1',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<nav>
				<S.UL>
					{NavigationLinks.map((link) => (
						<li>
							<Link href={link.link}>
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
			</nav>
		</animated.div>
	);
};

export default OpenNavBar;

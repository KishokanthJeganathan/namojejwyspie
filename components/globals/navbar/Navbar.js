import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';
import { RiMenu5Fill } from 'react-icons/ri';
import OpenNavBar from './OpenNavBar';
import Link from 'next/link';

const Navbar = () => {
	const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false);

	const toggleHandler = (x) => {
		setMobileMenuIsOpen(!x);
	};
	return (
		<S.Navbar>
			<Link href="/">
				<a style={{ color: 'black', textDecoration: 'none' }}>
					<S.LogoHolder>
						<Image src="/logo.png" alt="logo" width={130} height={80} />
						<span>
							<S.Name>Na Mojej Wyspie</S.Name>
							<S.Tagline>O Sri Lance - kuchni, historii, podrożach</S.Tagline>
						</span>
					</S.LogoHolder>
				</a>
			</Link>
			<S.Menu>
				<RiMenu5Fill onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} />
				<OpenNavBar toggle={mobileMenuIsOpen} toggleHandler={toggleHandler} />
			</S.Menu>
		</S.Navbar>
	);
};

export default Navbar;

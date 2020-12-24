import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';
import { RiMenu5Fill } from 'react-icons/ri';
import OpenNavBar from './OpenNavBar';

const Navbar = () => {
	const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false);

	const toggleHandler = (x) => {
		setMobileMenuIsOpen(!x);
	};
	return (
		<S.Navbar>
			<S.LogoHolder>
				<Image src="/logo.png" alt="Picture of the author" width={130} height={80} />
				<span>
					<strong>
						<S.Name>Na Mojej Wyspie</S.Name>
					</strong>

					<S.Tagline>O Sri Lance - kuchni, historii, podrożach</S.Tagline>
				</span>
			</S.LogoHolder>
			<S.Menu>
				<RiMenu5Fill onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} />
				<OpenNavBar toggle={mobileMenuIsOpen} toggleHandler={toggleHandler} />
			</S.Menu>
		</S.Navbar>
	);
};

export default Navbar;

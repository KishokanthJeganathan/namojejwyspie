import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`padding: 1rem 0rem;`;

const SectionWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default SectionWrapper;

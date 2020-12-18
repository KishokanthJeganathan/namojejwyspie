import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`padding: 1rem;`;

const SectionWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default SectionWrapper;

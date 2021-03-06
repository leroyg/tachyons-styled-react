import React from 'react'
import theme from '../theme'

import Div from '../elements/Div'
import Section from '../elements/Section'
import Article from '../elements/Article'
import Main from '../elements/Main'
import Table from '../elements/Table'
import Tr from '../elements/Tr'
import Td from '../elements/Td'

import Header from '../elements/Header'
import Footer from '../elements/Footer'
import H1 from '../elements/H1'
import H2 from '../elements/H2'
import H3 from '../elements/H3'
import H4 from '../elements/H4'
import H5 from '../elements/H5'
import P from '../elements/P'
import A from '../elements/A'
import Span from '../elements/Span'
import Code from '../elements/Code'

import Logo from '../components/Logo'
import Container from '../components/Container'

function Home() {
  return (
    <Div>
      <Header px={4} py={2} borderBottom='1px solid' borderColor='black-20' display='flex' alignItems='center'>
        <Div maxWidth='6rem'>
          <A display='block' href='https://tachyons.io'><Logo color='rgba(0,0,0,.7)' /></A>
        </Div>
        <A ml='auto' fontSize={0} fontWeight={700} color='black' href='https://github.com/tachyons-css/tachyons-styled-react' title="GitHub">GitHub</A>
      </Header>
      <Main>
        <Container pt={[5,6]} pb={[5,6,7]} px={4}>
          <H2 fontSize={[3,6,7]} mb={4} mt={0}>Build, design, and style UI at the speed of light</H2>
          <H3 fontSize={[1,2,3]} lineHeight={1.25} textStyle='caps' color='black-80' mb={5}>
            <Span display={['block', 'inline']}>Tachyons + </Span> 
            <Span display={['block', 'inline']}>Styled-system + </Span>
            <Span display={['block', 'inline']}>Emotion + </Span>
            <Span display={['block', 'inline']}>Create React App</Span>
          </H3>
          <A href='/styles' title="Styles and documentation" 
             bg='dark-blue' color='white' borderRadius={2} py={3} px={4} fontSize={[1]} fontWeight={700}>
            Styles &amp; Documentation
          </A>
        </Container>
    </Main>
    <Footer borderTop='1px solid' borderColor='black-20' px={4} py={4} display='flex'>
      <Div>
        <A color='black' py={1} fontWeight={700} href='https://tachyons.io' title='Tachyons' >Tachyons</A><br/>
        <A color='black' py={1} fontWeight={700} href='https://tachyons.io/docs' title='Tachyons Docs' >Docs</A><br/>
        <A color='black' py={1} fontWeight={700} href='https://github.com/tachyons-css/generator' title='Tachyons' >Generator</A><br />
      </Div>
      <Div ml='auto' width={144}>
        <A color='black' py={1} fontWeight={700} href='https://opencollective.com/tachyons' title='Tachyons' >Open Collective</A><br />
        <A color='black' py={1} fontWeight={700} href='https://github.com/tachyons-css' title='Tachyons' >GitHub</A><br /> 
        <A color='black' py={1} fontWeight={700} href='https://twitter.com/tachyons_css' title='Tachyons' >Twitter</A>       
      </Div>
    </Footer>
  </Div>
  );
}

export default Home

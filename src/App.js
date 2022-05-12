import React from 'react'

import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Carousel from './Carousel/Carousel'
import MainContent from './Main/MainContent'

import { GlobalStyle } from './globalStyle'
import { BodyWrapperStyle, ContentWrapper } from './appStyle'

function App() {
  return (
    <>
      <GlobalStyle />

      <BodyWrapperStyle>
        <Header />
        <NavBar />
        <ContentWrapper>
          <Carousel />
          <MainContent />
        </ContentWrapper>
      </BodyWrapperStyle>
    </>
  )
}

export default App
<<<<<<< HEAD
// wefdfdfdfd
=======
// dfdfd
>>>>>>> fd5635ec45b697ee690e998811f3a87b50d9dffc

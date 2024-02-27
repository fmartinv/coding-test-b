import styled from 'styled-components'

interface ContainerProps {
  applyMargin?: boolean
}

export const Container = styled.div<ContainerProps>`
  max-width: 100%;
  min-height: 35vh;
  max-height: 40vh;
  display: block;
  margin-bottom: ${props => (props.applyMargin ? '20rem' : '0')};
  padding: 0 4rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: ${props => (props.applyMargin ? '10rem' : '0')};
  }
  @media (max-width: 460px) {
    margin-bottom: ${props => (props.applyMargin ? '8rem' : '0')};
  }
`
export const Header = styled.div`
  min-height: 8rem;
  width: 100%;
`
export const GaleryTitle = styled.h2`
  color: #e4d6d6;
  @media (max-width: 460px) {
    font-size: 1.3rem;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`

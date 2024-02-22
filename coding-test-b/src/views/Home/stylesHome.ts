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
`
export const Header = styled.div`
  min-height: 8rem;
  width: 100%;
`
export const GaleryTitle = styled.h2`
  color: #e4d6d6;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`

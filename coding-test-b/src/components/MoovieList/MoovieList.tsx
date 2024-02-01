import React from 'react'
import type { MoovieListProps } from './types'
import MoovieCard from '../MoovieCard/MoovieCard'
import { Container } from './styles'

const MoovieList: React.FC<MoovieListProps> = ({ data, imgUrl }) => {
  return (
    <Container>
      {data &&
        data?.map(movie => (
          <div key={movie.id}>
            <MoovieCard moovie={movie} imgUrl={imgUrl} />
          </div>
        ))}
    </Container>
  )
}
export default MoovieList

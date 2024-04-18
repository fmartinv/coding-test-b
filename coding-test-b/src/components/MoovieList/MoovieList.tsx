import React from 'react'

import type { MoovieListProps } from './types'

import { Container } from './styles'
type imageObject = {
  original: string
  thumbnail?: string
  originalAlt?: string
  thumbnailAlt?: string
}

const MoovieList: React.FC<MoovieListProps> = ({ data, imgUrl }) => {
  const imageSource: imageObject[] = []
  data?.map(movie => {
    imageSource.push({
      original: imgUrl + movie.poster_path
    })
  })

  return (
    <Container>
      {/* <ImageGallery items={imageSource} showBullets /> */}
    </Container>
  )
}
export default MoovieList

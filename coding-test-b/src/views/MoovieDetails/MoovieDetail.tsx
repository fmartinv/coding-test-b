import { CONSTANTS } from '../../constants/constants'
import useLogic from './useLogic'
import * as S from './moovieDetailsStyles.ts'
import React from 'react'

const MoovieDetail: React.FC = () => {
  const { moovieData, genres, isLoading, realeaseYear, filmDuration } =
    useLogic()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {moovieData && (
        <S.ParentContainer>
          <S.Container>
            <S.imgContainer>
              <S.ImgWrapper>
                <S.ImgItem
                  src={`${CONSTANTS.IMG_URL}${moovieData.poster_path}`}
                  alt={moovieData.title}
                />
              </S.ImgWrapper>
            </S.imgContainer>

            <S.SectionArticle>
              <S.ArticleOverview>
                <S.TitleDetail>
                  <S.Title>
                    {moovieData.title}
                    <S.TagBadge>({realeaseYear})</S.TagBadge>
                  </S.Title>
                  <S.StatsContainer>
                    <S.Badge>
                      {moovieData.release_date} ({moovieData.original_language})
                    </S.Badge>
                    <S.Badge>{filmDuration}</S.Badge>
                    {genres?.map((gen, index) => (
                      <React.Fragment key={gen.id}>
                        <S.Badge>{gen.name}</S.Badge>
                        {index < genres.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </S.StatsContainer>
                </S.TitleDetail>
                <S.SubTitle>Resumen</S.SubTitle>
                <p>{moovieData.overview}</p>
                <p>{moovieData.vote_count}</p>
                <p>{moovieData.original_language}</p>
                <a href={moovieData.homepage}>Homepage</a>
              </S.ArticleOverview>
            </S.SectionArticle>
          </S.Container>
        </S.ParentContainer>
      )}
    </div>
  )
}

export default MoovieDetail

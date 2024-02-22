import styled from 'styled-components'

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`

export const ImgItem = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
`
export const Container = styled.div`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 1rem;
  height: 100dvh;
  justify-content: end;
`
export const imgContainer = styled.div`
  max-width: 400px;
  min-height: 500px;
  padding: 1rem;
`

export const ImgWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
`
export const ArticleOverview = styled.article`
  width: 80%;
  padding-top: 4rem;
  padding-right: 2rem;
  color: whitesmoke;
`

export const SectionArticle = styled.section`
  display: flex;
  align-items: start;
  flex-direction: column;
`
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.3rem;
`
export const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`

export const TitleDetail = styled.div``

export const TagBadge = styled.span`
  font-weight: 300;
  font-style: italic;
`

export const StatsContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  gap: 0.5rem;
`
export const Badge = styled.span`
  font-size: 1rem;
  font-weight: 300;
`

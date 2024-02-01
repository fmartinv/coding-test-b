import { CONSTANTS } from '../../constants/constants'
import './styles.css'
import useLogic from './useLogic'

const MoovieDetail: React.FC = () => {
  const { moovieData, isLoading, error } = useLogic()
  console.log(moovieData, error, isLoading)
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {moovieData && (
        <div className='container'>
          <div className='imgWrapper'>
            <img
              className='imgMoovieDetail'
              src={`${CONSTANTS.IMG_URL}${moovieData.poster_path}`}
              alt={moovieData.title}
            />
          </div>
          <section className='sectionArticle'>
            <article className='articleOverview'>
              <h2 className='TitleOverview'>{moovieData.title}</h2>
              <p>{moovieData.overview}</p>
              <p>{moovieData.release_date}</p>
              <p>{moovieData.vote_average}</p>
              <p>{moovieData.vote_count}</p>
              <p>{moovieData.popularity}</p>
              <p>{moovieData.original_language}</p>
              <a href={moovieData.homepage}>Homepage</a>
            </article>
          </section>
        </div>
      )}
    </div>
  )
}

export default MoovieDetail

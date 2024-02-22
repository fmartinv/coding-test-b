import { useParams } from 'react-router-dom'
import useDataFetch from '../../hooks/useDataFetch'
import { MovieDetail } from './types'
import { CONSTANTS } from '../../constants/constants'

const useLogic = () => {
  const { type, id } = useParams<{ type: string; id: string }>()

  const detailUrl = `${CONSTANTS.DETAIL_URL}/${type}/${id}${CONSTANTS.QUERY_MOVIE_DETAIL}`

  const { data, error, loading } = useDataFetch<MovieDetail>(detailUrl)

  const releaseDate = data?.release_date
  const realeaseYear = releaseDate?.slice(0, 4)

  function toHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}m`
  }
  function padToTwoDigits(num: number) {
    return num.toString().padStart(2, '0')
  }

  const filmDuration = data ? toHoursAndMinutes(data?.runtime) : null
  console.log('filmDuration', filmDuration)

  const genres = data?.genres

  return {
    error: error,
    filmDuration,
    genres,
    isLoading: loading,
    moovieData: data,
    realeaseYear
  }
}

export default useLogic

import { useParams } from 'react-router-dom'
import useDataFetch from '../../hooks/useDataFetch'
import { MovieDetail } from './types'
import { CONSTANTS } from '../../constants/constants'

const useLogic = () => {
  const { id } = useParams<{ id: string }>()

  const detailUrl = `${CONSTANTS.DETAIL_URL}${id}${CONSTANTS.QUERY_MOVIE_DETAIL}`

  const { data, error, loading } = useDataFetch<MovieDetail>(detailUrl)

  return { moovieData: data, isLoading: loading, error: error }
}

export default useLogic

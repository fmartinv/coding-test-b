import { CONSTANTS } from './constants/constants'
import { Movie } from './components/MoovieCard/types'
import useDataFetch from './hooks/useDataFetch'

interface MovieData {
  results: Movie[]
}

const useLogic = () => {
  const { data, error, loading } = useDataFetch<MovieData>(
    `${CONSTANTS.API_URL}${CONSTANTS.QUERY_MOVIE_POPULAR}`
  )
  return { data, error, loading }
}

export default useLogic

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout'
import { CONSTANTS } from './constants/constants'
import MoovieList from './components/MoovieList/MoovieList'
import MoovieDetail from './views/MoovieDetails/MoovieDetail'
import useLogic from './useLogic'

function App() {
  const {
    data: movieData,
    error: movieError,
    loading: movieLoading
  } = useLogic()

  if (movieLoading) return <div>Loading...</div>
  if (movieError) return <div>Error:PAGE EMPTY</div>

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                {movieData && (
                  <MoovieList
                    data={movieData?.results}
                    imgUrl={CONSTANTS.IMG_URL}
                  />
                )}
              </div>
            }
          ></Route>
          <Route path='/movie/:id' element={<MoovieDetail />}></Route>
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App

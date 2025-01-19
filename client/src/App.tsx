import { RecoilRoot } from 'recoil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ProfileScreen } from './screens/profile'
import { GameScreen } from './screens/game'

const router = createBrowserRouter([
  {
    path: "/profile", element: <ProfileScreen />
  },
  {
    path: "/game", element: <GameScreen />
  }
])

function App() {

  return (
    <RecoilRoot>
      <RouterProvider router={router}>
      </RouterProvider>
    </RecoilRoot>
  )
}

export default App



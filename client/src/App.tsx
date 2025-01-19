import { RecoilRoot } from 'recoil'
import { Main } from './components/main'
import { Sidebar } from './components/sidebar'

function App() {

  return (
    <RecoilRoot>
      <div className='w-screen h-screen overflow-hidden flex justify-end' >
        <Sidebar />
        <Main />
      </div>
    </RecoilRoot>
  )
}

export default App

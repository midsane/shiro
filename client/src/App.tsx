import { RecoilRoot } from 'recoil'
import { Main } from './components/main'
import { Sidebar } from './components/sidebar'
import { OuterModal } from './components/outerModal'

function App() {
  
  return (
    <RecoilRoot>
      <div className='w-screen h-screen overflow-hidden flex justify-end' >
       <OuterModal />
        <Sidebar />
        <Main />
      </div>
    </RecoilRoot>
  )
}

export default App



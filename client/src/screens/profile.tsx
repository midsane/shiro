import { Main } from '../components/main'
import { Sidebar } from '../components/sidebar'
import { OuterModal } from '../components/outerModal'

export function ProfileScreen() {

    return (
        <div className='w-screen h-screen overflow-hidden flex justify-end' >
            <OuterModal />
            <Sidebar />
            <Main />
        </div>
    )
}





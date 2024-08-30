import {Sidebar} from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return(
        <section className='flex'>
            <Sidebar />
            <main className='w-4/5 p-7 bg-custom-white'>
                <Outlet />
            </main>
        </section>
    )
}
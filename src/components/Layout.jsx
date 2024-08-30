import { HeaderSignedIn } from './Header/Header';
import {Sidebar} from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export const Layout = () => {
    const [activeTab, setActiveTab] = useState("Dashboard");

    return(
        <section className='flex'>
            <Sidebar onTabClick={setActiveTab}/>
            <main className='w-4/5 p-7 bg-custom-white'>
            <HeaderSignedIn activeTab={activeTab} />
                <Outlet />
            </main>
        </section>
    )
}
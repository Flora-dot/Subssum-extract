import { HeaderSignedIn } from './Header/Header';
import {Sidebar} from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

export const Layout = () => {
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeTab') || 'home';
      });
    
      useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
      }, [activeTab]);
    

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
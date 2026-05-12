import React from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
const App = () => {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <main className='max-w-[1120px] mx-auto px-4 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
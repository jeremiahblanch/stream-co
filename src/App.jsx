import { useCallback, useState } from 'react';
import { Navigate,  Route, Routes } from 'react-router-dom';

import Header from './page-sections/Header/Header';
import Footer from './page-sections/Footer/Footer';

import Home from './pages/Home/Home';
import Shows from './pages/Shows/ShowsPage';

import { ApiDataProvider } from './providers/ApiDataProvider';

function App() {
  const [needFreshData, setNeedFreshData] = useState(true); 
  const handleAfterFetch = useCallback(() => setNeedFreshData(false),[]);

  return (
      <>
      <ApiDataProvider
        afterFetch={handleAfterFetch}
        needFreshData={needFreshData}
      >
        <>
        <Header></Header>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Shows programType="movie"/>} />
          <Route path="/series" element={<Shows programType="series"/>} />\
        </Routes> 
        <Footer></Footer>
        </>
      </ApiDataProvider>
      </>
  )
}

export default App

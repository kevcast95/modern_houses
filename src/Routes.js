import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout';
import HousesList from './pages/HousesList'
import MapView from './pages/MapView'


function RoutesList() {
    return(
        <BrowserRouter  basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<MapView />} />
                </Routes>
                <Routes>
                    <Route path="/houses_list" element={<HousesList />} />
                </Routes>
                <Routes>
                    <Route path="/:id/house_detail" element={<MapView />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default RoutesList
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout';
import HousesList from './pages/HousesList'
import MapView from './pages/MapView'


function RoutesList() {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MapView />} />
                </Routes>
                <Routes>
                    <Route path="/cities" element={<HousesList />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default RoutesList
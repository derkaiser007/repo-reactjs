import React from "react";
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Provider } from "react-redux";
import {persistor, store} from './app/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function Layout() {
    return(
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Outlet />
        <Footer />
        </PersistGate>
        </Provider>
    )
}
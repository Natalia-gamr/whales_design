import Footer from "../footer/Footer";
import HeaderMenu from "../headerMenu/HeaderMenu";
import Spinner from "../spinner/Spinner"



import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPageHeader from "../projectPageHeader/ProjectPageHeader";

const Page404 = lazy(() => import('../pages/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Services = lazy(() => import('../pages/Services'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Brif = lazy(() => import('../pages/Brif'));
const SinglePage = lazy(() => import('../singlePage/SinglePage'));

const App = () => {

    return (
        <Router>
            <HeaderMenu exact/>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route end path='/' element={<MainPage/>}/>
                    <Route end path='/portfolio'  element={<Portfolio/>}/>
                    <Route end path='/services' element={<Services/>}/>
                    <Route end path='/about_us' element={<AboutUs/>}/>
                    <Route end path='/contacts' element={<Contacts/>}/>
                    <Route path='*' element={<Page404/>}/>
                    <Route index path='/brif/:descr' element={<Brif/>}/>
                    <Route index path='/:link' element={<ProjectPageHeader/>}/>
                    <Route path='/singlePage' element={<SinglePage/>} exact/>
                </Routes>
            </Suspense>
            <Footer/>
        </Router>
    )
}

export default App;
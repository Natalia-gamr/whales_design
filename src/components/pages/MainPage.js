import Feedback from "../feedback/Feedback";
import AboutUs from "../mainPage/aboutUs/AboutUs";
import AppHeader from "../mainPage/appHeader/AppHeader";
import Brifs from "../mainPage/brifs/Brifs";
import Clients from "../mainPage/clients/Clients";
import OurWorks from "../mainPage/ourWorks/OurWorks";


const MainPage = () => {
    return (
        <>
            <AppHeader/>
            <AboutUs/>
            <OurWorks/>
            <Brifs/>
            <Clients/>
            <Feedback/>
        </>
    )
}

export default MainPage;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { OfferPage } from '../pages/OfferPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PlaceCardType } from './PlaceCard';
import {UserContextProvider} from './UserContextProvider'
import ProtectedRoute from './ProtectedRoute';

import React from 'react';

type AppPropsType = {
    places: PlaceCardType[];
}

const App = (props: AppPropsType) => {
    const [loggedIn, setLoggedIn] = React.useState(false);


    const handleLogin = () => {
        setLoggedIn(true);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage places={props.places} />} />
                <Route path="/login" element={<LoginPage handleLogin={handleLogin}/>} />
                <Route
                    path="/favorites"
                    element={
                        <ProtectedRoute isAllowed={loggedIn}>
                        <>
                            <FavoritesPage />
                        </>
                        </ProtectedRoute>
                    }
            />
                
                <Route path="/offer/:id" element={<OfferPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
    </BrowserRouter>
      );
}

export default App;

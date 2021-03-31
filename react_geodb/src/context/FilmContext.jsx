import React, { createContext, useState, useEffect, useContext } from 'react';
import { FilmApi } from '../services/FilmApi';

const FilmContext = createContext({
});

export const FilmContextProvider = ({ children }) => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        FilmApi.getAll().then(resp => setFilms(resp?.data?.results ?? []))
    }, []);

    const value = {
        films
    }

    return (
        <FilmContext.Provider value={value}>
            {children}
        </FilmContext.Provider>
    );
}

export const useFilmsContext = () => {
    const context = useContext(FilmContext);
    if (!context) {
        throw new Error('To use FilmContext please wrap component with FilmContextProvider')
    }
    return context;
};
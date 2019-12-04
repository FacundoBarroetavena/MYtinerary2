import { FETCH_ALL_CITIES } from '../constants';

const fetchAllCities = (cities) => {
    return {
        type: FETCH_ALL_CITIES,
        cities: cities
    }
};

export const getAllTheCities = () => dispatch => {
    return fetch("/api/cities", { method: 'GET' })
        .then(response => response.json())
        .then(response => 
            dispatch(fetchAllCities(response))
        )
        .catch(err => console.log(err));
}
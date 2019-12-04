import { FETCH_SINGLE_CITY } from '../constants'

const fetchSingleCity = (city) => {
    return {
        type: FETCH_SINGLE_CITY,
        city: city
    }
};

export const getTheSingleCity = (city_name) => dispatch => {
    return fetch(`/api/cities/${city_name}`, { method: 'GET' })
    .then(response => response.json())
    .then(response => dispatch(fetchSingleCity(response))
    )
    .catch(err => console.log(err))
}
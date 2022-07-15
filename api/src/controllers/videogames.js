const axios = require('axios');
const { Videogame, Genre } = require('../db')
const { API_KEY } = process.env
const key = '04429409f80343afa0c07f8723ef54eb';

//---------------OBTENER TODOS LOS JUEGOS PARA EL HOME---------------
const getGamesApi = async () => {
    let gamesApi = [];
    for (var i = 1; i < 6; i++) {
        const apiUrl = await axios.get(`https://api.rawg.io/api/games?page=${i}&key=${key}`)
        const gApi = await apiUrl.data.results.map(({ id, name, background_image, genres }) => ({
            id,
            name,
            img: background_image,
            genres: genres.map(({ name }) => ({ name }))
        }))
        gamesApi.push(gApi);
    }
    let dataApi = gamesApi.flat();
    return dataApi;
}

const getGamesDB = async () => {
    const gamesDB = await Videogame.findAll({
        atributes: ['id', 'name', 'img'],
        include: {
            model: Genre,
            atributes: ["name"]
        }
    })
    const data = gamesDB.map(({ id, name, img, genres }) => (
        {
            id,
            name,
            img,
            genres: genres.map(({ name }) => ({ name }))
        }
    ))
    return data;
}

const getAllGames = async () => {
    const gamesApi = await getGamesApi();
    const gamesDB = await getGamesDB();
    const allGames = gamesApi.concat(gamesDB);
    return allGames;
}


module.exports = {
    getGamesApi,
    getGamesDB,
    getAllGames
}


const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

// ----------------------OBTENER DETALLES DEL JUEGO----------------------

const getGameApi = async (idGame) => {
     const apiUrl = await axios.get(`https://api.rawg.io/api/games/${idGame}?key=${API_KEY}`);
     const dataApi = [apiUrl.data];
     const gameDetails = await dataApi.map(
          ({
               id,
               name,
               background_image,
               genres,
               description_raw,
               released,
               rating_top,
               platforms,
          }) => ({
               id,
               name,
               description: description_raw,
               released,
               img: background_image,
               rating: rating_top,
               platforms: platforms.map(({ platform }) => ({ name: platform.name })),
               genres: genres.map(({ name }) => ({ name })),
          })
     );
     return gameDetails;
};

const getGameDB = async (idGame) => {
     const gameDB = await Videogame.findOne({
          where: {
               id: idGame,
          },
          include: {
               model: Genre,
               atributes: ['name'],
          },
     });
     const gameDBArray = [gameDB];
     const data = gameDBArray.map(
          ({ id, name, description, released, img, rating, platforms, genres }) => ({
               id,
               name,
               description,
               released,
               img,
               rating,
               platforms,
               genres: genres.map(({ name }) => ({ name })),
          })
     );
     return data;
};

const getById = async (idGame) => {
     try {
          const gameApi = await getGameApi(idGame);
          return gameApi;
     } catch (error) {
          console.log('no esta en la API');
     }
     try {
          const gameDB = await getGameDB(idGame);
          return gameDB;
     } catch (error) {
          console.log('no esta en la DB');
     }
};

module.exports = {
     getById,
};

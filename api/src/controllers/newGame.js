const { Videogame, Genre } = require('../db');

const newGame = async (name, description, released, img, rating, platforms, genres) => {
     const newGame = await Videogame.create({
          name,
          description,
          released,
          img: img ? img : 'https://i.ebayimg.com/images/g/RPcAAOSwENxXme1D/s-l400.jpg',
          rating,
          platforms: platforms,
     });
     genres.map(async ({ name }) => {
          const findGenre = await Genre.findAll({
               where: { name: name },
          });
          newGame.addGenre(findGenre);
     });
};

module.exports = {
     newGame,
};

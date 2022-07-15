const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
     // defino el modelo
     sequelize.define(
          'videogame',
          {
               id: {
                    type: DataTypes.UUID, // No puede ser un ID de un videojuego ya existente en la API rawg
                    primaryKey: true,
                    unique: true,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
               },

               name: {
                    type: DataTypes.STRING,
                    allowNull: false,
               },

               description: {
                    type: DataTypes.STRING, //acepta hasta 257 caracteres
                    allowNull: false,
               },

               released: {
                    //Fecha de lanzamiento
                    type: DataTypes.STRING,
               },

               img: {
                    type: DataTypes.STRING,
               },

               rating: {
                    type: DataTypes.INTEGER,
               },

               platforms: {
                    type: DataTypes.ARRAY(DataTypes.STRING),
                    allowNull: false,
               },
          },
          {
               timestamps: false,
          }
     );
};

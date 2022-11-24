import Sequelize, { Model } from 'sequelize';

export default class Book extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      cover: Sequelize.STRING,
      synopsis: Sequelize.TEXT,
      authorId: Sequelize.INTEGER,
      genreId: Sequelize.INTEGER,
      editorId: Sequelize.INTEGER,
      pages: Sequelize.INTEGER,
      active: Sequelize.BOOLEAN,
    }, { sequelize });
    return this;
  }
}

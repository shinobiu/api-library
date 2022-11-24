/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'books',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cover: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        synopsis: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        author_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        genre_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        editor_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        pages: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('books');
  },
};

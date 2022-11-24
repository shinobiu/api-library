import Book from '../models/Book';

class HomeController {
  async index(req, res) {
    const newBook = await Book.create({
      name: 'New Book',
      cover: 'link here',
      synopsis: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      authorId: 0,
      genreId: 0,
      editorId: 0,
      pages: 0,
      active: true,
    });
    res.json({
      newBook,
    });
  }
}

export default new HomeController();

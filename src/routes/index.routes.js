const Router = require('@koa/router');
const { renderTask, renderAbout } = require('../controllers/task.controller');
// const { savedMovie, getMovie, getMovies,  } = require('../controllers/movie.controller');
const { createInbox, viewEmail, emailContent, linkMega } = require('../controllers/mail.controller');

const router = Router();

router.get('/', renderTask);

// router.get('/about', renderAbout);
// router.post('/movie', savedMovie);
// router.get('/movies', getMovies);
// router.get('/movie/:id', getMovie);

router.get('/createInbox/:key', createInbox);
router.get('/viewEmail/:id/:apikey', viewEmail);
router.get('/email-content/:id/:apikey', emailContent);
router.get('/mega', linkMega);



module.exports = router;

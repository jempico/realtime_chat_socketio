const router = require('express').Router();
const {checkAuth, checkGuest} = require('../../middleware/googleAuth')
const indexController = require('../controllers/index');

// @desc    Login/landing page
// @route   GET/
router.get('/login', checkGuest, indexController.logIn)

// @desc    Dashboard
// @route   GET/
router.get('/dashboard', checkAuth, indexController.dashboard)

// @desc    Logout
// @route   GET/
router.get('/logout', indexController.logout)

// @desc    Login/landing page
// @route   POST/
router.post('/login', indexController.verifyLogin)

// @desc    Join Chat
// @route   Get/
router.get('/index', checkAuth, indexController.joinChat)

// @desc    Chat
// @route   Get/
router.get('/chat', checkAuth, indexController.chat)

// @desc    Create new room
// @route   get/
router.get('/newRoom', checkAuth, indexController.newRoom)

// @desc    Rooms Dashboard
// @route   get/
router.get('/rooms', checkAuth, indexController.rooms)


module.exports = router;

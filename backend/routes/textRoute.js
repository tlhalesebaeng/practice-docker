import express from 'express';
import {
    addText,
    deleteText,
    getAllTexts,
    updateText,
} from '../controllers/textController.js';

// create an express route instance
const textRoute = express.Router();

// handle api/text post requests with addText controller
textRoute.post('/', addText);

// handle api/text get requests with getAllTexts controller
textRoute.get('/', getAllTexts);

 // handle api/text/textId patch requests with updateText controller
textRoute.patch('/:textId', updateText);

// handle api/text/textId delete requests with deleteText controller
textRoute.delete('/:textId', deleteText);

// make the text route instance accessible
export default textRoute;

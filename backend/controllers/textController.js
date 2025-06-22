import Text from '../models/textModel.js';

// function to get all the texts on the database
export const getAllTexts = async (req, res) => {
    // get all the texts using the model
    const texts = await Text.find({});

    // respond with all the texts and an OK status code
    res.status(200).json({ texts });
};

// function to add a text to the database
export const addText = async (req, res) => {
    // verify that the value is provided in the request body
    if (!req.body || !req.body.value) {
        return res.json({ message: 'Text required! Please provide a text' });
    }

    // get the text from the request body
    const text = req.body.value;

    // create a new text using the Text model
    const newText = await Text.create({ value: text });

    // respond with the newly created text and the CREATED status code
    res.status(201).json({ text: newText });
};

// function to update an existing database text
export const updateText = async (req, res) => {
    // verify that the textId param was provided
    if (!req.params || !req.params.textId) {
        return res.json({
            message: 'Text ID required! Please provide a text ID',
        });
    }

    // verify that the text value is provided in the request body
    if (!req.body || !req.body.value) {
        return res.json({ message: 'Text required! Please provide a text' });
    }

    // get the text value from the request body
    const textValue = req.body.value;

    // get the text id from the request paramaters
    const textId = req.params.textId;

    // find the text by the provided id and set its value to be the provided text value
    // we can only ever update the text value
    const newText = await Text.findByIdAndUpdate(
        textId,
        { value: textValue },
        { new: true }
    );

    // respond with the newly updated text and the OK status code
    res.status(200).json({ text: newText });
};

// function to remove a text from the database
export const deleteText = async (req, res) => {
    // verify that the textId param was provided
    if (!req.params || !req.params.textId) {
        return res.json({
            message: 'Text ID required! Please provide a text ID',
        });
    }

    // get the text id from the request parameters
    const textId = req.params.textId;

    // delete the text usind the text id
    await Text.findByIdAndDelete(textId);

    // respond with an empty object and a NO CONTENT status code
    res.status(204).json({});
};

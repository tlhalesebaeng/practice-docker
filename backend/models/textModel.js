import { Schema, model } from 'mongoose';

// create the text schema
const textSchema = new Schema(
    {
        value: {
            type: String,
            required: [true, 'Value required! Please provide a text value.'],
        },
    },
    { timestamps: true }
);

// create the text model using the textschema
const Text = model('Text', textSchema);

// make the model available
export default Text;

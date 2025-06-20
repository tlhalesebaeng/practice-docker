import { useState } from 'react';
import './TextItem.css';

const TextItem = ({ text, onDelete, onUpdate }) => {
    const [type, setType] = useState('show'); // holds the type of the displayed text
    const [textValue, setTextValue] = useState(text.value);

    const created = new Date(text.createdAt).toDateString();

    const handleChangeType = () => {
        setType((prevType) => (prevType === 'show' ? 'edit' : 'show'));
    };

    return (
        <li>
            {type === 'show' && <p className="value">{textValue}</p>}
            {type === 'edit' && (
                <input
                    onChange={(event) => setTextValue(event.target.value)}
                    value={textValue}
                    type="text"
                    className="edit-value"
                />
            )}
            <section className="details">
                <p>{created}</p>
            </section>
            <section className="actions">
                {type === 'edit' && (
                    <button
                        onClick={() => {
                            onUpdate(textValue);
                            handleChangeType();
                        }}
                    >
                        save
                    </button>
                )}
                {type !== 'edit' && (
                    <button onClick={handleChangeType}>edit</button>
                )}
                <button onClick={onDelete}>delete</button>
            </section>
        </li>
    );
};

export default TextItem;

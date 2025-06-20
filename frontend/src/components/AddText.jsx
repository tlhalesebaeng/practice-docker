import { useRef } from 'react';
import './AddText.css';

const AddText = ({ onAdd, isLoading, error }) => {
    const textRef = useRef();

    return (
        <section className="add-text">
            <textarea ref={textRef} />
            {error && <p>{error}</p>}
            <div>
                <button
                    onClick={() => {
                        onAdd(textRef.current.value);
                        textRef.current.value = '';
                    }}
                >
                    {isLoading ? 'Loading...' : 'Add'}
                </button>
            </div>
        </section>
    );
};

export default AddText;

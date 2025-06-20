import { useState } from 'react';
import TextList from './components/TextList.jsx';
import AddText from './components/AddText.jsx';
import './App.css';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAddText = async (textValue) => {
        if (textValue) {
            const url = 'http://localhost:3000/api/texts';
            try {
                setLoading(true);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ value: textValue }),
                });
                setLoading(false);

                if (!response.ok) {
                    return setError('Could not add text');
                }
            } catch (error) {
                setError('An error occurred!');
                console.error(error.message);
            }
        }
    };

    return (
        <main>
            <AddText onAdd={handleAddText} isLoading={loading} error={error} />
            <TextList />
        </main>
    );
};

export default App;

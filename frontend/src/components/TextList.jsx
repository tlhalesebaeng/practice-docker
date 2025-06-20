import { useEffect, useState } from 'react';
import TextItem from './TextItem';
import './TextList.css';

const TextList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getData = async () => {
        const url = 'http://localhost:3000/api/texts';
        try {
            setLoading(true);
            const response = await fetch(url);
            setLoading(false);

            if (!response.ok) {
                return setError('Could not fetch texts');
            }

            const json = await response.json();
            setData(json.texts);
        } catch (error) {
            setError('An error occurred!');
            console.error(error.message);
        }
    };

    // get all the texts
    useEffect(() => {
        getData();
    }, []);

    const handleDelete = async (id) => {
        const url = `http://localhost:3000/api/texts/${id}`;
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'DELETE',
            });
            setLoading(false);

            if (!response.ok) {
                return setError('Could not delete text');
            }

            getData();
        } catch (error) {
            setError('An error occurred!');
            console.error(error.message);
        }
    };

    const handleUpdate = async (id, value) => {
        const url = `http://localhost:3000/api/texts/${id}`;
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value }),
            });
            setLoading(false);

            if (!response.ok) {
                return setError('Could not update text');
            }

            getData();
        } catch (error) {
            setError('An error occurred!');
            console.error(error.message);
        }
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    return (
        <ul>
            {data.map((text) => (
                <TextItem
                    key={text._id}
                    text={text}
                    onDelete={() => handleDelete(text._id)}
                    onUpdate={(value) => handleUpdate(text._id, value)}
                />
            ))}
        </ul>
    );
};

export default TextList;

import React, { useState, useEffect } from 'react';
import Row from './componentes/Row';
import categories from './Tmdb';
import Banner from './componentes/Banner';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulando um carregamento assíncrono, substitua pelo código real
        const fetchData = async () => {
            // Simule o tempo de carregamento com setTimeout
            setTimeout(() => {
                setLoading(false);
            }, 2000); // Defina o tempo desejado
        };

        fetchData();
    }, []);

    return (
        <div className="app">
            <Banner />
            {loading ? (
                <div className="loading">
                    <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando" />
                </div>
            ) : (
                categories.map((category) => (
                    <Row
                        key={category.name}
                        title={category.title}
                        path={category.path}
                        isLarge={category.isLarge}
                    />
                ))
            )}
        </div>
    );
}

export default App;





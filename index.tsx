import { useState } from 'preact/hooks';
import { Header } from './components/Header';

export const App = () => {
    const [username, setUsername] = useState('');
    
    return (
        <>
            <Header />
            <div>
                <p>LastFM username: </p>
                <label>
                    <input 
                        value={username} 
                        onChange={e => setUsername(e.currentTarget.value)} 
                    />
                    <button>Generate</button>
                </label>
            </div>
            <div>
                <p>Output:</p>
            </div>
        </>
    );
}

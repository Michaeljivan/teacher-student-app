import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/App.css';

const Home: React.FC = () => {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.tsx</code> and save to reload.
            </p>
            
            <Link className="App-link" to="/login">Login Portal</Link>
            <Link className="App-link" to="/teacher-admin">Teacher Admin</Link>
            <Link className="App-link" to="/homework">Homework</Link>
        </header>
    </div>
    );
};

export default Home;

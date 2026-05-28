import { Link } from "react-router-dom";
import '../../styles/App.css';

const Homework: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">Homework Page
                <Link className="App-link" to="/teacher-admin">Teacher Admin</Link>
                <Link className="App-link" to="/">Home</Link>
            </header>
        </div>
    );
};

export default Homework;
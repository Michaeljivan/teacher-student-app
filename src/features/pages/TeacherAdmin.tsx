import { Link } from "react-router-dom";

const TeacherAdmin: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">Teacher Admin Page
                <Link className="App-link" to="/homework">Homework</Link>
                <Link className="App-link" to="/">Home</Link>
            </header>
        </div>
    );
};

export default TeacherAdmin;
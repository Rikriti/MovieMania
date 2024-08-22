import '../css/Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
     <div className="title">MovieMania</div>
     <div className="subtitle">Discover, Watch, Repeat</div>
     <Link to="/dashboard" className="login">
        Login with Google <i className="fab fa-google google-icon"></i> 
      </Link>
    </div>
  );
}

export default Login;
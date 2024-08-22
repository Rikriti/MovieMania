import '../css/Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
    <nav className="header">
      <div className="title">MovieMania</div>
      <nav className="nav-menu">
        <a href="#favorites" className="nav-link">My Favorites</a>
        <a href="#watchlist" className="nav-link">Watchlist</a>
        <a href="#genre" className="nav-link">Genre</a>
      </nav>
      <input
        className="search-bar"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </nav>
    <div className="welcome">Welcome, User</div>
  </div>
  );
}

export default Dashboard;
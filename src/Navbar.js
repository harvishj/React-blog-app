import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/"><h1>Blog App</h1></Link>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={
                {
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }
            }>New Blog</Link>
        </div>

    </nav>
  );
}

export default Navbar;

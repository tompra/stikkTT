import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='nav-container'>
            <div className='nav-center'>
                <h3 className='logo'>Stickithom</h3>

                <button className='hamburger' onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </button>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to={'/'} className='nav-link'>
                        Home
                    </Link>
                    <Link to={'/collections'} className='nav-link'>
                        Collections
                    </Link>
                    <Link to={'/contact'} className='nav-link'>
                        Contact
                    </Link>
                    <Link to={'/aftercare'} className='nav-link'>
                        After Care
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;

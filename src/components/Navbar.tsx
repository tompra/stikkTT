import { useState } from 'react';

const Navbar: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='nav-container'>
            <div className='nav-center'>
                <h3 className='logo'>Stickithom</h3>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <button className='hamburger' onClick={toggleMenu}>
                        {isOpen ? '✕' : '☰'}
                    </button>
                    <a className='nav-link'>Home</a>
                    <a className='nav-link'>Collection</a>
                    <a className='nav-link'>Contact</a>
                    <a className='nav-link'>After Care</a>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;

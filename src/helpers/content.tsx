import logo from '../assets/me.jpg';
export const pagesContent = {
    home: {
        leftSidebar: (
            <h3 style={{ color: 'greenyellow' }}>Left Side Bar in Object</h3>
        ),
        rightSidebar: (
            <h3 style={{ color: 'red' }}>Right Side Bar in Object</h3>
        ),
        headerContent: 'Helloooooo',
        mainContent: (
            <>
                <img src={logo} alt='Me' style={{ width: '200px' }} />
            </>
        ),
        footerContent: 'Byeee',
    },
};

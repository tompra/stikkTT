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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src={logo}
                    alt='Me'
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        margin: '0 auto',
                    }}
                />
            </div>
        ),
        footerContent: 'Byeee',
    },
    contact: {
        leftSidebar: (
            <h3 style={{ color: 'greenyellow' }}>Left Side Bar in Object</h3>
        ),
        rightSidebar: (
            <h3 style={{ color: 'red' }}>Right Side Bar in Object</h3>
        ),
        headerContent: 'SAY HELLO ━━━━━━━━━━━━ TO ',
        mainContent: (
            <>
                <h1>For getting some ink, you can contact me </h1>
            </>
        ),
        footerContent: 'STICKITHOM',
    },
};

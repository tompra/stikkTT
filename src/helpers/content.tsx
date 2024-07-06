import logo from '../assets/me.jpg';

const contentFooter = (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 1.2rem',
        }}
    >
        <h2>I'M ━━━━━━━━━━━━━━━━━━━━━━</h2>
        <h2>STICKITHOM</h2>
    </div>
);

export const pagesContent = {
    home: {
        leftSidebar: (
            <>
                <h4>[ABOUT]</h4>
                <p>
                    Having started handpoke tattoos four years ago, I've
                    remained true to this art form. It all began with a simple
                    desire for getting ink, leading to tattoo myself and then
                    friends, and eventually other who trust in my work
                </p>
                <p>
                    My love for design and drawing has been a lifelong journey,
                    and now, I'm excited to share my updated creations with the
                    world. Venturing into the realm of new technologies, I'm
                    eager to showcase my collections and explore innovative ways
                    to express myself.
                </p>
                <p>
                    If you' re interested in collaborating or bringing a vision
                    to life together. I'm always open to new ides. Don't
                    hesitate to reach out. I'm just a message away!
                </p>
            </>
        ),
        rightSidebar: (
            <>
                <h4>[WHO]</h4>
                <p>
                    {' '}
                    My name is Thomas. You can take a look at my portfolio and
                    have a wonderful time exploring my designs
                </p>
                <h4>[WHAT]</h4>
                <p>
                    A handpoke tattoo artist and web developer. Over the past
                    year, I've been creating, working in my home studio.
                    Recently I've discovered a new passion of mine for coding,
                    channeling my creativity into crafting unique designs for
                    your skin.
                </p>
            </>
        ),
        headerContent: <h2>HI THERE, THANK YOU FOR BEING HERE</h2>,
        mainContent: (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={logo}
                    alt='Me'
                    style={{
                        width: '46%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        footerContent: contentFooter,
    },
    contact: {
        leftSidebar: (
            <h3 style={{ color: 'greenyellow' }}>Left Side Bar in Object</h3>
        ),
        rightSidebar: (
            <h3 style={{ color: 'red' }}>Right Side Bar in Object</h3>
        ),
        headerContent: <h2>FOR GETTING SOME INK, CONTACT ME ;)</h2>,
        mainContent: (
            <>
                <h1>For getting some ink, you can contact me </h1>
            </>
        ),
        footerContent: contentFooter,
    },
};

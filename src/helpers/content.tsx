import logo from '../assets/me.jpg';
import footerContent from '../assets/footerContent.png';
import headerContent from '../assets/headerContent.png';
import img0 from '../assets/img0.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const images = [img0, img1, img2, img3];

const contentFooter = (
    <div className='content-footer'>
        <img
            src={footerContent}
            alt='Footer Text'
            className='content--img__text'
        />
    </div>
);

export const pagesContent = {
    home: {
        leftSidebar: (
            <>
                <h4>[ABOUT]</h4>
                <br />

                <p>
                    Having started handpoke tattoos four years ago, I've
                    remained true to this art form. It all began with a simple
                    desire for getting ink, leading to tattoo myself and then
                    friends, and eventually other who trust in my work
                </p>
                <br />
                <p>
                    My love for design and drawing has been a lifelong journey,
                    and now, I'm excited to share my updated creations with the
                    world. Venturing into the realm of new technologies, I'm
                    eager to showcase my collections and explore innovative ways
                    to express myself.
                </p>
                <br />

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
                <br />

                <p>
                    {' '}
                    My name is Thomas. You can take a look at my portfolio and
                    have a wonderful time exploring my designs
                </p>
                <br />

                <h4>[WHAT]</h4>
                <br />

                <p>
                    A handpoke tattoo artist and web developer. Over the past
                    year, I've been creating, working in my home studio.
                    Recently I've discovered a new passion of mine for coding,
                    channeling my creativity into crafting unique designs for
                    your skin.
                </p>
            </>
        ),
        headerContent: (
            <div className='content-header'>
                <img
                    src={headerContent}
                    alt='Header text'
                    className='content--img__text'
                />
            </div>
        ),
        mainContent: (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <img
                    src={logo}
                    alt='Me'
                    style={{
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        ),
        footerContent: contentFooter,
    },
    contact: {
        leftSidebar: (
            <>
                <h3>Do you want to get a tattoo?</h3>
                <p>
                    Initial consultation: send me an email to{' '}
                    <a href='mailto: tomprayon@gmail.com'>
                        tomprayon@gmail.com
                    </a>{' '}
                    so we can discuss the tattoo idea. We can tke this
                    opportunity to understand your vision preferences and any
                    specific details that you have in mind. Important
                    information that you should include: placement, size, style
                    and elements. In case, you have references please send them
                    attached to the email.
                </p>
                <h3>Design Concept</h3>
                <p>
                    Based on the first consultation, I would create a design
                    concept and proposal for the tattoo. I would send sketches,
                    references images or digital mockups to visualize the
                    design.
                </p>
                <h3>Feedback and Revision</h3>
                <p>
                    After sending the design concept, I would ask some feedback.
                    After the consulate feedback I would created modifications
                    on the design until you are satisfied and approved the final
                    version.
                </p>
            </>
        ),
        rightSidebar: (
            <>
                <h3>Booking and Deposit</h3>
                <p>
                    Once the design is approved, we discuss scheduling and
                    booking details with you. To secure the appointment I will
                    ask for a small deposit and for covering the design creation
                    process. In case of cancelation or rescheduling the deposit
                    would not be refundable
                </p>
                <h3>Tattoo Session Day</h3>
                <p>
                    Before jumping on tattoing we can review together any
                    last-minute detail to meet your expectations. Then we go
                    all-in for the tattoo session. Always we open for any
                    concerns or questions you may have.
                </p>
                <h3>Follow up</h3>
                <p>
                    If it's okay with you, after the tattoo healed I will ask
                    you for a photo. Checking the healing progress and if you
                    may have any future tattoo ideas.
                </p>
            </>
        ),
        headerContent: <h2>FOR GETTING SOME INK, CONTACT ME ;)</h2>,
        mainContent: (
            <>
                <h1>For getting some ink, you can contact me </h1>
            </>
        ),
        footerContent: contentFooter,
    },
    collection: {
        leftSidebar: (
            <>
                <h2>[COLLECTION]</h2>
                <div>
                    <h4>Designs made</h4>
                    <h5>20</h5>
                </div>
                <div>
                    <h3>Click to see more details</h3>
                </div>
                <div>
                    <h3>[TOOLS]</h3>
                    <ul>
                        <li>Procreate</li>
                        <li>Photoshop</li>
                        <li>Pencil & Paper</li>
                    </ul>
                </div>
            </>
        ),
        rightSidebar: (
            <>
                <h3>Information about the clicked image</h3>
            </>
        ),
        headerContent: (
            <div className='content-header'>
                <img
                    src={headerContent}
                    alt='Header text'
                    className='content--img__text'
                />
            </div>
        ),
        mainContent: (
            <div className='content-collection'>
                {images.map((img, idx) => (
                    <img src={img} alt={`Image Collection ${idx}`} key={idx} />
                ))}
            </div>
        ),
        footerContent: contentFooter,
    },
};

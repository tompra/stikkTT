import logo from '../assets/me.jpg';
import footerContent from '../assets/footerContent.png';
import headerContent from '../assets/headerContent.png';
import img0 from '../assets/img0.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import GifContact from '../components/GifContact';

const images = [img0, img1, img2, img3];

const contentHeader = (
    <div className='content-header'>
        <img
            src={headerContent}
            alt='Header text'
            className='content--img__text'
        />
    </div>
);

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
        headerContent: contentHeader,
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
        headerContent: contentHeader,
        mainContent: <GifContact />,
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
        headerContent: contentHeader,
        mainContent: (
            <div className='content-collection'>
                {images.map((img, idx) => (
                    <img src={img} alt={`Image Collection ${idx}`} key={idx} />
                ))}
            </div>
        ),
        footerContent: contentFooter,
    },
    aftercare: {
        leftSidebar: (
            <>
                <h3>Pre-Tattoo Preparation</h3>
                <ol>
                    <li>
                        <b>Hydration:</b> Drink plenty of water in the days
                        leading up your tattoo appointment. Well-hydrated skin
                        is more resilient and accepts ink better.
                    </li>
                    <li>
                        <b>Avoid Alcohol and Caffeine:</b> These can thin your
                        blood and make the tattoing process more difficult.
                    </li>
                    <li>
                        <b>Moisture:</b> Regularly moisturize the area to be
                        tattooed for a week before your appointment, but avoid
                        using lotions on the day of the session.
                    </li>
                    <li>
                        <b>Rest:</b> Ensure you get good night sleep before your
                        appointment to be relaxed and patient during the
                        session.
                    </li>
                </ol>
                <h3>Important Reminds for Customers</h3>
                <ol>
                    <li>
                        <b>Patience is key:</b>Healing times vary from person to
                        person. Typically, a tattoo takes about 2-4 weeks to
                        heal on the surface, with deeper layers taking up to 3
                        months.
                    </li>
                    <li>
                        <b>Stay healthy:</b>Maintain a healthy lifestyle to
                        support your body's natural healing processes.
                    </li>
                    <li>
                        <b>Communicate:</b>If you experience any unusual
                        symptoms or have concerns during the healing process,
                        don't hesitate to reach out to your tattoo artist or a
                        healthcare professional.
                    </li>
                </ol>
            </>
        ),
        rightSidebar: (
            <>
                <h3>Long-Term Aftercare</h3>
                <ol>
                    <li>
                        Hydrate and Moisturize:
                        <ul>
                            <li>
                                Keep your skin hydrated by drinking water and
                                regularly moisturizing the tattooed area, even
                                after it's fully healed.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Sun Protection:
                        <ul>
                            <li>
                                Continue to protect your tattoo from sun
                                exposure with sunscreen to prevent fadin.g
                            </li>
                        </ul>
                    </li>
                    <li>
                        Avoid Harsh Chemicals:
                        <ul>
                            <li>
                                Be mindful of using harsh chemical products on
                                your tattoo. This includes certain exfoliants
                                and strong scented lotions.
                            </li>
                        </ul>
                    </li>
                </ol>

                <h3>Common Concerns and Solutions</h3>

                <ol>
                    <li>
                        Infection:
                        <ul>
                            <li>
                                Signs: Redness extending beyond the tattoo,
                                excessive swelling, pus, or a fever.
                            </li>
                            <li>
                                Action: Consult a healthcare professional
                                immediately.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Allergic Reactions:
                        <ul>
                            <li>
                                Signs: Persistent redness, itching, or rashes.
                            </li>
                            <li>
                                Action: Contact your tattoo artist and a
                                healthcare professional. You might be allergic
                                to the ink or aftercare products.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Touch-ups:
                        <ul>
                            <li>
                                Over time, tattoos may fade or lose some of
                                their detail.
                            </li>
                            <li>
                                Consult your tattoo artist for touch ups. If you
                                need a touch-up we can arrange for it.{' '}
                            </li>
                        </ul>
                    </li>
                </ol>
            </>
        ),
        headerContent: contentHeader,
        mainContent: (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h3>Immediate Aftercare - First Few Days</h3>
                <ol>
                    <li>
                        Initial Bandage:
                        <ul>
                            <li>
                                After applied protective bandage, leave it on
                                for a few hours (2 to 4 hours)
                            </li>
                            <li>
                                If using a medical adhesive bandage, remove
                                timing should be 24 to 72hs.
                            </li>
                        </ul>
                    </li>
                    <li>
                        First Wash:
                        <ul>
                            <li>Wash your hands.</li>
                            <li>Remove the bandage gently.</li>
                            <li>
                                Use lukewarm water and mild, unscented soap to
                                gently wash off the plasma, blood and ink. Avoid
                                scrubbing.
                            </li>
                            <li>
                                Pat the area dry with a clean paper towel or let
                                it air dry. Do not use cloth towels as they can
                                harbor bacteria.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Moisturize:
                        <ul>
                            <li>
                                Apply a thin layer of a tattoo aftercare
                                ointment or fragrance-free moiusturizer.
                            </li>
                            <li>
                                Do this 2-3 times a day for the first few days
                                until the tattoo starts to dry out.
                            </li>
                        </ul>
                    </li>
                </ol>
                <h3>Intermediate Care (First 2-3 Weeks)</h3>
                <ol>
                    <li>
                        Keep it clean:
                        <ul>
                            <li>
                                Wash the tattoo gently with mild soap and water
                                twice a day.
                            </li>
                            <li>
                                Avoid soaking the tattoo in water. Showers are
                                fine, but avoid baths, swimming pools, hot tubs,
                                and ocean water.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Moisturize Regularly:
                        <ul>
                            <li>
                                After washing, apply a fragrance-free
                                moisturizer to keep the skin hydrated.
                            </li>
                            <li>
                                Do not over-moisturize. A thin layer is
                                sufficient to keep the tattoo from drying out.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Avoid Sun Exposure:
                        <ul>
                            <li>
                                Keep your tattoo out of direct sunlight. UV rays
                                can damage the healing skin and fade the tattoo.
                            </li>
                            <li>
                                After the tattoo has fully healed, always use
                                high SPF sunscreen when exposed to the sun.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Clothing:
                        <ul>
                            <li>
                                Wear loose-fitting, clean clothing over the
                                tattooed area to avoid irritation and allow your
                                skin to breathe
                            </li>
                        </ul>
                    </li>
                    <li>
                        Do NOT Pick or Scratch:
                        <ul>
                            <li>
                                As your tattoo heals, it will start to scab and
                                peel. This is normal.
                            </li>
                            <li>
                                Do not pick at the scabs or scratch the peeling
                                skin.
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        ),
        footerContent: contentFooter,
    },
};

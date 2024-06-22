const Footer: React.FC = (): JSX.Element => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer-container'>
            <div>
                <p>[IG] -- @stikkTT</p>
                <p>[GM] -- stickithom@gmail.com</p>
            </div>
            <div>
                <p>Copyright -- {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};
export default Footer;

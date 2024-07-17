import { useEffect, useState } from 'react';
import Loading from './Loading';

const GifContact: React.FC = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tenor.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        const handleLoad = () => {
            setIsLoading(false);
        };
        script.addEventListener('load', handleLoad);

        return () => {
            document.body.removeChild(script);
            script.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div
                    className='tenor-gif-embed'
                    data-postid='25123844'
                    data-share-method='host'
                    data-aspect-ratio='1.78771'
                    data-width='100%'
                >
                    <a href='https://tenor.com/view/anime-gif-25123844'>
                        Anime GIF
                    </a>{' '}
                    from{' '}
                    <a href='https://tenor.com/search/anime-gifs'>Anime GIFs</a>
                </div>
            )}
        </>
    );
};
export default GifContact;

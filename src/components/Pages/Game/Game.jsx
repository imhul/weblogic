import { memo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import axios from 'axios';
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import translate from '../../../utils/translations';
import { GITHUB_README } from '../../../utils/config';
// components
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';
// assets
const gameLogoUrl = new URL('../../../images/chicken-hell-logo.png', import.meta.url).href;
// styles
import "github-markdown-css/github-markdown.css"

const Game = memo(() => {
    const [readme, setReadme] = useState('');
    const { safe, lang } = useSelector(s => s.ui);
    const title = translate(lang, 'game_title');

    useEffect(() => {
        const getReadme = async () => {
            const response = await axios.get(GITHUB_README);
            const text = response.data;
            setReadme(text);
        }

        getReadme();
    }, []);

    return (<>
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={safe.base} />
        </Helmet>
        <div className="Game">
            <div className="container">
                <img src={gameLogoUrl} alt="Chicken Hell Logo" width="400" className="game-logo" />
                <div className="preview-wrapper markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {readme}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    </>);
});

export default Game;

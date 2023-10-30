import React, { useContext, useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { Api } from '../../App';
import Loader from './Loader';

function ContentContainer() {

    let { url, cat, qu } = useContext(Api)
    let [article, setarticle] = useState([])
    let [loader, setLoader] = useState(true)

    useEffect(() => {
        fetchfunc(url)
    }, [url, cat, qu])

    let fetchfunc = (URL) => {
        
        setLoader(true)
        fetch(URL)
            .then(res => res.json())
            .then((deta) => {
                setarticle(deta.articles)
                        setLoader(false)
            })
    }

    return (
        <>
            <div className='content-container m-0 p-0 py-lg-3 px-lg-3 px-md-1 row'>
                {article && article.map((e, i) => {
                    if (!loader) {
                        return <NewsCard key={i} img={e.urlToImage == null ? `http://source.unsplash.com/random1` : e.urlToImage} title={e.title}
                            body={typeof (e.content) == 'string' ? e.description + e.content.slice(0, e.content.length - 13) : e.description}
                            url={e.url} sourceName={e.source.name} publishedAt={e.publishedAt.slice(0, 10)} />
                    } else if (loader && i == 1) {
                        return <Loader />
                    }
                })}
            </div>
        </>
    );
}

export default ContentContainer;
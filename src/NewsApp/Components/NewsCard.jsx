import React from 'react';

function NewsCard(props) {

    return (

        <>
            <div className="col-lg-4 col-md-6 my-4 px-4 px-md-3 mx-0 card-parent">
                <div className="news-card">
                    <div className="news-card-image">
                        <img src={props.img} />
                    </div>
                    <div className="news-card-content px-3 py-2">
                        <h2> {props.title}
                        </h2>
                        <p> {props.body} </p>
                        <div className="news-card-source">
                            <p>
                                Source :  <a href={props.url} target="_blank" rel="noopener noreferrer">  {props.sourceName}</a>
                            </p>
                        </div>
                        <div className="news-card-date">
                            <p>Date Published :  {props.publishedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default NewsCard;
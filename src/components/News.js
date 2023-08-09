import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types'


class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Irish singer Sinéad O'Connor dies aged 56 - BBC",
            "description": "The Nothing Compares 2 U singer sold millions of albums and was praised for her activism.",
            "url": "https://www.bbc.com/news/entertainment-arts-66318626",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5C78/production/_130527632_gettyimages-80298906copy.jpg",
            "publishedAt": "2023-07-26T18:34:14Z",
            "content": "Irish singer and activist Sinéad O'Connor has died at the age of 56. \r\nIn a statement, the singer's family said: \"It is with great sadness that we announce the passing of our beloved Sinéad. \r\n\"Her f… [+3152 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rottentomatoes.com"
            },
            "author": "Debbie Day",
            "title": "Twisted Metal First Reviews: 'Scrappy,' 'Blood-Soaked Blast,' Critics Say - Rotten Tomatoes",
            "description": "The high-octane comedy series stars Anthony Mackie, Stephanie Beatriz, and Joe Seanoa, with Will Arnett and Thomas Haden Church.",
            "url": "https://editorial.rottentomatoes.com/article/twisted-metal-first-reviews/",
            "urlToImage": "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/07/25141926/twisted-metal-key-art-600x314-1.jpg",
            "publishedAt": "2023-07-26T18:33:45Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Carolina Mandl",
            "title": "U.S. stocks have muted reaction following a Fed rate hike - Reuters",
            "description": "U.S. stocks were fairly subdued on Wednesday following a Federal Reserve rate hike that pushed borrowing costs to their highest since the global financial crisis.",
            "url": "https://www.reuters.com/markets/us/nasdaq-futures-slip-big-tech-results-roll-fed-focus-2023-07-26/",
            "urlToImage": "https://www.reuters.com/resizer/uuGPPjP_Fliq4G9tw4FxDVn23m4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5EOB7DOJNRPNVHEO6AJ4NWVMSQ.jpg",
            "publishedAt": "2023-07-26T18:26:00Z",
            "content": "July 26 (Reuters) - U.S. stocks were fairly subdued on Wednesday following a Federal Reserve rate hike that pushed borrowing costs to their highest since the global financial crisis.\r\nThe Fed lifted … [+973 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Barbie Latza Nadeau, Hamdi Alkhshali, Martin Goillandeau, Isa Soares, Sugam Pokharel, Elinda Labropoulou, Chris Liakos, Hande Atay Alam, Laura Paddison",
            "title": "Couple burned to death at home as toll mounts from Mediterranean wildfires - CNN",
            "description": "Two elderly people found burned to death in their home in Italy are among at least 40 people killed as wildfires rage across huge swaths of the Mediterranean.",
            "url": "https://www.cnn.com/2023/07/26/world/wildfires-mediterranean-italy-greece-algeria-climate-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230726103927-08-mediterranean-wildfires-0725-greece-rhodes.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-07-26T18:16:00Z",
            "content": "Two elderly people found burned to death in their home in Italy are among at least 40 people killed as wildfires rage across huge swaths of the Mediterranean. \r\nCountries including Italy, Greece and … [+5782 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "BRIAN MELLEY",
            "title": "London jury acquits Kevin Spacey of sexual assault charges on his birthday - The Associated Press",
            "description": "A London jury has acquitted Kevin Spacey on sexual assault charges stemming from allegations by four men dating back 20 years. Jurors returned their verdicts Wednesday in Southwark Crown Court after deliberating over three days. Three men accused the Oscar wi…",
            "url": "https://apnews.com/article/kevin-spacey-sexual-assault-trial-london-jury-deliberations-85cb3957c60de1a7b1e03a26dc278d95",
            "urlToImage": "https://dims.apnews.com/dims4/default/d00e55b/2147483647/strip/true/crop/5070x2852+0+264/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F02%2F3d%2Fe7421b3320848ef127707e583976%2Fa293fd9ca76b4030b686618c5f0e5e6e",
            "publishedAt": "2023-07-26T17:55:00Z",
            "content": "LONDON (AP) Kevin Spacey charmed the jury in his sexual assault trial with humor, humility and emotion as he dropped names of fellow stars and stories from his once-celebrated career while his lawyer… [+7498 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": null,
            "title": "Galaxy Foldable Phone Face-Off: How the Z Fold 5 Stacks Up on Specs and Price - CNET",
            "description": "See how Samsung's newest foldable phone compares to earlier models",
            "url": "https://www.cnet.com/tech/mobile/galaxy-foldable-phone-face-off-how-the-z-fold-5-stacks-up-against-earlier-models/",
            "urlToImage": "https://www.cnet.com/a/img/resize/8d7a74ada1eee15ac9eafc57b1a3aa948e57407a/hub/2023/07/26/374c177b-6855-4e15-9871-c4167de640de/3vs3vs3.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2023-07-26T17:51:00Z",
            "content": "At its Galaxy Unpacked event Wednesday, Samsung showed off the latest version of its flagship foldable phone -- the Galaxy Z Fold 5. It features a new, gapless hinge and a speedier processor, but it … [+4277 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Madeline Holcombe",
            "title": "‘Barbie’ movie’s ending is an important reminder for women’s health - CNN",
            "description": "A CNN medical analyst answers questions so you learn more about why “Barbie”’s final scene matters.",
            "url": "https://www.cnn.com/2023/07/26/health/barbie-ending-explainer-gynecologist-wellness/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230724143149-02-barbie-movie-still.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-07-26T17:12:00Z",
            "content": "SPOILER Alert: Do not read past this line if you havent seen Barbie.\r\nAfter all of Barbies glories and misadventures on the path to becoming human, moviegoers leave her at a pivotal moment at the clo… [+8339 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "NOMAAN MERCHANT",
            "title": "UFO congressional hearing: Whistleblower says US concealing 'multi-decade' UFO program - The Associated Press",
            "description": "A former Air Force intelligence officer has testified that the U.S. is concealing a longstanding program that retrieves and reverse engineers unidentified flying objects. Retired Maj. David Grusch’s highly anticipated testimony on Wednesday before a House Ove…",
            "url": "https://apnews.com/article/ufos-uaps-congress-whistleblower-spy-aliens-ba8a8cfba353d7b9de29c3d906a69ba7",
            "urlToImage": "https://dims.apnews.com/dims4/default/3e5371a/2147483647/strip/true/crop/7952x4473+0+416/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3b%2Fe1%2F6b3890b48be5f89e1ff117085a08%2Ff8293121dcc04ad28f421f49fb402005",
            "publishedAt": "2023-07-26T17:08:00Z",
            "content": "WASHINGTON (AP) The U.S. is concealing a longstanding program that retrieves and reverse engineers unidentified flying objects, a former Air Force intelligence officer testified Wednesday to Congress… [+3376 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WDSU New Orleans"
            },
            "author": null,
            "title": "Countdown begins: One year until 2024 Olympics in Paris - WDSU New Orleans",
            "description": "Here’s a look at what to expect next year when the 2024 Olympics open on July 26 in Paris.",
            "url": "https://www.wdsu.com/article/one-year-until-2024-olympics-in-paris/44646123",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gettyimages-1554192038-64c0dccc451d8.jpg?crop=1.00xw:0.847xh;0,0&resize=1200:*",
            "publishedAt": "2023-07-26T17:05:00Z",
            "content": "PARIS —The Olympics is on track to be back in business with millions of visitors coming to Paris for the 2024 Games.\r\nThe French capital has the expert experience to stage the event and welcome guest… [+10998 chars]"
        }
    ]
    static defaultProps = {
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        country: propTypes.string,
        category: propTypes.string
    }
    constructor() {
        super();
        console.log("const from news")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    //refactoring code
    async updateNews() {
        let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a13f8575f98846b294350b7575f7f38b&page=${this.state.page}&pageSize=5`;

        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            totalResults: parseData.articles,
            articles: parseData.articles,
            loading: false
        })
    }
    //componentDidMount executes after the render
    async componentDidMount() {

        // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a13f8575f98846b294350b7575f7f38b&page=1&pageSize=5`;
        // let data = await fetch(url);
        // let parseData = await data.json()
        // console.log(parseData);
        // this.setState({
        //     articles: parseData.articles,
        //     totalResults: parseData.totalResults
        // });
        this.updateNews();
    }

    handlePrev = async () => {

        // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a13f8575f98846b294350b7575f7f38b&page=${this.state.page - 1}&pageSize=5`;

        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parseData = await data.json()

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNext = async () => {

        // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a13f8575f98846b294350b7575f7f38b&page=${this.state.page + 1}&pageSize=5 `;

        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parseData = await data.json();

        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parseData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page + 1 });
        this.updateNews();

    }
    render() {
        return (
            <div>
                <div className='container my-3'>
                    <h2 className='text-center'>NewApp - Top Headlines</h2>
                    {this.state.loading && <Spinner />}
                    <div className='row my-3'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title} descr={element.description} imgUrl={element.urlToImage} newUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className='container d-flex justify-content-between'>
                        <button type='button' disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrev}> &larr; Previous</button>
                        <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 5)} className='btn btn-dark' onClick={this.handleNext}> Next &rarr;</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loadingspin from './Loadingspin';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      load: false,
      page: 1,
      totalResults: 0
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
    this.setState({ load: true });

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=eac75f8ff51e4789bbaa203c39b4fdbe&page=1&pageSize=8`;
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      load: false
    });
  }

  fetchMoreData = async () => {
    this.setState({ load: true });
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=eac75f8ff51e4789bbaa203c39b4fdbe&page=${nextPage}&pageSize=8`;
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      page: nextPage,
      articles: this.state.articles.concat(parsedData.articles),
      load:false
    });
  };

  render() {
    return (
      <>
        <h2 className='text-center' style={{ margin: '2rem 0' }}>
          News Monkey - Top Headlines
        </h2>
        {this.state.load && <Loadingspin />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={this.state.load && <Loadingspin />}
        >
          <div className='container'>
            <div className='row gx-4 gy-4' style={{ marginTop: '5vh' }}>
              {this.state.articles.map((ele) => (
                <div className='col md-4' key={ele.url}>
                  <NewsItem
                    title={ele.title}
                    description={ele.description}
                    urltoimage={ele.urlToImage}
                    newsurl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;

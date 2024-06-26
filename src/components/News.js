import React, { Component } from 'react'
import NewsDetails from './NewsDetails'
import Loading from './loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'top',


  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: "1719364148482515166",
      totalResults: 0

    }
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsdata.io/api/1/latest?apikey=pub_44277dad2827303c8f5cda44246317f9714ac&category=${this.props.category}&language=en&page=${this.state.page}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30);
    let news = await data.json();
    this.props.setProgress(70);
    this.setState({
      loading: false,
      articles: news.results,
      totalResults: news.totalResults,
      page: news.nextPage
    })
    this.props.setProgress(100)
  }

  componentDidMount() {this.updateNews();}
    
  fetchMoreData = async () => {

    let url = `https://newsdata.io/api/1/latest?apikey=pub_44277dad2827303c8f5cda44246317f9714ac&category=${this.props.category}&language=en&page=${this.state.page}`;
    this.setState({ loading: true }) //`https://newsdata.io/api/1/latest?apikey=pub_44277dad2827303c8f5cda44246317f9714ac&category=${this.props.category}&language=en&page=${this.state.page}`
    let data = await fetch(url);
    let news = await data.json();

    this.setState({
      loading: false,
      articles: this.state.articles.concat(news.results),
      page: news.nextPage,
      totalResults: news.totalResults
    })


  };


  render() {

    return (
      <>
        <h1>NewsMonkey-Top HeadLines</h1>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className='container'>
            <div className="row">
              {this.state.articles.map((elements) => {

                return <div className="col-md-3" key={elements.link}>
                  <NewsDetails link={elements.link} title={elements.title} description={elements.description ? elements.description.slice(0, 200) : "To know more about the news click on details"} imgurl={elements.image_url ? elements.source_icon : "https://i.bytvi.com/domain_icons/gazettextra.jpg"} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>

      </>

    )
  }
}

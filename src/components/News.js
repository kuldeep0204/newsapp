import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    articles = []

    constructor(){
        super()
        this.state = {
            articles: [],
            loading: false,
            page:1
        }        
    }
    

    async componentDidMount(){        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ee5aa04ab6f4c87bf2fb5340158d3a1&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }
    
    handleNextBtn = async ()=>{        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ee5aa04ab6f4c87bf2fb5340158d3a1&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page : this.state.page+1         
        
        });         
    };

    handlePreviousBtn = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ee5aa04ab6f4c87bf2fb5340158d3a1&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page : this.state.page-1 
            
           
        
        });
    
        
    };



  render() {
    return (

        <div className='container my-3'>
            <h1>Top Headlines</h1>
            <div className='row'>
            {this.state.articles.map((element)=>{
            return  <div className='col-md-4 my-4' key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2023-01/rsh8urao_delhi-woman-new-cctv_625x300_02_January_23.jpg"} url={element.url}/>
                    </div>                       
            })}
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} onClick={this.handlePreviousBtn} className="btn btn-dark">Previus</button>
            <button type="button" onClick={this.handleNextBtn} className="btn btn-dark">Next</button>
            </div>
                               
      </div>
    )
  }
}

export default News

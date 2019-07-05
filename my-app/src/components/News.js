import React from 'react'

import PropTypes from 'prop-types'
import { Article } from './Article'

class News extends React.Component {

    state = {
        filteredNews: this.props.data,
    }

    getDerivedStateFromProps(props, state){
        let nextFilteredNews = [...props.data]
        nextFilteredNews.forEach((item, index) =>{
            if(item.bigText.toLowerCase().indexOf('pubg') !== -1){
                item.bigText = 'SPAM'
            }
        })
        return { filteredNews: nextFilteredNews, }
    }
    renderNews = () => {
        const { filteredNews } = this.state
        let newsTemplate = null;
 
        if(filteredNews.length){
            newsTemplate = filteredNews.map(function (item, index) {
                return <Article key={item.id} data={item} />
            })
        }else{
            newsTemplate = <p>К сожалению новостей нет</p>
        }
        return newsTemplate
    }
 
    render(){
        const { filteredNews } = this.state
 
        return (
            <div className="news">
                {this.renderNews()}
                <b className={filteredNews.length > 0 ? '' : 'none'}>Всего новостей: {filteredNews.length}</b>
            </div>
        )
    }    
 }
 
 News.propTypes = {
    data: PropTypes.array.isRequired
 }

export { News }
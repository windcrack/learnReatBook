import React from 'react'

import PropTypes from 'prop-types'
import { Article } from './Article'

class News extends React.Component {
    renderNews = () => {
        const { data } = this.props
        let newsTemplate = null;
 
        if(data.length){
            newsTemplate = data.map(function (item, index) {
                return <Article key={item.id} data={item} />
            })
        }else{
            newsTemplate = <p>К сожалению новостей нет</p>
        }
        return newsTemplate
    }
 
    render(){
        const { data } = this.props
 
        return (
            <div className="news">
                {this.renderNews()}
                <b className={data.length > 0 ? '' : 'none'}>Всего новостей: {data.length}</b>
            </div>
        )
    }    
 }
 
 News.propTypes = {
    data: PropTypes.array.isRequired
 }

export { News }
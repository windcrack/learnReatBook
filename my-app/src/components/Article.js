import React from 'react'

import PropTypes from 'prop-types'

class Article extends React.Component {
    state = {
        visible: false,
    }
 
 
    hendleReadMoreClick = e =>{
        e.preventDefault()
        this.setState({ visible: true })
    }
    render(){
        const { author, text, bigText } = this.props.data
        const { visible } = this.state
        return(
            <div className = 'article'>
                <p className='news_author'>{author}:</p>
                <p className='news_text'>{text}</p>
                {
                    !visible && <a href="#readmore" onClick={this.hendleReadMoreClick} className='news_readmore'>Подробнее</a>
                }
                {
                    visible && <p className='news_big-text'>{bigText}</p>
                }
            </div>
        )
    }
 }
 Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
 }

export { Article }
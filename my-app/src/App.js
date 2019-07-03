import React from 'react';
import PropTypes from 'prop-types'

import { Add } from './components/Add'
import { News } from './components/News'
import newsData from './data/newsData'
import './App.css';


class App extends React.Component {
   state = {
       news: null,
       isLoading: false, 
   }
   handleAddNews = (data) =>{
       const nextNews = [data, ...this.state.news]
       this.setState({ news: nextNews })
   }

   componentDidMount(){
     this.setState({isLoading: true })
     fetch('http://localhost:3000/data/newsData.json')
     .then(response =>{
       return response.json()
     })
     .then(data => {
       this.setState({ isLoading: false, news: data})
     })
     .catch(console.log.bind(console))
   }

   render(){
     const { news, isLoading } = this.state
       return (
           <div>
               <Add onAddNews={this.handleAddNews} />
               <h3>Новости</h3>
               {isLoading && <p>Загружаю...</p>}
               {Array.isArray(news) && <News data={this.state.news} />}
           </div>
           
       )
   } 
}

export default App;

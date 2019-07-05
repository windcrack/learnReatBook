import React from 'react'

import PropTypes from 'prop-types'

class Add extends React.Component {
    state = {
        name: '',
        text: '',
        bigText: '',
        aggre: false,
    }
 
    vadiate = () => {
        const {name, text, aggre } = this.state
        if(name.trim() && text.trim() && aggre){
            return true
        }
        return false
    }
 
   onBntClickHandler = (e) => {
       e.preventDefault()
       const { name, text, bigText } = this.state
        //alert(`${name} \n ${text}`)
        this.props.onAddNews({ 
            id: +new Date(),
            author: name, 
            text, 
            bigText,
        })
   }
 
   handleChange = e =>{
       const { id, value } = e.currentTarget
       this.setState({ [id]: value})
   }
 
   changeDisabletButton = (e) =>{
       this.setState({aggre: e.currentTarget.checked})
   }
 
   render(){
        const { name, text, bigText} = this.state
 
       return(
           <form className="add">
            <input
                id="name"
                type="text"
                onChange={this.handleChange}
                className="add__author"
                placeholder="ваше имя"
                value={name}
            />
            <textarea
                id="text"
                className="add__text"
                onChange={this.handleChange}
                placeholder="текст новостей"
                value={text}
            ></textarea>
            <textarea
                id="bigText"
                className="add__text"
                onChange={this.handleChange}
                placeholder="Введите описание новости"
                value={bigText}>
            </textarea>
            <label className="add__checkrule">
                <input type="checkbox" onChange={this.changeDisabletButton} />Я согласне с правилами
            </label>
            <button
                className="add__bnt"
                disabled={!this.vadiate()}
                onClick={this.onBntClickHandler}>
                Добавить новость!
            </button>
           </form>
       )
   }
 }
 
 Add.propTypes = {
   onAddNews: PropTypes.func.isRequired,
 }

export { Add }
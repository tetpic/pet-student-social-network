import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.scss';
import {changeMessageActiveCreator, addMessageActionCreator} from '../../redux/messages-reducer';



const DialogItem = (el) => {
    return (
        <div key={el.key} className={classes.item} >
        <NavLink to={"/dialogs/" + el.id}> {el.name} </NavLink>     
        </div>
    )
}


const Message = (el) => {
    return (
        <div key={el.key} className={classes.message__item}>{el.msg} </div>
    )
}




const Dialogs =(props)=> {
    let dialogs = props.dialogPage.dialogs
    let messages = props.dialogPage.messages
    let dialogsMapping = dialogs.map((el) =>  DialogItem(el) )
    let messagesMapping = messages.map((el) =>  Message(el))
    let newMessageRef = React.createRef()
    let addMessage = () => {
        // пишем реф чтобы получить из текстареа данные 
        // let text = newMessageRef.current.value
        // пушим сообщение в массив в стейте
        props.dispatch(addMessageActionCreator())
        // зануляем текст после отправки
        // this.render()
    }

    let changeMessage = () => {
        let text = newMessageRef.current.value
        let action = changeMessageActiveCreator(text)
        props.dispatch(action)
    }
   
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogs__items} >
                {dialogsMapping}
            </div>
            <div className={classes.messages} >
                {messagesMapping}
            </div>
            <div className={classes.sendArea}>
                <textarea ref={newMessageRef} value={props.dialogPage.currentMessage} onChange={changeMessage} name="new-message" id="newMessage" cols="30" rows="10"></textarea>
                <button onClick={addMessage} className={classes.sendButton}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.scss';
import {changeMessage, addMessage} from '../../redux/messages-reducer';


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
const Dialogs =()=> {
   
    let dialogs = useSelector(state =>  state.dialogPage.dialogs)
    let messages = useSelector(state => state.dialogPage.messages)
    let currentMessage = useSelector(state => state.dialogPage.currentMessage)
    const dispatch = useDispatch()
    
 

    let dialogsMapping = dialogs.map((el) =>  DialogItem(el) )
    let messagesMapping = messages.map((el) =>  Message(el))
    let newMessageRef = React.createRef()
    let changeMessageUsing = () => {
       
        let text = newMessageRef.current.value
        dispatch(changeMessage(text))

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
                <textarea ref={newMessageRef} value={currentMessage} onChange={changeMessageUsing} name="new-message" id="newMessage" cols="30" rows="10"></textarea>
                <button onClick={() => dispatch(addMessage())} className={classes.sendButton}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;
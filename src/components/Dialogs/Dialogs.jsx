import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onSendMessageChange = (event) => {
        let body = event.target.value;
props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    /*let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onSendMessageChange}
                              placeholder="Новое сообщение"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} className={s.button}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
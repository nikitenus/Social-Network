import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";

type DialogsPropsType = {
    messages: MessagesDataType[]
    dialogs: DialogsDataType[]
}

const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={s.dialog}>
            <div className={s.dialogItems}>
                {props.dialogs.map((el) => {
                        return (
                            <DialogItem id={el.id} name={el.name} key={el.id}/>
                        )
                    }
                )
                }
            </div>
            <div className={s.messages}>
                {props.messages.map((el)=>{
                    return (
                        <Message message={el.message} key={el.id}/>
                    )
                })}
            </div>
        </div>
    )
        ;
};

export default Dialogs;
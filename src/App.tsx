import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}


export const App = (props : AppPropsType) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() => <Dialogs messages={props.state.dialogsPages.messages} dialogs={props.state.dialogsPages.dialogs}/>}/>
                <Route path={"/profile"} render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                {/*<Route path={"/music"} component={Music}/>*/}
                {/*<Route path={"/settings"} component={Settings}/>*/}
            </div>
        </div>
    );
}


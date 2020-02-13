import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs store={props.store} />}/>
                {/*если exact убрать, то при смене УРЛа будут видны все диалоги*/}

                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch} />}/>
                {/*posts={props.posts - выносим данные из компонентов, указываем путь к данным, через переменную props*/}
                <Route exact path='/news' render={() => <News/>}/>
                <Route exact path='/music' render={() => <Music/>}/>
                <Route exact path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;

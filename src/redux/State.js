import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post', likesCount: 25},
                {id: 3, message: 'Приветтттт', likesCount: 12},
                {id: 4, message: 'УУУУУУУ', likesCount: 21},
            ],
            newPostText: 'new posts'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Masha'},
                {id: 6, name: 'Vitya'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Привет!'},
                {id: 4, message: 'Привет!'},
                {id: 5, message: 'Привет!'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;

/*    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
/*action - объект описывает действие которое нужно совершить,
обязательно должно быть св-во type*/
/*В консоли посмотреть state*/
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hello World!", likesCount: 100},
                {id: 2, message: "I am a musician!", likesCount: 150},
            ],
            newPostText: 'Введите сообщение'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Anthony"},
                {id: 2, name: "Chad"},
                {id: 3, name: "Flea"},
                {id: 4, name: "John"},
                {id: 5, name: "Josh"},
                {id: 6, name: "Dave"},
            ],

            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Bring me my Drums!"},
                {id: 3, message: "Where is my Bass?"},
                {id: 4, message: "I am back!"},
                {id: 5, message: "Let me back!"},
                {id: 6, message: "Wanna some Heavy?"},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
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
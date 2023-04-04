export type StateType = {
    profilePage: ProfilePageType
    dialogsPages: MessagesPagesType
}

type ProfilePageType = {
    posts: PostsDataType[]
}

type MessagesPagesType = {
    messages: MessagesDataType[]
    dialogs: DialogsDataType[]
}


export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    message: string
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello", likesCount: 10},
            {id: 2, message: "How is it going?", likesCount: 12}
        ]
    },
    dialogsPages: {
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How is it going?"},
            {id: 3, message: "Param Pam Pam"}
        ],
        dialogs: [
            {id: 1, name: "Valera"},
            {id: 2, name: "Nikita"},
            {id: 3, name: "Samad"},
            {id: 4, name: "Olga"}
        ]
    }
}
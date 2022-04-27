export interface Chat {
    id: number,
    user: string,
    user1: string,
    messages: message[]
}

export interface message {
    user?: string,
    message?: string
}

export interface bodyChat {
    name: string,
    name1: string
}
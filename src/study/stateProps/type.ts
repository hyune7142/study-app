export interface ChildProp {
    name: string,
    onChange: (text: string) => void
    changeType: (type: string) => void
    customHook?: boolean,
}

export interface State {
    something: string,
    obj: {
        name: string,
        age: number
    }
}
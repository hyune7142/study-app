export interface ChildProp {
    name: string,
    onChange: (text: string) => void
    changeType: (type: string) => void
    customHook?: boolean,
}

export interface State {
    [key: string]: unknown,
}
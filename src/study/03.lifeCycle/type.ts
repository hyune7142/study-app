export type LifeCycleProp = {
    solution: string
}

export interface ChildProp {
    name: string,
    onChange: (text: string) => void
    changeType: (type: string) => void
    customHook?: boolean,
}

export interface State {
    [key: string]: any,
}
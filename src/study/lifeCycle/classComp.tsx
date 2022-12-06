import React, { Component } from 'react';
import { ChildProp, State } from './type'

class ClassComp extends Component<ChildProp, State> {
    
    componentDidMount(): void {
        this._consoleLog('Class Comp - Didmount')
    }

    componentWillUnmount(): void {
        this._consoleLog('Class Comp - Unmount')
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<ChildProp>, prevState: Readonly<State>) {
        return 'test' // return된 값은 didUpdate의 snapshot 인자로 전달됩니다.
    }

    shouldComponentUpdate(nextProps: Readonly<ChildProp>, nextState: Readonly<State>, nextContext: any): boolean {
        return true;
    }

    componentDidUpdate(prevProps: Readonly<ChildProp>, prevState: Readonly<State>, snapshot?: string): void {
        const { name } = this.props;
        this._consoleLog(`prev Name :: ${prevProps.name}, curr Name :: ${name}, snapShot :: ${snapshot}`);
    }

    _consoleLog(text: string) {
        console.log(text);
    }

    render() {
        const { name, onChange, changeType } = this.props;
        return (
            <div>
                <h1>Class Component</h1>
                <input defaultValue={name} onChange={({ target: {value} }) => onChange(value)}></input>
                <br />
                <button onClick={() => changeType('function')}>함수형 컴포넌트로 전환</button>
            </div>
        );
    }
}

export default ClassComp;
import React, { Component } from 'react';
import { ChildProp, State } from './type'

// P = Props , S = State, SS = SnapShot
class ClassComp extends Component<ChildProp, State> {
    constructor(props: ChildProp) {
        super(props);
        this.state = {
            something: 'Hi',
            obj: {
                name: 'Sam',
                age: 29
            }
        }
    }

    _consoleLog(text: string) {
        console.log(text);
    }

    _handleSomthing = () => {
        this.setState({
            something: 'Bye'
        }, () => {
            // setState 후, 변경된 state로 어떤 작업이 필요할 경우 콜백함수 사용
        })
    }

    _handleObj = () => {
        this.setState((prev) => {
            const { obj: PrevObj } = prev;
            return {
                obj: {
                    ...PrevObj,
                    age: PrevObj.age + 1,
                }
            }
        })
    }

    render() {
        const { name, onChange, changeType } = this.props;
        const { something, obj } = this.state;
        return (
            <div>
                <h1>Class Component</h1>
                <h1>{something}</h1>
                <h1>{`${obj.name},  ${obj.age}`}</h1>
                <input defaultValue={name} onChange={({ target: {value} }) => onChange(value)}></input>
                <br />
                <button onClick={this._handleSomthing}>Something state change</button>
                <button onClick={this._handleObj}>Obj state change</button>
                <button onClick={() => changeType('function')}>함수형 컴포넌트로 전환</button>
            </div>
        );
    }
}

export default ClassComp;
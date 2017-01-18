'use strict';

import React from 'react';
import { Button,Checkbox} from 'antd';


class TodoItem extends React.Component {

    //改变任务是否已完成的状态
    handlerChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    // 鼠标移入事件
    handlerMouseOver() {
        ReactDOM.findDOMNode(this).style.background = '#eee';
        ReactDOM.findDOMNode(this.refs.delButton).style.display = 'inline-block';
    }

    handlerMouseOut() {
        ReactDOM.findDOMNode(this).style.background = '#fff';
        ReactDOM.findDOMNode(this.refs.delButton).style.display = 'none';
    }

    // 删除当前任务
    handlerDelete(){
        this.props.deleteTodo(this.props.index);
    }


    render() {
        let className = this.props.isDone ? 'task-done' : '';
        return (
            <li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
                <label>
                <Checkbox checked={this.props.isDone} onChange={this.handlerChange.bind(this)}></Checkbox>
                <span className={className}>{this.props.text}</span>
                </label>
                <Button ref="delButton" type="primary"  onClick={this.handlerDelete.bind(this)}>删除</Button>
            </li>
        )
    }

}


export default TodoItem;

import React from 'react';
import { Button } from 'antd';

console.log(Button)
class TodoFooter extends React.Component {

    //改变任务是否已完成的状态
    handlerSelectAll(e) {
        this.props.changeTodoState(null, e.target.checked, true);    // true表示全部操作。

    }

    //删除全部已完成的任务
    handlerDeleteDone() {
        this.props.clearDone();
    }

    render() {
        return (
            <div className="todo-footer">
            <label>
            </label>
            <span><span className="text-success">已完成{this.props.todoDoneCount}</span> / 全部{this.props.todoCount}</span>
            <Button type="primary" onClick={ this.handlerDeleteDone.bind(this) }>删除已完成事项</Button>
            </div>
        ) 
    }

}


export default TodoFooter;

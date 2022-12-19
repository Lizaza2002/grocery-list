import { Component } from "react";
import check from './shopping-cart.png'

export class List extends Component {
    state = {
        userInput: '',
        groceryList: []
    }
    
    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input==='') {
            alert ("Пожалуйста, напишите, что хотите купить.")
        } 
        else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''});
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = []; // приравняли массив к пустоте listArray.length = 0;
        this.setState({groceryList: listArray})
    }

    crossedWord(e) {
        const crossedLi = e.target;
        crossedLi.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="Что вы хотите купить?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/> 
            </div>
            <div className="container">
                <button className="add btn" onClick={() => this.addItem(this.state.userInput)}>Добавить</button>
            </div>

            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img alt="" src={check} width="20px"/>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="container">
                <button className="delete btn" onClick={() => this.deleteItem()}>Удалить</button>
            </div>
            </form>
            </div>
        )
    }
}
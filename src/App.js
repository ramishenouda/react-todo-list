import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos/Todos';
import AddTodo from './components/Todos/AddTodo';
import About from './components/Pages/About';

import './App.css';

class App extends Component {

    id = 0;
    state = {
        todos: [
            {
                id: this.id++,
                title: "Continue working on the sqlite database",
                completed: false
            },
            {
                id: this.id++,
                title: "Study Operating System",
                completed: false
            },
            {
                id: this.id++,
                title: "Study Complexity",
                completed: false
            }
        ]
    }

    // data;
    // db = openDatabase('ReactTodoApp', '1.0', 'Test DB', 2 * 1024 * 1024, () => {          

    //     this.db.transaction(function (tx) { 
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, note TEXT NOT NULL, completed INTEGER DEFAULT 0)');
    //     });

    //     this.db.transaction(function (tx) { 
    //         tx.executeSql('INSERT INTO notes (note) VALUES ("Your First Todo ^__^")'); 
    //     });
    // })

    // constructor () {
    //     super();
        
    //     this.db.transaction(function (tx) { 
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, note TEXT NOT NULL, completed INTEGER DEFAULT 0)');
    //     });

    //     this.getAllNotes();
    // }
    
    //Toggle Complete
    markComplete = (id) => {
        console.log(id);
        
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })})
    }

    addTodo = (title) => {
        let todo = {
            id: this.id++,
            title: title,
            completed: false
        }

        this.setState({todos: [...this.state.todos, todo]})

        // this.db.transaction(function (tx) { 
        //     tx.executeSql(`INSERT INTO notes (note) VALUES ("${title}")`);
        // });

        //this.getAllNotes();
    }

    // getAllNotes = () => {
    //     this.db.transaction((tx) => { 
    //         tx.executeSql('SELECT * FROM notes', [], (tx, results) => {
    //             this.data =  results.rows;
    //         }); 
    //     });

    //     console.log(this.data);
    // }

    deleteNote = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
        // this.db.transaction(function (tx) { 
        //     tx.executeSql(`DELETE FROM notes WHERE id = ("${id}")`);
        // });
    }

    render () {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteNote={this.deleteNote}/>
                            </React.Fragment>
                        )} />

                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
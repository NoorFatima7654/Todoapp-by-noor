'use client'
import { todo } from "node:test";
import { useState } from "react"





interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
const TodoList =() =>
{
    const [todos, setTodos] = useState <Todo[]>([]);
    const [inputValue, setInputValue] = useState("")

    // add of items
    const addTodo = () => {
        if (inputValue.trim()=== "") return;
        setTodos([
            ...todos,
            {id:Date.now(), text: inputValue, completed:false},

        ]);
        setInputValue("")
    };
    // add values  id :
    const toggleTodo = (id: number)=> {
        setTodos(
            todos.map((todo) =>
            todo.id === id? {...todo, completed: !todo.completed}: todo
            
            )
        )
    }
    // delete todo section
    const deleteTodo = (id: number ) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
       
                <div>
                   <a href='https://github.com/NoorFatima7654/Todolistbynoor.git'>
    <button className="bg-blue-600 flex mx-auto py-3 px-5 rounded-lg items-center hover:bg-gray-400 focus:outline-none">
       <img className='w-10 h-18' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1Zb8qAC9MjY8ATGb7KRAX2n7Te8VJCi_8HI2lycowx0S7qIlymywEFYaLA&s" alt=""/>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1"> Github</span>
          <span className="title-font text-black font-bold">Noor Fatima</span>
          </span>
          </button>
         </a>
 
      
                <main className="flex-grow py-12 flex items-center justify-center">
                    <div className="max-w-md max-auto p-4 bg-slate-400 rounded-lg shadow-md ">
                        <div className="mb-4">
                            <div className="flex">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="flex-grow p-2 border border-grey-400 rounded-lg"
                                    placeholder="Add a new task...." />
                                <button onClick={addTodo}
                                    className="ml-2 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Add
                                </button>
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {todos.map((todo) => (
                                <li key={todo.id}
                                    className={`flex items-center justify-between  p-2 border border-slate-400 rounded-lg
                            ${todo.completed ? "bg-lime-400 line-through " : "bg-sky-200"}`}
                                >
                                    <span>{todo.text}</span>
                                    <div>
                                        <button onClick={() => toggleTodo(todo.id)}
                                            className="px-2 py-1 text-sm bg-yellow-500 rounded-lg hover:bg-gray-300">
                                            {todo.completed ? "undo" : "completed"}

                                        </button>
                                        <button onClick={() => deleteTodo(todo.id)}
                                            className=" text-white px-2 py-1 text-sm bg-red-900 rounded-lg hover:bg-pink-600">
                                            Delete

                                        </button>

                                    </div>

                                </li>
                            ))}

                        </ul>
                    </div>

                </main>
</div>
        
    )
}



export default TodoList
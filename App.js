import React, { useState } from 'react'
import { SafeAreaView, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'

import { MyList, MyInput } from './src/components'

const App = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const setTodoText = text => {
        console.log(text);
        setTodo(text);
    };

    const addToDo = () => {
        let newTodo = [...todoList];
        newTodo.push({ todoText: todo, isDone: false });
        setTodoList(newTodo);
    };

    function changeTodo(index) {
        let newTodo = [...todoList]
        newTodo[index].isDone = !newTodo[index].isDone
        setTodoList(newTodo)


    }


    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 20, margin: 10, alignSelf: 'center', }}>My Awesome List to Do</Text>


                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={todoList}
                    renderItem={({ item, index }) =>
                        (
                            <MyList onListPress={() => changeTodo(index)} item={item} />

                            /*
                        <TouchableOpacity
                        onPress={() => changeTodo(index)} >
                        <Text style={{color: 'black'}} > {item.todoText} </Text> 
                        <Text>{item.isDone ? "yapıldı" : "yapılmadı"} </Text>
                        </TouchableOpacity>
                        */
                        )}
                />


                <MyInput onPress={addToDo} onType={setTodoText} />

            </View>
        </SafeAreaView>
    )
}

export default App;


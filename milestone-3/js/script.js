// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il 
// testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto 
// a lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
// (se done era uguale a false, impostare true e viceversa)


Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newTodoText: '',
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true,
                    isActive: false
                },
                {
                    text: 'Pulire la casa',
                    done: false,
                    isActive: false
                },
                {
                    text: 'Fare benzina della macchina',
                    done: true,
                    isActive: false
                },
                {
                    text: 'Pagare bolletti',
                    done: true,
                    isActive: false
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                    isActive: false
                },
            ]
        },
        methods: {
            deletTodo: function(index){
                this.todos.splice(index, 1);
            },
            newTodo: function () {
                const trimNewTodoText = this.newTodoText.trim()
                if (trimNewTodoText.length > 2){
                    this.todos.push({
                        text: trimNewTodoText,
                        done: false,
                        isActive: false
                    });
                    this.newTodoText= '';
                }
            },
            toggleDone: function (index) {
                this.todos[index].done = !this.todos[index].done;
            },
            changeBg: function (element) {
                element.isActive = !element.isActive;
            }
        }
    }   
);
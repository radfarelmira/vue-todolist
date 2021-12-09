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


Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newTodoText: '',
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Pulire la casa',
                    done: false
                },
                {
                    text: 'Fare benzina della macchina',
                    done: true
                },
                {
                    text: 'Pagare bolletti',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
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
                        done: false
                    });
                    this.newTodoText= '';
                }
            }
        }
    }   
);
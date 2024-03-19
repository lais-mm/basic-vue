/*tasks = [
    {
        taskName: "Aprender Vue",
        done: true
    },
    {
        taskName: "Aprender Js",
        done: false
    },
]*/

const taskList = {

    data () {
        return{
            //tasks: window.tasks,
            tasks: [],
            newTask: {
                done: false
            },
        }
    },
    methods: {
        addTask: function (){
            if (this.newTask.taskName){
                this.tasks.push(this.newTask)
                this.newTask = {
                    done: false
                };
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
            } else {
                alert("Inclua o nome da tarefa")
            }
        },
        deleteTasks: function (){
            this.tasks = [];
        }
    },
    created() {
        this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks;
    },
    updated () {
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
}

Vue.createApp(taskList).mount('#app');
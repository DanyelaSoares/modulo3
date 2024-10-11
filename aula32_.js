
class task {             /*Representa minha tarefa/pra fazer a tarefa, eu preciso representar ela atraves de um objeto*/
    construtor(year, month, day, type,  //esse metodo serve pra eu, automaticamente, preencher os dados
        description) {
        this.year = year;    //estou atribuindo aqui
        this.month = month
        this.day = day
        this.type = type
        this.description = description
    }
    validateData() {    //preciso validar a task (dados). Vai validar os campos (percorrer, usa-se for in p/ percorrer dados de um objeto)
        for (let key in this) {
            if (this[key] ===
                undefined || this[key] ===
                "") {
                console.error('O campo ${key} é obrigatorio.')
                return false
            }
            return true
        }
    }
}

//interagir com o database de fato

class Database {
    loadTaskss() { } //metodo: vai pegar os dados - lista todas as tarefas

    createTasks() {//metodo pra criar/Se vou criar uma tarefa, eu recebo uma tarefa    
        localStorage.setItem[task]   //chama o objeto/evoca/"quero salvar algo no localStorage, coloco setItem. Salvo, por ex, a minha task"
     } 

    removeTasks(id) { } //para remover uma task, pego o id dela pra saber qual é {}

    searchTasks() { searchTasks }   //pesquisar minhas tarefas/saber qual tarefa to buscando {}


}

/*classe tem um metodo chamado construtor; sempre que eu instancio um objeto
esse metodo precisa ser chamado; esse metodo serve pra eu, automaticamente, preencher os dados
o THIS representa o objeto . This é parametro e (por ex) year é o atributo da classe

A task é um objeto, e no localStorage a gente não salva objetos por si so
nao salvamos a estrutura de uma linguagem.
A gente vai salvar geralmente uma string. Existe uma notação chamada JSON (COMUNICAÇÃO ENTRE SISTEMAS)
JSON É COMPREENSIVEL POR VARIAS LINGUAGENS

*/
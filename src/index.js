const todoFormEl = document.querySelector('.todo-form')
const todoListEl = document.querySelector('.todo-list')

todoFormEl.addEventListener('submit', e => {
  e.preventDefault()
  addTodo(e.target.elements.todo.value)
  // input 안의 내용을 초기화
  // 1. `.value`에 값을 대입하기
  // e.target.elements.todo.value = ''

  // 2. 폼의 reset 메소드 사용하기
  e.target.reset()
})

function addTodo(newTodoText) {
  // li 태그를 만들어서, 내용을 채운 뒤에 문서 안에 삽입하기
  const todoItemEl = document.createElement('li')
  // i 태그를 만들어서, 아이콘 사용
  const todoIconDelEl = document.createElement('i')
  todoIconDelEl.classList.add('fas', 'fa-trash-alt')

  // css 클래스 추가
  todoItemEl.classList.add('todo-list-item')
  // fontawesome

  todoItemEl.textContent = newTodoText

  todoListEl.appendChild(todoItemEl)

  // 삭제 버튼을 만들어서 문서 안에 넣기
  const deleteButtonEl = document.createElement('button')
  deleteButtonEl.textContent = ''

  todoItemEl.appendChild(deleteButtonEl)
  deleteButtonEl.appendChild(todoIconDelEl)

  // 삭제 버튼을 클릭했을 때 할일 항목이 삭제되도록 만들기
  deleteButtonEl.addEventListener('click', e => {
    todoListEl.removeChild(todoItemEl)
  })

  // 위로 버튼을 만들어서 문서 안에 넣기
  const upButtonEl = document.createElement('button')
  upButtonEl.textContent = ''
  // i 태그를 만들어서, 아이콘 사용
  const todoIconUpEl = document.createElement('i')
  todoIconUpEl.classList.add('fas', 'fa-angle-up')

  todoItemEl.appendChild(upButtonEl)
  upButtonEl.appendChild(todoIconUpEl)

  upButtonEl.addEventListener('click', e => {
    // alert('위로 버튼이 클릭되었습니다.')
    if (todoItemEl.previousElementSibling != null) {
      todoListEl.insertBefore(todoItemEl, todoItemEl.previousElementSibling)
    }
  })

  // 아래로 버튼을 만들어서 문서 안에 넣기
  const downButtonEl = document.createElement('button')
  downButtonEl.textContent = ''
  // i 태그를 만들어서, 아이콘 사용
  const todoIconDownEl = document.createElement('i')
  todoIconDownEl.classList.add('fas', 'fa-angle-down')

  todoItemEl.appendChild(downButtonEl)
  downButtonEl.appendChild(todoIconDownEl)

  downButtonEl.addEventListener('click', e => {
    if (todoItemEl.nextElementSibling != null) {
      todoListEl.insertBefore(
        todoItemEl,
        todoItemEl.nextElementSibling.nextElementSibling
      )
    }
  })
}

addTodo('break week homework')
addTodo('eating pizza')


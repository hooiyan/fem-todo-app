import { useRecoilState, useRecoilValue } from "recoil"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import TodoListItem from "./TodoListItem"

import FilterTodosDesktop from "./FilterTodosDesktop"
import {
  StyledTodoListWrapper,
  StyledTodoList,
  StyledBottom,
} from "../styles/StyledTodoList"

import { todoListFilterState, todoListState } from "../recoil/recoilState"
import {
  filteredTodoListSelector,
  todoListStatSelector,
} from "../recoil/recoilSelector"

export default function TodoList() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)
  const [todos, setTodos] = useRecoilState(todoListState)

  const todoList = useRecoilValue(filteredTodoListSelector)
  const { totalUncompleted } = useRecoilValue(todoListStatSelector)

  const clearCompleted = () => {
    filter === "All" && setFilter("Clear")
  }

  const betterWording = totalUncompleted <= 1 ? "item left" : "items left"

  const handleOnDragEnd = result => {
    if (!result.destination) return

    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setTodos(items)
  }

  return (
    <StyledTodoListWrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {provided => (
            <StyledTodoList
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {todoList.map(
                (todo, index) =>
                  !todo.isDeleted && (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}>
                      {provided => (
                        <TodoListItem
                          item={todo}
                          innerRef={provided.innerRef}
                          provided={provided}
                        />
                      )}
                    </Draggable>
                  )
              )}
              {provided.placeholder}
            </StyledTodoList>
          )}
        </Droppable>
      </DragDropContext>

      <StyledBottom>
        <p className="itemLeft">
          {filter === "Completed" ? 0 : totalUncompleted} {betterWording}
        </p>
        <FilterTodosDesktop />
        <button onClick={clearCompleted} className="clearCompleted">
          Clear Completed
        </button>
      </StyledBottom>
    </StyledTodoListWrapper>
  )
}

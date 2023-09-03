'use client'
import React,{useEffect} from 'react'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'
import { useBoardStore } from '../../../store/boardStrore'
import Column from './Column'
const Board = () => {
    //getboard
const [board,getBoard ,setBoardState]= useBoardStore((state)=> [state.board,state.getBoard ,state.setBoardState])



useEffect(()=>{
getBoard()
},[getBoard])


   const  handleDragEnd =(result: DropResult) =>
   {
     console.log('handleDragEnd')
     const {destination ,source , type} = result
     if(!destination) return;
     console.log('destination',destination)
     if(type === "column"){
        const entries = Array.from(board.columns.entries())
        const [removed] = entries.splice(source.index,1)
        entries.splice(destination.index,0,removed)
        const rearrangedColumns= new Map(entries)
       setBoardState({
        ...board,
        columns:rearrangedColumns})
     }
     //
     const columns =Array.from(board.columns)
     const strartColIndex = columns[Number(source.droppableId)]
     const finishColIndex = columns[Number(destination.droppableId)]
       
     const startCol:Column ={
          id:strartColIndex[0],
          tasks:strartColIndex[1].tasks
     }
     const finishCol:Column ={
        id:finishColIndex[0],
        tasks:finishColIndex[1].tasks
   }
    if(!startCol||!finishCol) return;

    if(source.index === destination.index && startCol === finishCol) return;

    const newTask= startCol.tasks
    const [taskMoved] =newTask.splice(source.index ,1)
    if(startCol.id === finishCol.id){
       //same column task drag 
       console.log('same column task drag')
       newTask.splice(source.index ,0, taskMoved)
        
       const newColums = new Map(board.columns)
       const newCol={
        id:startCol.id,
        tasks:newTask
       }
       newColums.set(startCol.id,newCol)
       setBoardState({
        ...board,
        columns:newColums
       })
    }
    else{
        //drag to another column
        console.log('drag to another column')
        const finishTasks= Array.from(finishCol.tasks)
        finishTasks.splice(destination.index,0,taskMoved)
        const newColums = new Map(board.columns)
       const newCol={
        id:startCol.id,
        tasks:newTask
       }

       newColums.set(startCol.id,newCol)
       newColums.set(finishCol.id,{
        id:finishCol.id,
        tasks:finishTasks
       })
       //update database
       setBoardState({...board,columns:newColums})
    }
    }


  return (
    <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId='board'
        direction='horizontal' type='column'>
     {(provided)=> (
     <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl
       mx-auto mt-4 rounded-md'
       {...provided.droppableProps}
       ref={provided.innerRef}>
        {Array.from(board.columns.entries()).map(
        ([id,column], index) => (
        <Column key={id} 
         id={id}
         tasks={column.tasks} 
         index={index}/>
         
         
        )
      )}
      
      </div>
      

       
)
      }
      </Droppable>
    </DragDropContext>
    
  )
}

export default Board

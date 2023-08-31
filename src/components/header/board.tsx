'use client'
import React,{useEffect} from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useBoardStore } from '../../../store/boardStrore'
const Board = () => {
    //getboard
const getBoard = useBoardStore((state)=> state.getBoard
)

useEffect(()=>{
getBoard()
},[getBoard])
  return (
    /*<DragDropContext>
        <Droppable droppableId='board'
        direction='horizontal' type='column'/>
      <p>Board</p>
    </DragDropContext>*/
    <><p>Board</p></>
  )
}

export default Board

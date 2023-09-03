import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TaskCard from './TaskCard'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
type Props={
    id:TypedColumn,
    tasks:Task[],
    index:number
}
const idToColumnText:{
    [key in TypedColumn]:string
}={
  "task":"Task",
  "onProgress": "On Progress",
  "done":"Done"
}
const Column = ({id, tasks, index}:Props) => {
  return (
   <Draggable draggableId={id} index={index}>
    {(provided)=>(
        <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className='m-2 bg-slate-100'>
          <Droppable droppableId={index.toString()} type='card'> 
          {
            (provided ,snapshot)=>(<div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`pb-2 rounded-md shadow-sm ${
                snapshot.isDraggingOver?"bg-green-200":"bg-white/50"
                }`}>
                    <h2 className='ml-4 text-blue-600 text-center font-bold m-2'>
                        {idToColumnText[id]}
                    <span className='px-2 rounded-full bg-green-400 m-1'>{tasks.length}
                    </span></h2>

                <div className='space-y-2'>
                  {
                    tasks.map((task,index)=>
                    (
                      <Draggable 
                       key={task.$id}
                       draggableId={task.$id}
                       index={index}>
                        {
                            (provided)=>(
                              <TaskCard
                              task={task} 
                              index={index}
                              id={id}
                              innerRef={provided.innerRef}
                              draggableProps={provided.draggableProps}
                              dragHandlerProps={provided.dragHandleProps}
                              />
                            )
                        }
                      </Draggable>  
                    ))
                  }
                  {/* temporary space to draggable object*/}
                  {provided.placeholder}

                  <div className='flex items-end justify-end p-2'>
                    <button className='text-green-500 hover:text-green-600'>
                        <PlusCircleIcon 
                        className='h-10 w-10' />
                    </button>
                  </div>
                </div>
                </div>
                
                
            )
          }
          </Droppable>
        </div>
    )}
   </Draggable>
  )
}

export default Column

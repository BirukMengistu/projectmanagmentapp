import React from 'react'
import { Draggable, DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/20/solid';
type Props={
    task:Task;
    index:number;
    id:TypedColumn;
    innerRef:(element:HTMLElement|null)=>void;
    draggableProps:DraggableProvidedDraggableProps;
    dragHandlerProps:DraggableProvidedDragHandleProps |null |undefined;
}
const TaskCard = ({task,index, id, innerRef,draggableProps,dragHandlerProps}:Props) => {
  return (
    <div 
    {...draggableProps}
    {...dragHandlerProps}
       ref={innerRef}
    className='bg-white rounded-md flex justify-between items-center m-3'>
      <p className='flex justify-center text-center ml-1'>{task.title}</p>
        <button className='text-red-500 hover:text-red-600 '>
            <XCircleIcon className='h-8 w-8 ml-5'/>
        </button>
    </div>
  )
}

export default TaskCard

import { create } from 'zustand'
import { getTaskGroupedByColumn } from '../lib/getTaskGroupedByColumn';
import Board from '@/components/header/board';
interface BoardState{
  board:Board;
  getBoard: () => void  ;
  setBoardState: (board:Board) => void  ;

}
export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn,Column>()
  },
  getBoard: async()=> {
   const board = await getTaskGroupedByColumn()
   set({ board });
  },
  setBoardState:(board)=>(set({board}),console.log('newBoard',Board)
  )
  
}))
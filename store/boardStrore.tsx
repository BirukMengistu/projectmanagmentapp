import { create } from 'zustand'
import { getTaskGroupedByColumn } from '../lib/getTaskGroupedByColumn';
interface BoardState{
  board:Board;
  getBoard: () => void  
}
export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn,Column>()
  },
  getBoard: async()=> {
   const board = await getTaskGroupedByColumn()
   set({ board });
  }
}))
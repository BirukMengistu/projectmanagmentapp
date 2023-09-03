import { database } from "../appwrite"
export const getTaskGroupedByColumn = async() => {
  const data =await database.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,

  )
  const tasks = data.documents
  console.log(tasks)
  const columns = tasks.reduce((acc, task)=>{
   if(!acc.get(task.status)){
    acc.set(task.status, {
        id:task.status,
        tasks:[]
    })
   }
   acc.get(task.status)!.tasks.push({
    $id:task.$id,
    $createdAt:task.$createdAt,
    title:task.title,
    status:task.status,
    //to get image if it exist on the task
    ...(task.image && {image:JSON.parse(task.image)})
   })
   return acc
  }
  , new Map<TypedColumn , Column>())

  console.log(columns)

  //if columns does have onprogress , task and done or empty tasks

  const columTypes: TypedColumn[]= ['task','onProgress', "done"]
  for (const columType of columTypes ){
    if(!columns.get(columType)){
        columns.set(columType,{
            id:columType,
            tasks:[]
        })
    }
  }
  console.log(columns)
  //sort tasks on columns
  const SortedColumns = new Map(
    Array.from(columns.entries()).sort((a,b) => columTypes.indexOf(a[0]) - columTypes.indexOf(b[0]))
  )
   const board:Board={
       columns:SortedColumns  
    }
  
return board
}


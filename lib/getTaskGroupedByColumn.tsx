import { database } from "../appwrite"
export const getTaskGroupedByColumn = async() => {
  const data =await database.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,

  )
  const task = data.documents
}


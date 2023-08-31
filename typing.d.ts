
interface Board{
   columns:Map<TypedColumn,Column>
}

type TypedColumn ="task"|"onProgress"|"done"

interface Column{
    id:TypedColumn;
    tasks:Task[]
}

interface Task{
    $id:string;
    $createdAt:string;
    title:string;
    status:string;
    image?:string;
}

interface Image{
    bucketId:string;
    fileId:string;
}
export interface ITodo{
    id:number,
    title:string,
    completed:any,
    length?:number
  }

export interface ITodoService{
    getAllTodos(): Promise<ITodo[]>;
}
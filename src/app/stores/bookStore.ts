import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"

type Book={
    BookID:number,
    Title:string,
    Author:string,
    Price:number,
    Description:string,
    Quantity:number
}
type BookState={
    books:Book[]|null,
    selectedBook:Book|null
}
const initialState:BookState={
    books:null,
    selectedBook:null
}
export const BookStore=signalStore(
    {providedIn:"root"},
    withState(initialState),
    withMethods((store)=>({
        setBooks(books:Book[]){
            patchState(store,{ books })
        },
        setSelectedBook(selectedBook:Book){
            patchState(store,{selectedBook})
        }
    }))
);
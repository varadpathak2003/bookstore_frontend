import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

type User={
    userID:string,
    email:string,
    name:string
};
type UserInfoState={
    user:User| null,
    jwtToken:string|null,
    isLoggedIn: boolean
};

const initialState:UserInfoState={
    user:null,
    jwtToken:null,
    isLoggedIn:false
}

export const UserInfoStore=signalStore(
    withState(initialState),
    withMethods((store)=>({
        setUser(user:User){
            patchState(store,{user})
        },
        setToken(jwtToken:string){
            patchState(store,{jwtToken})
        },
        setIsLoggedIn(isLoggedIn:boolean){
            patchState(store,{isLoggedIn})
        },
        logout(){
            patchState(store,initialState)
        }

    }))
);
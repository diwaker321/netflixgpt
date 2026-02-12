import {configureStore} from "@reduxjs/toolkit"
import userinfoReducer from "../Store/userInfoSlice"

const appStore = configureStore ({
    reducer:{
        userinfo: userinfoReducer
    }

})

export default appStore
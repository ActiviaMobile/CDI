import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:"root",
    initialState:{
        software:'',
        referente:'',
        rubro:'',
        empresa:''

    },
    reducers: {
        chooseSoftware: (state , action) => { state.software = action.payload },
        chooseReferente: (state , action) => { state.referente = action.payload },
        chooseRubro: (state , action) => { state.rubro = action.payload },
        chooseEmpresa: (state , action) => { state.empresa = action.payload },
    }
})

export const reducer = rootSlice.reducer;

export const { chooseSoftware , chooseReferente , chooseRubro , chooseEmpresa} = rootSlice.actions;
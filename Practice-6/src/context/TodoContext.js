import React, { createContext, useReducer} from 'react';

const initialState = {todoArray: [{id: Date.now(), todo: input}]}

const TodoContext = createContext()


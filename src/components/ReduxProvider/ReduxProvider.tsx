'use client';

import React from "react";
import store from '@/context/store'
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({children}: ReduxProviderProps) {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
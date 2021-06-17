import { useMemo } from "react";
import create from "zustand";

let store;

const initialState = {
  user: false,
  cookie_token: false,
};

function initStore(preloadedState = initialState) {
  return create((set) => ({
    ...initialState,
    ...preloadedState,
    getCookieToken: () => {
      let tn_token = window.localStorage.getItem("tn_token") || "";
      console.log(tn_token);
      set({ cookie_token: tn_token });
    },
  }));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useHydrate(initialState) {
  const state =
    typeof initialState === "string" ? JSON.parse(initialState) : initialState;
  const store = useMemo(() => initializeStore(state), [state]);
  return store;
}

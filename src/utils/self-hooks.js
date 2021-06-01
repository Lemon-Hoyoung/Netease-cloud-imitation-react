import { useEffect, useCallback, useRef } from 'react';

export function useDebounce(fn, delay, immediateFunc, dep = []) {
    const { current } = useRef({ fn, timer: null });
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args) {
        if (current.timer) {
          clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
        current.fn.call(this, ...args);
        }, delay);

        f.timer = current.timer;
        if (typeof immediateFunc === 'function') {
          immediateFunc();
        }
    }, dep)
}

export function useThrottle(fn, delay, immediateFunc, lastCompensate, dep = []) {
    const { current } = useRef({ fn, timer: null, timer2: null });
    useEffect(function () {
      current.fn = fn;
    }, [fn]);
  
    return useCallback(function f(...args) {
      if (!current.timer) {
        current.fn.call(this, ...args);

        current.timer = setTimeout(() => {
          delete current.timer;

          if (lastCompensate) {
            current.timer2 = setTimeout(() => {
              f.args && current.fn.call(this, ...f.args);
            }, delay);
            
            f.timer2 = current.timer2;
          }
        }, delay);
      } else {
        f.args = lastCompensate ? args : null;
      }
      
      f.timer = current.timer;
      if (typeof immediateFunc === 'function') {
        immediateFunc();
      }
    }, dep);
  }

export function useLocalStorage(stateName, prevTreat = (v)=>{return v}, setState, callback) {
  useEffect(() => {
    const getValue = localStorage.getItem(stateName)
    if (getValue) {
      setState(prevTreat(getValue));
    }
  },[]);

  return useCallback((state) => {
    if (typeof state === "object") {
      localStorage.setItem(stateName, JSON.stringify(state));
    } else {
      localStorage.setItem(stateName, state);
    }
    typeof callback === "function" && callback(state);
  }, []);
}

export function useRefCallback(callback, dep = []) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  return useCallback(() => callbackRef.current(), dep)
}
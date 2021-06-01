export function addClassName(ref, isAdd = true, classname = "", delay = 0, last) {
    function addClass(dom, classname) {
      const arr = dom.className.split(" ");
      arr.indexOf(classname) === -1 ? (dom.className += " " + classname) : (()=>{})();
    }
    function deleteClass(dom, classname) {
      const arr = dom.className.split(" ");
      const index = arr.indexOf(classname);
      if (index !== -1) {
        arr.splice(index, 1);
        dom.className = arr.join(" ");
      }
    }

    // var timeouts = [];
    // var messageName = 'zero-timeout-message';
  
    // // 保持 setTimeout 的形态，只接受单个函数的参数，延迟始终为 0。
    // function setZeroTimeout(fn) {
    //   timeouts.push(fn);
    //   window.postMessage(messageName, '*');
    // }
  
    // function handleMessage(event) {
    //   if (event.source === window && event.data === messageName) {
    //     event.stopPropagation();
    //     if (timeouts.length > 0) {
    //       var fn = timeouts.shift();
    //       fn();
    //     }
    //   }
    // }
  
    // window.addEventListener('message', handleMessage, true);

    const dom = ref.current;
    const f = setTimeout;

    //const f = (delay === 0) ? setZeroTimeout : setTimeout;
    return new Promise((resolve) => {
      //更新状态
      const t = f(() => {
        isAdd ? addClass(dom, classname) : deleteClass(dom, classname);
      }, delay);
      resolve(t);
    }).then((t) => {
      //还原状态
      if (typeof last != "undefined") {
        f(() => {
          isAdd ? deleteClass(dom, classname) : addClass(dom, classname);
        }, last + delay);
      }
      return t;
    });
  }

  export function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
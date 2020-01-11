class DOMNodeCollection {
  constructor (array) {
    this.htmlElements = array;
  }

  html(innerHTML) {
    if (innerHTML === undefined) {
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach(element => {
        element.innerHTML = innerHTML;
      });
      return this;
    }
  }

  empty() {
      this.htmlElements.forEach(el => {
          el.innerHTML = "";
      });
  }

  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      this.htmlElements.forEach(element1 => {
        arg.htmlElements.forEach(element2 => {
          element1.innerHTML = element1.innerHTML.concat(element2.outerHTML);
        })
      });
    } else if (typeof(arg) === "string"){
      this.htmlElements.forEach(element => {
        element.innerHTML = element.innerHTML.concat(arg);
      });
    } else if (arg instanceof HTMLElement) {
      this.htmlElements.forEach(element => {
        element.innerHTML = element.innerHTML.concat(arg.outerHTML);
      });
    }
    return this;
  }

  attr(name, value) {
    if (value === undefined) {
      return this.htmlElements[0].getAttribute(name);
    } else {
      this.htmlElements.forEach(element => {
        element.setAttribute(name, value);
      });
      return this;
    }
  }

  addClass(className) {
    this.htmlElements.forEach(element => {
      const currentClass = element.getAttribute('class');
      if (currentClass === null) {
        element.setAttribute('class', `${className}`);
      } else {
        element.setAttribute('class', `${currentClass} ${className}`);
      }
    });
    return this;
  }

  removeClass(className) {
    this.htmlElements.forEach(element => {
      // const currentClass = element.getAttribute('class');
      element.classList.remove(className);
    })
    return this;
  }

  children() { 
    const allChildren = [];
    this.htmlElements.forEach(parent => {
      let children = parent.children;
      Array.from(children).forEach((c)=> {
        if (!allChildren.includes(c)) {
          allChildren.push(c);
        }
      });
    });
    return new DOMNodeCollection(allChildren);
  }

  parent() {
    const allParents = [];
    this.htmlElements.forEach(child => {
      let parent = child.parentElement;
      // debugger;
      if (!allParents.includes(parent)) {
        allParents.push(parent);
      }
    });
    return new DOMNodeCollection(allParents);
  }

  find(selectors) {
    const matches = [];
    this.htmlElements.forEach(element => {
      let nodes = element.querySelectorAll(`${selectors}`);
      Array.from(nodes).forEach((node) => {
        if (!matches.includes(node)) {
          matches.push(node);
        }
      });
    });
    return new DOMNodeCollection(matches);
  }

  remove() {
    this.htmlElements.forEach(element => {
      element.remove();
    });
  }

  on(type, callback) {
    this.htmlElements.forEach(ele => {
      ele.addEventListener(type, callback);
      ele.callback= callback;
    });
  }
 
  off(type) {
    this.htmlElements.forEach(ele => {
      ele.removeEventListener(type, ele.callback);
    });
  }
}




module.exports = DOMNodeCollection;
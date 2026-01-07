function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)        // (reactElement.type) is 'a', this becomes <a></a>
    domElement.innerHTML = reactElement.children                        // add text inside the element (adds: <a>Click me to visit google</a>)
    domElement.setAttribute('href', reactElement.props.href)            // add attributes (props)
    domElement.setAttribute('target', reactElement.props.target)        // add attributes (props), now it will become:....<a href="https://google.com" target="_blank">Click me to visit google</a>

    container.appendChild(domElement)                                   // attach it to the page. this inserts the element inside...<div id="root"></div>
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])      
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',                          // create and <a> tag
    props: {                            // attributes of the tag
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'    // text inside the tag
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
# VUE3 CHEATSHEET FOR DEVELOPERS
credits to <a href="https://learnuve.co">learnvue.co</a>
<hr>

## CREATING YOUR APP WITH VITE
### Quick Vue3 development environment
```shell
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```
## TEMPLATE SYNTAX
### Text Interpolation Options
```js
< span > {{ msg }} </ span >
< span v-text = 'msg' ></ span >
```

### Setting Inner HTML
```js
< span v-html = 'rawHTML' ></ span >
```

### Can use JS Expressions; NOT JS Statements
```js
✅ < span > {{ msg. reverse () }} </ span >
❌ < span > {{ let msg = 'hi' }} </ span >
```

## DIRECTIVES
```js
v-if        //Puts el in DOM if true
v-else-if   //Like a usual conditional
v-else      //Like a usual conditional
v-show      //Toggles display CSS value
v-text      //Sets the inner text
v-html      //Sets the inner HTML
v-for       //Loop through an array/obj
v-on or @   //Listens to DOM events
v-bind or : //Reactive updates attribute
v-model     //Two way data binding
v-once      //Sets val once; Never update
```

## CONDITIONAL RENDERING
### Add/Remove Element from DOM w/ Boolean
```js
< div v-if = 'date == today' >...</ div >
< div v-else-if = '!done' >...</ div >
< div v-else >...</ div >
```

### Toggles display CSS instead of editing DOM
```js
< div v-show = 'date == today' >...</ div >
```

## HANDLING EVENTS
### Capture and event and call a method
```js
<div v-on:click = 'count' >Increase</div>
<!-- SHORTHAND -->
<div @click = 'count' >Increase</div>
```

### Method is passed a Native DOM Cvent
```js
const count = (event) => {
console. log (event. target )
}
```

### Event modifiers (usage: v-on:click.stop)
```js
.stop       //Stops event propagation
.once       //Can only trigger event once
.prevent    //Calls evt.preventDefault
.self       //Don't send if target = child
```
## LIST RENDERING
### Basic Loop Over Array
```js
< li v-for =' item in items' :key = 'item' >
{{ item }}
</ li >
```
### Loop and Track Index
```js
< li v-for ='( item , index ) in items'>
{{ index }} : {{ item }}
</ li >
```

### Loop Values in Object
```js
< li v-for ='obj in objects'>
{{ obj }}
</ li >
```

## BINDING DATA
### Simple Binding
```js
< div v-bind:id = ' objectI D ' >...</ div >
<!-- SHORTHAND -->
< div :id = ' objectID ' >...</ div >
```

### Two way binding with data and input
```js
< input v-model = ' email ' />
```

### Input Modifiers
```js
.lazy       //updates on change event
.trim       //removes extra whitespace
```

### Use Objects to Bind Class/Styles
```js
< input :class = ' {error: hasError} ' />
< input :style = ' {margin: space+ "px" } ' />
```

## BIND DATA BETWEEN CHILD & PARENT
Use v-bind to pass data from parent to child and emit a custom event to send data back.

### In Parent, Bind Data & Set Listener to Update
```js
< custom :msg = ' s ' @update = ' s = $event ' />
```

### In Child, Send Back Using emit(event, data)
```js
context. emit ( 'update' , 'hello world' )
```
## SLOTS
Slots allow for content injection from a parent component to a child component.

## BASIC SLOTS
### Child Component (MyButton.Vue)
```js
< div >
    Hello World
    < slot ></ slot >
</ div >
```

### Parent Component
```js
<my-button>
    This content will replace the slot
</my-button>
```

## NAMED SLOTS
Useful when you have multiple slots. If
unnamed, name is 'default'.

### Child Component (MyButton.Vue)
```js
< div >
    < slot name= 'top' ></ slot >
    < slot name= 'bottom' ></ slot >
</ div >
```

### Name Slots in the Parent Component
```js
<my-button>
    < template v-slot:top > // ...
    </ template >
    < template v-slot:bottom > // ...
    </ template >
</my-button>
```

## SCOPED SLOTS
Give parent component access to child data.

### Child Component (MyButton.Vue)
```js
< div >
    < slot v-bind:post = 'post' >
        {{ post . title }}
    </ slot >
</ div >
```

### Parent Has Access to MyButton post data
```js
< my-button >
    < template v-slot:default = ' slotData ' >
        {{ post .author }}
    </ template >
</ my-button >
```

## DYNAMIC COMPONENTS
Changes the rendered component - finds a registered component with the given name.
```js
<component :is = ' componentName ' />
```

## KEEP-ALIVE ELEMENTS
Stores a cached version of dynamic components when not visible. Avoids having to create a new component whenever toggled.
```js
< keep-alive >
<component :is = ' componentName ' />
</ keep-alive >
```
## COMPOSITION API
Everything returned by setup() is exposed to the template.
```js
import { ref , reactive } from 'vue'
export default {
    setup (props, context) {
        const val = ref ( 'example' )
        const obj = reactive ({ count : 0 })

        const evtHandler = () => { /*...*/ }

        return {
            val , obj , evtHandler
        }
    }
}
```
### SETUP() CONTEXT OBJECT PROPERTIES
```js
attrs       //Has component's attributes
slots       //Has component's slots
emit        //Function to emit events
```

## VUEJS LIFECYCLE HOOKS
```js
*beforeCreate       //Use setup() instead
*created            //Use setup() instead
onBeforeMount       //Before mounting DOM
onMounted           //DOM can be accessed
onBeforeUpdate      //Reactive data changes
onUpdated           //DOM has been updated
onBeforeUnmount     //Component still complete
onUnmounted         //Teardown complete
```

### EXAMPLE LIFECYCLE HOOK CODE
```js
import { onMounted } from 'vue'
// ...
setup () {
    onMounted (() => {
        console. log ( 'component mounted!' )
    }
}
```

## VUE GLOBAL METHODS
```js
mount()         //Mount component to DOM
forceUpdate()   //Force re-render
nextTick()      //Runs func next update
destroy()       //Destroy component/app
```

## COMPUTED PROPERTIES
A computed property is a value that is
calculated using one or more other properties.
```js
setup () {
    const a = ref (1)
    const b = computed (() => a.value * 2)
    return { a, b }
}
```

## WATCHEFFECT()
Listens to reactive dependencies and runs a method when one changes. Als runs on init.
```js
setup () {
    const site = ref ( 'learnvue.co' )
    watchEffect (() => {
        console. log ( site .value)
    })
return { site }
}
```

## TEMPLATE REFS
Give access to DOM elements.
```js
// template
< div ref= 'example' > Example Div </ div >
// script
setup () {
    const example = ref ( 'learnvue.co' )
    // wait for DOM to mount
    onMounted (() => {
        console. log ( example .value)
    })
    return { example }
}
```

## VUE OBJECT API OPTIONS
If you decide not to use the Composition API, your components will look similar to Vue2 with the Options API.
```js
data()      //Init reactive data
props       //Data visible by parent
mixins      //Declares mixins
components  //Registers children
methods     //Set of Vue methods
watchers    //Watch values for change
computed    //Cached reactive methods
```

## TOP VUE LIBRARIES
```js
vue-cli     //Command Line Interface
vue-router  //Handles Routing for SPAs
vuex State  //Management Library
```

## GREAT VUE UI RESOURCES
- Vuetify 
- Bootstrap Vue 
- UIV
- VueStrap 
- Vue Material 
- Mint UI
- Element UI 
- Vuecidity 
- iView
- Buefy 
- DeepReader 
- KeenUI
- Quasar 
- AT UI 
- Vulma
- Fish-UI 
- Muse UI 
- Vue Blu


## CREDITS
All thanks to <a href="matt@learnvue.co">Matt from LearnVue</a>.
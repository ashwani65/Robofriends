import React ,{ Component }from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state={
                robots: [],                
               
                searchfield: ''
            }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>this.setState({robots:users}))
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const { robots ,searchfield } = this.state;
        const filterRobots=robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        if(!robots.length){
            return <h1>Loading</h1>
        }

        else{
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        );
        }
    }
        
}
export default App;

//States >> props
//PROPS are simply things that comes out of the state
//STATE is simply a discription of our app ,like robots and whatever is entered into a searchbox,state is able to change
//so a parent feeds states in a child component and as soon as child component receves a state ,its a property that child can never its property ,its parent tells it what the state is and child recieves it as robots

//constructor() and render() are prebuilt in react anytime you make your own methods on a component use     
//"onSearchChange=(event)=>{... }" this syntax arrow function this make sures that this vaule is according to where it was created which is the app in our case

/*We have our app components that has two states Robots and searchfield
-because app owns the state so any components that has a state uses the  class syntax so they can use constructor to create 
this.state(and this state is what changes in an app,its what  describes the app),remember  when we said virtual DOM is just an JS object ,virtual DOM is just an object that collects entier this.state and react uses to render and pass them down as props to these components,so these components which are just pure functions,can render
App is the only thing that can change the state,but it can pass down things such as props like we pass down onSearchChange to the searchbox and the everytime there is onchange on input,it lets the App know hey there is change run ,onSearchChange function with the even and update the state to whatever we type ,

-now with the information that we have from the searchBox ,we can now communicate with cardlist and tell it ,I want to filter the robot state to now have only includes in searchfield,
instead of passing "this.state.robots" we just passed the "filteredrobots" 

In real life when we start of this app robots: [] actually be an empty array,we haven't grab the user

react comes with component called "lifecycle method" (https://reactjs.org/docs/react-component.html#componentwillunmount)
--Mounting
-constructor()
-componentWillMount()
-render()-everytime states changes render() gets executed
-componentDidMount()

--Updating
-static getDerivedStateFromProps()
-shouldComponentUpdate()
-render()
-getSnapshotBeforeUpdate()
-componentDidUpdate()

--Unmounting(when we move to differnt page component gets unmounted)
-componentWillUnmount()
when i refresh the page the app component gets mounted ,into the document with id='root' so in index.html file we are replacing <div id='root'> and adding our entire App,so mounting is start of the app
window.fetch()-it is method to make request to the servers
import { robots } from './robots';

"sudo npm run build" for proper and minified version of everything //helps for  optimizing web

 console.log('constructor');//just for checking the order of execution

 // .then(users =>{}),//we will get loading

 this.setState({searchfield: event.target.value})//changing the state so that search field always gets updated
        //now filtering the robots according to the searchfield
        // console.log(filterRobots);


// console.log('render');
return <h1>Loading</h1>//if users are more and you want to show the message
 // robots: robots,

        */
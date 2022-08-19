import React, { Component} from 'react';
import styled from 'styled-components';
import './Sidebar.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const Nav = styled.div`
  background: #010101;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position:fixed;
  width:100%;
  top:0%;
  z-index:9;
`;

const NavIcon = styled.nav`
  cursor:pointer;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: rgba(0,0,0,0.8);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding:10px 30px
`;


class Sidebar extends Component{


  constructor(props){

    super(props)
    this.state={
      sidebar:false,
      color:'teal',
      array :[],
      algoType: '',
      arraySize: 100,
      width :5,
      visual:'flex-end',
      speed:1
    }

  }
  componentDidMount(){
    this.GenerateArray()

  }


  showSidebar(){
    this.setState({sidebar:!this.state.sidebar})
  }
  GenerateArray(){
    const array = []
    const max = this.state.arraySize?this.state.arraySize:100
    for(let i =0 ;i < max;i++){
        array.push(this.RandomNumber(10,300))
    }
    this.setState({array:array})
    this.setState({color:'teal'})

  }
  RandomNumber(min,max){

    return Math.floor(Math.random()*(max-min+1)+min)
  }
  setAlgorithm(event){
    this.setState({color:'teal'})
    this.setState({algoType:event.target.value})
  }
  setArraySize(event){
    this.setState({arraySize:parseInt(event.target.value)})
    this.setState({width:Math.ceil(500/parseInt(event.target.value))})
    this.setState({color:'teal'})
    const array = []
    const max = event.target.value
    for(let i =0 ;i < max;i++){
        array.push(this.RandomNumber(10,300))
    }
    this.setState({array:array})

  }
  setVisualType(event){
       this.setState({visual:event.target.value})
  }
  setSpeed(event){
      const value = event.target.value
      if(value === '0.25'){
        this.setState({speed:0.25})
      }
      else if(value === '0.50'){
        this.setState({speed:0.50})
      }
      else if(value === '0.75'){
        this.setState({speed:0.75})
      }
      else if(value === '1.0'){
        this.setState({speed:1})
      }
      else if(value === '1.25'){
        this.setState({speed:1.25})
      }
      else if(value === '1.50'){
        this.setState({speed:1.5})
      }
      else if(value === '1.75'){
        this.setState({speed:1.75})
      }
      else if(value === '2.0'){
        this.setState({speed:2})
      }
      else if(value === '3.0'){
        this.setState({speed:3})
      }
      else if(value === '4.0'){
        this.setState({speed:4})
      }
      // console.log(this.state.speed)
  }
  Control(playing){
    if(playing){
      this.setState({sidebar:!this.state.sidebar,})
    }

  }
  render(){
    // console.log("rendered")
    return (
      <React.Fragment>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="nav_bar" style={{display:"block"}}>
          <Nav>
            <NavIcon >
              {
                !this.state.sidebar?<p className ="main_logo" onClick={this.showSidebar.bind(this)}>Start Visualizing <span><ArrowLeftIcon fontSize="large"/></span></p>:<div></div>
              }
              <h1 className="text-center sub_header" style={{color:"white",fontWeight:'bold',display:'none',zIndex:'20'}}>Learn Sorting with Fun :)</h1>
            </NavIcon>
            {/* <NavIcon to='/'>
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon> */}
          </Nav>
          </div>
          
          <SidebarNav sidebar={this.state.sidebar}>
            <SidebarWrap>
              <NavIcon >
                <AiIcons.AiOutlineClose onClick={this.showSidebar.bind(this)} />
              </NavIcon>
              <div className="algo_select">
                <select className="algo_options" placeholder="Selct Algorithm" onChange={this.setAlgorithm.bind(this)}>
                  <option value="none" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Select Algorithm</option>
                  <option value="bubble" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Bubble Sort
                  </option>
                  <option value="merge" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Merge Sort</option>
                  <option value="selection" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Selction Sort</option>
                  <option value="insertion" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Insertion Sort
                  </option>
                  <option value="quick" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Quick Sort
                  </option>
                  <option value="heap" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Heap Sort
                  </option>
                </select>
              </div>
              <div className="size_select">
                <select className="size_options" placeholder="Selct Algorithm" onChange={this.setArraySize.bind(this)}>
                  <option value="none" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Array Size</option>
                  <option value='5' style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>5
                  </option>
                  <option value='10' style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>10
                  </option>
                  <option value="20" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>20</option>
                  <option value="30" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>30</option>
                  <option value="40" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>40
                  </option>
                  <option value="50" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>50
                  </option>
                  <option value="60" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>60
                  </option>
                  <option value="70" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>70
                  </option>
                  <option value="80" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>80
                  </option>
                  <option value="90" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>90
                  </option>
                  <option value="100" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>100
                  </option>
                </select>
              </div>
              <div className="visual_select">
                <select className="visual_options" placeholder="Selct Algorithm" onChange={this.setVisualType.bind(this)}>
                  <option value="flex-end" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Visual Type</option>
                  <option value="flex-start" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Flex-Top
                  </option>
                  <option value='center' style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Flex-Middle
                  </option>
                  <option value="flex-end" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Flex-End</option>
                </select>
              </div>
              <div className="speed_select">
                <select className="speed_options" placeholder="Selct Algorithm" onChange={this.setSpeed.bind(this)}>
                  <option value="0.25" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>Speed</option>
                  <option value="0.25" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>0.25x
                  </option>
                  <option value='0.50' style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>0.5x
                  </option>
                  <option value='0.75' style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>0.75x
                  </option>
                  <option value="1.0" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>1x</option>
                  <option value="1.25" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>1.25x</option>
                  <option value="1.5" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>1.5x</option>
                  <option value="1.75" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>1.75x</option>
                  <option value="2.0" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>2x</option>
                  <option value="3.0" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>3x</option>
                  <option value="4.0" style={{color:'black',backgroundColor:'transparent',fontSize:'1.1em',padding:'10px 0px'}}>4x</option>
                </select>
                
              </div>
              <div className="generate" onClick={this.GenerateArray.bind(this)}>
                Randomize Array
              </div>
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
        <SortingVisualizer array = {this.state.array} size={this.state.arraySize} width={this.state.width} color = {this.state.color} algo = {this.state.algoType}
        visual ={this.state.visual } speed ={this.state.speed}
        />
      </React.Fragment>
  );

  }

  
};

export default Sidebar;

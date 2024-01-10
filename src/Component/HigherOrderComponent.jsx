import React, { Component } from 'react'


export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    } 

    
renderList = ()=>{  
const Data = this.state.userData
const data = Data.map((d)=>{
return (
<div key={d.id}>
  <ul>
    <span id='id'>Id:{d.id}</span>
    <span className= "name">Name: {d.name}</span>
    <span className= "user_type"> Usertype: {d.user_type}</span>
 <span className= "age"> Age: {d.age}</span> 
     <span className = "year"> Year: {d.years}</span> 
  </ul> 
</div>)}) 
return data }

filter = () =>{
const  Dat = this.state.userData
const filterData = Dat.filter((ele)=>{
if(ele.user_type =="Designer"){
return ele}}).map((c)=>{
   return (
    <div key={c.id}>
      <ul>
        <span id='id'>Id:{c.id}</span>
        <span className= "name">Name: {c.name}</span>
        <span className= "user_type"> Usertype: {c.user_type}</span>
        {/* <span className= "age">{c.age}</span>
        <span className = "year">{c.years}</span> */}
      </ul> 
    </div>)
})
return filterData}
filterJ = () => {
    
const Data = this.state.userData;

const filterJ = Data.filter((ele) => {if(ele.name[0] == "J"){
    return ele}}).map((c) => {
    return (
        <div key={c.id}>
          <ul>
            <span id='id'>Id:{c.id}</span>
            <span className="name">Name: {c.name}</span>
            <span className="user_type">  Usertype: {c.user_type}</span>
            {/* <span className="age">{c.age}</span>
            <span className="year">{c.years}</span> */}
          </ul>
        </div>)
}
)
return filterJ
}

age = () => {
    const ageData = this.state.userData;
  
    const ageFiltered = ageData
      .filter((ele) => ele.age > 28 && ele.age <= 50)
      .map((k) => (
        <div key={k.id}>
          <ul>
            <span id='id'>Id:{k.id}</span>
            <span className="name"> Name: {k.name}</span>
            <span className="user_type">  Usertype: {k.user_type}</span>
            <span className="age">{k.age}</span>
            {/* <span className="year">{k.years}</span> */}
          </ul>
        </div>
      ));
  
    return ageFiltered;
  }

totalDesigner = () =>{
    const total = this.state.userData;
   const filterYear = total.filter((ele)=> 
   {
  if(ele.user_type =="Designer"){
        return ele}
   } ).reduce((ac,c)=>{
      return ac+ c.years  
    },0 )
    return  filterYear}



render() {
return(
<>
<div className='r'><h3>Display all items</h3>{ this.renderList()}</div>
<div className='f'><h3>Display based on type</h3>{this.filter()}</div>
<div className='fj'> <h3>Filter all data starting with j</h3>{this.filterJ()}</div>
<div className='d'> <h3>Total years of the designers</h3>{this.totalDesigner()}</div>
<div className='a'> <h3>Age great then 28  and age less than 50 or equal</h3>{this.age()}</div>
</>)}}










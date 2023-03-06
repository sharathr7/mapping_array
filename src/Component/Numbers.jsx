import React from 'react'

function Numbers({number}) {

  const isPrime = (num) => {
     for(let i = 2; i < num; i++)
        if(num%i === 0)
        return false;
        return num > 1;
  }
   
  const isEven = (num) => {
      return num%2 === 0;
  }

  const getColor = (num) => {
     let color;
     if(isEven(num)) {
        color = "#21bf73"; //even
     }
     else {
        color = "#fddb3a" //odd
     }
     if(isPrime(num)) color = '#fd5e53' //prime 
     return color;
  }
    
  return (
    <>
        <div className='main_container'>
        <div className='container'>
       {number.map(ele => <div className='box' style={{background : getColor(ele)}}> <h2>{number[ele]}</h2> </div>)}
    </div>
        </div>
    </>
  )
}

export default Numbers
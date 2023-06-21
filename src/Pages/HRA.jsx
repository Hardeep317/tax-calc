import React, { useState } from 'react'
import "./Hra.css"

function HRA() {

  const [basicSalary, setBasicSalary] = useState('');
  const [da, setDa] = useState('');
  const [comission, setComission] = useState('');
  const [received, setReceived] = useState('');
  const [paid, setPaid] = useState('');
  const [metro, setMetro] = useState(false);
  const [exemption , setExemption] = useState('');
  const [taxable, setTaxable] = useState('');


  const handleSalary = (e) =>{
    setBasicSalary(e.target.value)
  }

  const handleDa = (e) =>{
    setDa(e.target.value)
  }

  const handleComission = (e) =>{
    setComission(e.target.value)
  }

  const handleReceived = (e) =>{
    setReceived(e.target.value)
  }

  const handlePaid = (e) =>{
    setPaid(e.target.value)
  }
  const handleMetro = (e) =>{
    setMetro(!metro)
  }

  const handleClick = (e) => {
    e.preventDefault();

    if(metro){
      const salary = +(basicSalary*0.5)+ +(da)+ +(comission/100*basicSalary);
      console.log(salary)
      const diff = paid - (basicSalary*0.10);

      if(diff < 0){
        setExemption(0)
        setTaxable(received)
        return
      }else{
        setExemption(Math.min(salary, received, diff))
      }
      const res = received - diff ;
      if(res > 0){
      setTaxable(res)
      }else{
        setTaxable(salary)
      }
    }else{
      const salary = +(basicSalary*0.4)+ +(da)+ +(comission/100*basicSalary);
      const diff = paid - (basicSalary*0.10);
      console.log(salary)
      if(diff < 0){
        setExemption(0)
        setTaxable(received)
        return
      }else{
        setExemption(Math.min(salary, received, diff))
      }
      const res = received - diff ;

      if(res > 0){
      setTaxable(res)
      }else{
        setTaxable(salary)
      }
    }
  }

  const handleReset = () => {
    setBasicSalary('');
    setComission('');
    setDa('');
    setExemption('');
    setReceived('');
    setTaxable('');
    setPaid('')
  }

  return (
    <div>
      <div className="button">
        <button className='temp_btn'>HOUSE RENT ALLOWANCE</button>
      </div>
      <div className="m-container">
        <div className='input-div-o'>
          <label htmlFor="">Basic salary</label>
          <input type="number" value={basicSalary} onChange={handleSalary} className='inputs'/>
        </div>
        <div className='input-div'>
          <label htmlFor="">DA forming part of salary</label>
          <input type="number" value={da} onChange={handleDa} className='inputs'/>
        </div>
        <div className='input-div-o'>
          <label htmlFor="">Commission (as % of turnover achieved by the employee)</label>
          <input type="number" value={comission} onChange={handleComission} className='inputs'/>
        </div>
        <div className='input-div'>
          <label htmlFor="">HRA Received</label>
          <input type="number" value={received} onChange={handleReceived} className='inputs'/>
        </div>
        <div className='input-div-o'>
          <label htmlFor="">Rent Paid</label>
          <input type="number" value={paid} onChange={handlePaid} className='inputs'/>
        </div>
        <div className='input-div'>
          <label htmlFor="">Tick if residing in metro city.</label>
          <input type="checkbox" value={metro} onChange={handleMetro} className='input-check'/>
        </div>
        <div className='input-div-o'>
          <label htmlFor="">Exempted House Rent Allowance</label>
          <input type="number" value={exemption} className='inputs' readOnly/>
        </div>
        <div className='input-div'>
          <label htmlFor="">Taxable House Rent Allowance</label>
          <input type="number" value={taxable} className='inputs' readOnly/>
        </div>

        <button onClick={handleClick} className='calc_btn'>Calculate</button>
        <button onClick={handleReset} className='reset_btn'>Reset</button>
      </div>
    </div>
  )
}

export default HRA
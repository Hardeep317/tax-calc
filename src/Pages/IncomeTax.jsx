import React, { useState } from "react";
import "./Income.css";

function IncomeTax() {
  const [component, setComponent] = useState("individual");
  const [toggleOtherSource, setToggleOtherSource] = useState(false);
  const [toggleDeduction, setToggleDeduction] = useState(false);
  const [bac, setBac] = useState(false);
  const [salary, setSalary] = useState("");
  const [house, setHouse] = useState("");
  const [capital, setCapital] = useState("");
  const [other, setOther] = useState("");
  const [profits, setProfits] = useState("");
  const [agriculture, setAgriculture] = useState("");
  const [deduction, setDeduction] = useState("");
  const [interest, setInterest] = useState("");
  const [comission, setComission] = useState("");
  const [lottery, setLottery] = useState("");
  const [taxable, setTaxable] = useState("");
  const [cess, setCess] = useState("");
  const [result, setResult] = useState("");
  const [relief, setRelief] = useState("");
  const [accessed, setAccessed] = useState("");
  const [liability, setLiability] = useState("");
  const [domTaxable, setDomTaxable] = useState("");
  const [domCess, setDomCess] = useState("");
  const [forTaxable, setForTaxable] = useState("");
  const [forCess, setForCess] = useState("");

  const handlePayer = (e) => {
    setComponent(e.target.value);
  };

  const handleSection = (e) => {
    setBac(e.target.value);
  };

  const handleSalary = (e) => {
    setSalary(e.target.value);
  };

  const handleHouse = (e) => {
    setHouse(e.target.value);
  };

  const handleCapital = (e) => {
    setCapital(e.target.value);
  };

  const handleProfits = (e) => {
    setProfits(e.target.value);
  };

  const handleAgriculture = (e) => {
    setAgriculture(e.target.value);
  };

  const handleDeduction = (e) => {
    setDeduction(e.target.value);
  };

  const handleRelief = (e) => {
    setRelief(e.target.value);
  };

  const handleInterest = (e) => {
    setInterest(e.target.value);
    setOther(+e.target.value + +comission + +lottery);
  };

  const handleComission = (e) => {
    setComission(e.target.value);
    setOther(+e.target.value + +interest + +lottery);
  };

  const handleLottery = (e) => {
    setLottery(e.target.value);
    setOther(+e.target.value + +comission + +interest);
  };

  const handleCalulate = () => {
    const gross =
      +salary +
      +house +
      +capital +
      +other +
      +profits +
      +agriculture -
      +deduction -
      25000;

    if (gross > 0 && gross < 300000) {
      setTaxable(0);
    } else if (gross > 300000 && gross < 600000) {
      setTaxable(Math.round(gross * 0.05));
    } else if (gross > 600000 && gross < 900000) {
      setTaxable(Math.round(gross * 0.1));
    } else if (gross > 900000 && gross < 1200000) {
      setTaxable(Math.round(gross * 0.15));
    } else if (gross > 1200000 && gross < 1500000) {
      setTaxable(Math.round(gross * 0.2));
    }
    setCess(Math.round(taxable / 22));

    setResult(cess + taxable);
  };

  const handleHuf = () => {
    if (salary > 0 && salary < 300000) {
      setTaxable(0);
    } else if (salary > 300000 && salary < 600000) {
      setTaxable(Math.round(salary * 0.05));
    } else if (salary > 600000 && salary < 900000) {
      setTaxable(Math.round(salary * 0.1));
    } else if (salary > 900000 && salary < 1200000) {
      setTaxable(Math.round(salary * 0.15));
    } else if (salary > 1200000 && salary < 1500000) {
      setTaxable(Math.round(salary * 0.2));
    }
    setCess(Math.round(taxable / 22))

    setLiability(taxable + cess)

    setAccessed(liability - relief)
  }

  const handleDom= () => {
    
    setDomTaxable(+(salary * 0.3))
    setDomCess(Math.round(domTaxable / 22))

    setLiability(domTaxable + domCess)

    setAccessed(liability - relief)
  }

  const handleFor= () => {
    
    setForTaxable(+(salary * 0.25))
    setForCess(Math.round(forTaxable / 25))

    setLiability(forTaxable + forCess)

    setAccessed(liability - relief)
  }


  const handleReset = () => {
    setAccessed('');
    setAgriculture('');
    setBac('');
    setCapital('');
    setCess('');
    setComission('');
    setDeduction('');
    setDomCess('');
    setDomTaxable('');
    setForCess('');
    setForTaxable('');
    setHouse('');
    setInterest('');
    setLiability('');
    setLottery('');
    setOther('');
    setProfits('');
    setResult('');
    setSalary('');
    setTaxable('');
    setToggleDeduction(false);
    setToggleOtherSource(false);
  }
  return (
    <div>
      <div>
        <button className="temp_btn">Advance Tax Calculator</button>
      </div>
      <div className="m-container">
        <div className="input-div-o">
          <label htmlFor="">Tax Payer</label>
          <select
            name=""
            onChange={handlePayer}
            className="inputs"
            id="tax-type"
          >
            <option value="">Select </option>
            <option value="individual">Individual </option>
            <option value="huf">HUF </option>
            <option value="aop">AOPs/BOI </option>
            <option value="domestic">Domestic Company </option>
            <option value="foreign">Foreign Company </option>
            <option value="firms">Firms</option>
            <option value="llp">LLP</option>
          </select>
        </div>
        {component === "individual" && (
          <div>
            <div className="input-div">
              <label htmlFor="">
                Whether opting for taxation under Section 115BAC?
              </label>
              <select
                name=""
                onChange={handleSection}
                className="inputs"
                id="tax-type"
              >
                <option value="">Select </option>
                <option value="true">Yes </option>
                <option value="false">No </option>
              </select>
            </div>
            <div className="input-div-o">
              <label htmlFor="">Male / Female / Senior Citizen</label>
              <select name="" className="inputs" id="tax-type">
                <option value="">Select </option>
                <option value="male">Male </option>
                <option value="female">Female </option>
                <option value="senior">Senior Citizen </option>
                <option value="super">Super Senior Citizen </option>
              </select>
            </div>
            <div className="input-div">
              <label htmlFor="">Residential Status</label>
              <select name="" className="inputs" id="tax-type">
                <option value="">Select </option>
                <option value="resident">Resident </option>
                <option value="non-resident">Non Residence </option>
                <option value="special">Not Ordinary Resident </option>
              </select>
            </div>
            <div className="input-div-o">
              <label htmlFor="">
                Income from Salary (Income from salary after standard deduction
                of Rs.50000.)
              </label>
              <input
                type="number"
                value={salary}
                onChange={handleSalary}
                name=""
                className="inputs"
                id=""
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Income From House Property </label>
              <input
                type="number"
                value={house}
                onChange={handleHouse}
                name=""
                className="inputs"
                id=""
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Capital Gains</label>
              <input
                type="number"
                value={capital}
                onChange={handleCapital}
                name=""
                className="inputs"
                id=""
              />
            </div>
            <div className="input-div-o">
              <label htmlFor="">Income From Other Sources</label>
              <div>
                <button
                  className="details-btn"
                  onClick={() => setToggleOtherSource(!toggleOtherSource)}
                >
                  {toggleOtherSource ? "Hide Details" : "Show Details"}
                </button>
                <input
                  type="number"
                  name=""
                  className="inputs"
                  value={other}
                  id=""
                  readOnly
                />
              </div>
            </div>
            {toggleOtherSource && (
              <div className="hidden-div">
                <div className="hidden-input-div">
                  <label htmlFor="">Interest</label>
                  <input
                    value={interest}
                    onChange={handleInterest}
                    type="number"
                    name=""
                    className="inputs"
                    id=""
                  />
                </div>
                <div className="hidden-input-div">
                  <label htmlFor="">Comission/ Other Income</label>
                  <input
                    type="number"
                    value={comission}
                    onChange={handleComission}
                    name=""
                    className="inputs"
                    id=""
                  />
                </div>
                <div className="hidden-input-div">
                  <label htmlFor="">
                    Winnings from Lottery, Crossword Puzzles, etc.
                  </label>
                  <input
                    type="number"
                    value={lottery}
                    onChange={handleLottery}
                    name=""
                    className="inputs"
                    id=""
                  />
                </div>
              </div>
            )}
            <div className="input-div">
              <label htmlFor="">
                Profits and Gains of Business or Profession (enter profit only)
              </label>
              <input
                type="number"
                name=""
                value={profits}
                onChange={handleProfits}
                className="inputs"
                id=""
              />
            </div>
            <div className="input-div-o">
              <label htmlFor="">Agricultural Income</label>
              <input
                type="number"
                name=""
                value={agriculture}
                onChange={handleAgriculture}
                className="inputs"
                id=""
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Deductions</label>
              <div>
                <button
                  className="details-btn"
                  onClick={() => setToggleDeduction(!toggleDeduction)}
                >
                  {toggleDeduction ? "Hide Details" : "Show Details"}
                </button>
                <input
                  type="number"
                  name=""
                  className="inputs"
                  id=""
                  value={deduction}
                  readOnly
                />
              </div>
            </div>

            {toggleDeduction && (
              <div className="hidden-div">
                <div className="hidden-input-div">
                  <label htmlFor="">PFF</label>
                  <input
                    type="number"
                    max={150000}
                    name=""
                    value={deduction}
                    onChange={handleDeduction}
                    className="inputs"
                    id=""
                  />
                </div>
              </div>
            )}

            <div className="input-div-o">
              <label htmlFor="">Income Tax</label>
              <input
                type="number"
                name=""
                value={taxable}
                className="inputs"
                id=""
                readOnly
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Education Cess</label>
              <input
                type="number"
                name=""
                value={cess}
                className="inputs"
                id=""
                readOnly
              />
            </div>
            <div className="input-div-o">
              <label htmlFor="">Payable Tax</label>
              <input
                type="number"
                name=""
                value={result}
                className="inputs"
                id=""
                readOnly
              />
            </div>
            <div>
              <button className="calc_btn" onClick={handleCalulate}>
                Calculate
              </button>
              <button className="reset_btn" onClick={handleReset}>Reset</button>
            </div>
          </div>
        )}

        {(component === "huf" || component === 'aop') && (
          <div>
            <div className="input-div">
              <label htmlFor="">
                Whether opting for taxation under Section 115BAC?
              </label>
              <select
                name=""
                onChange={handleSection}
                className="inputs"
                id="tax-type"
              >
                <option value="">Select </option>
                <option value="true">Yes </option>
                <option value="false">No </option>
              </select>
            </div>

            <div className="input-div-o">
              <label htmlFor="">
              Net Taxable Income
              </label>
              <input type="number" value={salary} onChange={handleSalary} name="" className="inputs" id="" />
            </div>

            <div className="input-div">
              <label htmlFor="">Income Tax</label>
              <input
                type="number"
                name=""
                value={taxable}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div-o">
              <label htmlFor="">Health and Education Cess</label>
              <input
                type="number"
                name=""
                value={cess}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Total Tax Liability</label>
              <input
                type="number"
                name=""
                value={liability}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Relief</label>
              <input
                type="number"
                name=""
                value={relief}
                onChange={handleRelief}
                className="inputs"
                id=""
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
              <input
                type="number"
                name=""
                className="inputs"
                id=""
                readOnly
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">Assessed Tax</label>
              <input
                type="number"
                name=""
                value={accessed}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div>
              <button className="calc_btn" onClick={handleHuf}>
                Calculate
              </button>
              <button className="reset_btn" onClick={handleReset}>Reset</button>
            </div>
          </div>

        )}

        {component === "domestic" && (
          <div>
            <div className="input-div">
              <label htmlFor="">
                Whether opting for taxation under Section 115BAC?
              </label>
              <select
                name=""
                onChange={handleSection}
                className="inputs"
                id="tax-type"
              >
                <option value="">Select </option>
                <option value="true">Yes </option>
                <option value="false">No </option>
              </select>
            </div>

            <div className="input-div-o">
              <label htmlFor="">
              Net Taxable Income
              </label>
              <input type="number" value={salary} onChange={handleSalary} name="" className="inputs" id="" />
            </div>

            <div className="input-div">
              <label htmlFor="">Income Tax</label>
              <input
                type="number"
                name=""
                value={domTaxable}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div-o">
              <label htmlFor="">Health and Education Cess</label>
              <input
                type="number"
                name=""
                value={domCess}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Total Tax Liability</label>
              <input
                type="number"
                name=""
                value={liability}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Relief</label>
              <input
                type="number"
                name=""
                value={relief}
                onChange={handleRelief}
                className="inputs"
                id=""
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
              <input
                type="number"
                name=""
                className="inputs"
                id=""
                readOnly
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">Assessed Tax</label>
              <input
                type="number"
                name=""
                value={accessed}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div>
              <button className="calc_btn" onClick={handleDom}>
                Calculate
              </button>
              <button className="reset_btn" onClick={handleReset}>Reset</button>
            </div>
          </div>

        )}

        {component === "foreign" && (
          <div>
            <div className="input-div">
              <label htmlFor="">
                Whether opting for taxation under Section 115BAC?
              </label>
              <select
                name=""
                onChange={handleSection}
                className="inputs"
                id="tax-type"
              >
                <option value="">Select </option>
                <option value="true">Yes </option>
                <option value="false">No </option>
              </select>
            </div>

            <div className="input-div-o">
              <label htmlFor="">
              Net Taxable Income
              </label>
              <input type="number" value={salary} onChange={handleSalary} name="" className="inputs" id="" />
            </div>

            <div className="input-div">
              <label htmlFor="">Income Tax</label>
              <input
                type="number"
                name=""
                value={forTaxable}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div-o">
              <label htmlFor="">Health and Education Cess</label>
              <input
                type="number"
                name=""
                value={forCess}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Total Tax Liability</label>
              <input
                type="number"
                name=""
                value={liability}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Relief</label>
              <input
                type="number"
                name=""
                value={relief}
                onChange={handleRelief}
                className="inputs"
                id=""
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
              <input
                type="number"
                name=""
                className="inputs"
                id=""
                readOnly
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">Assessed Tax</label>
              <input
                type="number"
                name=""
                value={accessed}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div>
              <button className="calc_btn" onClick={handleFor}>
                Calculate
              </button>
              <button className="reset_btn" onClick={handleReset}>Reset</button>
            </div>
          </div>

        )}

        
{component === "firms" && (
          <div>
            <div className="input-div">
              <label htmlFor="">
                Whether opting for taxation under Section 115BAC?
              </label>
              <select
                name=""
                onChange={handleSection}
                className="inputs"
                id="tax-type"
              >
                <option value="">Select </option>
                <option value="true">Yes </option>
                <option value="false">No </option>
              </select>
            </div>

            <div className="input-div-o">
              <label htmlFor="">
              Net Taxable Income
              </label>
              <input type="number" value={salary} onChange={handleSalary} name="" className="inputs" id="" />
            </div>

            <div className="input-div">
              <label htmlFor="">Income Tax</label>
              <input
                type="number"
                name=""
                value={domTaxable}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div-o">
              <label htmlFor="">Health and Education Cess</label>
              <input
                type="number"
                name=""
                value={domCess}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Total Tax Liability</label>
              <input
                type="number"
                name=""
                value={liability}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Relief</label>
              <input
                type="number"
                name=""
                value={relief}
                onChange={handleRelief}
                className="inputs"
                id=""
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
              <input
                type="number"
                name=""
                className="inputs"
                id=""
                readOnly
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">Assessed Tax</label>
              <input
                type="number"
                name=""
                value={accessed}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div>
              <button className="calc_btn" onClick={handleDom}>
                Calculate
              </button>
              <button className="reset_btn" onClick={handleReset}>Reset</button>
            </div>
          </div>

        )}
        
{component === "llp" && (
          <div>
            <div className="input-div">
              <label htmlFor="">
                Whether opting for taxation under Section 115BAC?
              </label>
              <select
                name=""
                onChange={handleSection}
                className="inputs"
                id="tax-type"
              >
                <option value="">Select </option>
                <option value="true">Yes </option>
                <option value="false">No </option>
              </select>
            </div>

            <div className="input-div-o">
              <label htmlFor="">
              Net Taxable Income
              </label>
              <input type="number" value={salary} onChange={handleSalary} name="" className="inputs" id="" />
            </div>

            <div className="input-div">
              <label htmlFor="">Income Tax</label>
              <input
                type="number"
                name=""
                value={domTaxable}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div-o">
              <label htmlFor="">Health and Education Cess</label>
              <input
                type="number"
                name=""
                value={domCess}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Total Tax Liability</label>
              <input
                type="number"
                name=""
                value={liability}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div className="input-div">
              <label htmlFor="">Relief</label>
              <input
                type="number"
                name=""
                value={relief}
                onChange={handleRelief}
                className="inputs"
                id=""
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">TDS/TCS/MAT (AMT) Credit Utilized</label>
              <input
                type="number"
                name=""
                className="inputs"
                id=""
                readOnly
              />
            </div>
            
            <div className="input-div">
              <label htmlFor="">Assessed Tax</label>
              <input
                type="number"
                name=""
                value={accessed}
                className="inputs"
                id=""
                readOnly
              />
            </div>

            <div>
              <button className="calc_btn" onClick={handleDom}>
                Calculate
              </button>
              <button className="reset_btn" onClick={handleReset}>Reset</button>
            </div>
          </div>

        )}
      </div>
      
    </div>
  );
}

export default IncomeTax;

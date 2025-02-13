import React, { useState } from 'react'

const Dashboard = () => {
  const [un,setUn]=useState('');
  const [em,setEm]=useState('');
  const [pa,setPa]=useState('');
  const [ge,setGe]=useState('');
  const [ad,setAd]=useState('');
  const [fi,setFi]=useState('');
  const [co,setCo]=useState('');


  return (
    <div>Dashboard
      <br />
      <br />
      <form className='form-1'>
        <label>Username:</label>
        <input type="text" placeholder='username' value={un} onChange={(e)=>setUn(e.target.value)}/>
        <br /><br />
        <label>Email:</label>
        <input type="email" placeholder='email' value={em} onChange={(e)=>setEm(e.target.value)}/>
        <br /><br />
        <label>Password:</label>
        <input type="password" placeholder='password' value={pa} onChange={(e)=>setPa(e.target.value)}/>
        <br /><br />
        <label>Gender:</label>        
        <input type='radio' name='gender' value='male'/>Male
        <input type='radio' name='gender' value='female'/>Female
        <input type='radio' name='gender' value='other'/>Other
        <br /><br />
        <label>Address:</label>
        <input type='text' placeholder='address' value={ad} onChange={(e)=>setAd(e.target.value)}/>
        <br /><br />
        <label>File:</label>
        <input type='file' value={fi} onChange={(e)=>setFi(e.target.value)}/>
        <br /><br />
        <label>Country:</label>
        <select name="country" value={co} onChange={(e)=>setCo(e.target.value)}>

          <option value="US">United States</option>

          <option value="UK">United Kingdom</option>

          <option value="CA">Canada</option>

        </select>
        <br />
        <input type="submit"/>
                {/* <button>Choose file</button> */}
      </form>
    </div>
  )
}

export default Dashboard
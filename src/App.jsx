import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [massive, setMassive] = useState(null);
  const [size, setSize] = useState('');
  const [range, setRange] = useState({ min: 0, max: 0 });




    const calculateMassive = () => {
    const heightInMeters = height / 100;
    const massiveValue = (weight / (heightInMeters * heightInMeters)).toFixed(0);
    setMassive(massiveValue);

    if (massiveValue < 18.5) {
      setSize('low');
    } else if (massiveValue >= 18.5 && massiveValue <= 24.9) {
      setSize('ideal');
    } else {
      setSize('high');
    }

    const minIdeal = (18.5 * heightInMeters * heightInMeters).toFixed(0);
    const maxIdeal = (24.9 * heightInMeters * heightInMeters).toFixed(0);
    setRange({ min: minIdeal, max: maxIdeal });
   };

  
  return (
    <>
    <div className='rounded	border-2 bg-[bg-slate-100]'>
    <label className='m-9 rounded	'>Enter The Weight:</label>
    <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="m-9 rounded border-2	 bg-[bg-slate-100] "
        />
    

    <label className='m-9 rounded	'>Enter The Height:</label>
    <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="m-9 rounded border-2	 bg-[bg-slate-100	] "
        />


    <button className="m-3" onClick={calculateMassive}>CALC</button>
    </div>


<div className=' rounded	border-2 bg-[bg-slate-100]'>
    {massive !== null && (
        <div className='m-3 rounded	 flex flex-col'>
          <div className='flex justify-between m-3'>
          <div className='m-5'>Massive:{massive}</div>
          <div className='m-5'>Size: {size}</div>
          <div className='m-5'> Ideal from: {range.min} Kg To {range.max} Kg</div>
          </div>

          <div className='items-center justify-center'>
            <img className='rounded 	border-2 bg-[bg-slate-100] w-[40%]'
              src={size === 'low' ? 'https://www.aljamila.com/sites/default/files/pictures/69/romance-51.jpg' :
                   size === 'ideal' ? 'https://cdn.alweb.com/thumbs/fashionandbeautytips/article/fit710x532/%D8%AC%D8%B3%D9%85-%D8%A7%D9%84%D8%B3%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B1%D9%85%D9%84%D9%8A%D8%A9.jpg' :
                   'https://st4.depositphotos.com/3332767/21430/i/1600/depositphotos_214300142-stock-photo-overweight-woman-standing-hands-her.jpg'}
            />
          </div>
        </div>
        
      )}
      </div>


    </>
  )
}

export default App

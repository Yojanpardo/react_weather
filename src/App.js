import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  // state principal
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    //prevenir ejecucion
    if (country === '')return;

    const checkAPI = async () => {
      const appId = '648a77ed74c55432b7fa52cbcbe7d3e1';
  
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
      const response = await fetch(url);
      const result = await response.json();
  
      setResult(result);
    }

    checkAPI();
  }, [ city, country ])

  const searchData = data => {
    //Validar que ambos campos estén
    if(data.city === '' || data.country === ''){
      setError(true);
      return;
    }

    //Ciudad y país existen
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  // cargar un componente condicionalmente
  let component;
  if (error){
    // Hay un error
    component = <Error mesaje='Both fields are mandatory'/>;
  }else if (result.cod === '404'){
    component = <Error mesaje='City not found'/>;
  }else{
    //mostrar clima
    component = <Weather 
    result={result}
    />;
  }

  return (
    <div className="App">
      <Header 
        title="React weather App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form 
                searchData={searchData}
              />
            </div>
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

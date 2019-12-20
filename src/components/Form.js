import React, { useState }from 'react';

function Form({searchData}){

    // state del Componente
    // search = state, saveSearch = this.setState({})
    const [search, saveSearch] = useState({
        city : '',
        country : ''
    })

    const handleChange = e => {
        //handle change
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        });
        console.log(search)
    }

    const searchWeather = e => {
        e.preventDefault();

        //pasar al componente principal la consulta de los datos
        searchData(search);
    }

    return(
        <form
            onSubmit={searchWeather}
        >
            <div className="input-field col s12">
                <input 
                    type="text" 
                    name="city" 
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    onChange={handleChange}
                    name="country" 
                    id="country"
                >
                    <option value="">Select a country</option>
                    <option value="US">U.S.A.</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">Spain</option>
                    <option value="MX">Mexico</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4" 
                    value="Search Weather"
                />
            </div>
        </form>
    );
}

export default Form;
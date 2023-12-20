import React from "react";
import { connect } from 'react-redux'
import { setValue } from "../../features/info/infoSlice";
import { useNavigate} from 'react-router-dom';


function Home({setValue}){
    const [input, setInput] = React.useState('')
    const navigate = useNavigate();

    React.useEffect(() => {
        const data = window.localStorage.getItem('my_value')
        if (data) {
            setInput(JSON.parse(data))
        }
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem('my_value', JSON.stringify(input))
    })

    const onSubmitHandler = () => {
        setValue(input); 
        navigate('/about'); 
    };

    return(
        <>
            <p>Home</p>
            <input 
            type="text"
            placeholder="add info"
            value={input}
            onChange={(e) => setInput(e.target.value)} />
            <button onClick={onSubmitHandler}>Submit</button>
        </>
    )
}

export default connect(null, { setValue })(Home);
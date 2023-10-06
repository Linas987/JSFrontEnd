import React, {useEffect, useState} from 'react';

export default function Lister() {

    const [login,setLogin]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    useEffect(()=> {
        setLoading(true);
        fetch(`https://jsazureapi.azurewebsites.net/users`)
            .then((response) =>
                response.json()
            )
            .then(setLogin)
            .then(() => setLoading(false))
            .catch(setError)
    },[])
    if (loading) return <h1>Loading ... </h1>
    if (error) return <pre>{JSON.stringify(error,null,2)}</pre>
    if (!login) return null;
    console.log(login);
    return (
        <div style={{'padding': '0 25% 0 25%'}} className="App justify-content-lg-center text-center">
            {
                login.map((person)=>{
                    return(<div key={person.id} style={{'paddingBottom': '15px'}} className={"row"}>
                            <div className={"row card-body"}>
                                <h2>{person.username}</h2>
                                <i>
                                    Name: '{person.name}' , Surname : '{person.surname}'
                                </i><br/>
                                <i>Account creation on: '{person.date}'</i>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

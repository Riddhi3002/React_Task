import React from "react";
function HooksDemo() {
    const [no,setNo]=React.useState(0);
    return ( <div>
       <h1 className="heading">Example of Hooks</h1>
        <h2>{no}</h2>
        <input type="button" value="ClickMe!" onClick={()=>setNo(25)}/>
    </div> );
}

export default HooksDemo;


//===================================================================//


// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
//     </div>
//   );
// }

// export default App;
import React from 'react'; // used when using class based components
import Header from "./components/Header";

// /* class based component */
// class App extends React.Component {
//   render() {
//     return (
//       <div className = "container">
//           <Header />
//           <h3>Testing Class Based Component</h3>
//       </div>


//     )
//   }
// }


const App = () => {


  return (
    /* It looks like HTML but it is JSX (javaScript extension) */
    <div className="container">

      {/* passing in props - and handle it in the Header file */}
      <Header title = "Task Tracker"/> 
    </div>
  );
}

export default App;

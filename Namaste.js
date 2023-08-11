
       
       // way to  create element by javascript
        // const heading = document.createElement("h1");
        // heading.innerHTML = "This is adarsh singh";
        // const root = document.getElementById("root");
        // root.appendChild(heading); 


              
      const heading = React.createElement("h1",{},"this is adarsh");

      const  heading2= React.createElement("h2",{},"this is heading 2");

      const container = React.createElement("div",{
        id:"container",
      },[heading,heading2],
      );
      
      
      const root = ReactDOM.createRoot(document.getElementById("root"));


      root.render(container)



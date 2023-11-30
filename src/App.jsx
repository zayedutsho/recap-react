import { list } from "postcss";
import { useEffect, useState } from "react";
import CompA from "./Comp/CompA";
// import SimpleForm from "./Comp/SimpleForm";
// import Pass from "./Comp/Conditional/Pass";
// import User from "./Comp/User";

function App() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   const increase = count + 1;
  //   setCount(increase);
  // };
  // const dicrement = () => {
  //   const dincrease = count - 1;
  //   setCount(dincrease);
  // };

  // const myName = "zayed";

  // const multiply = (a, b) => a * b;

  // const myBio = [
  //   { id: 0, userName: "zayed", email: "zayed@gmail.com", phone: 2234433 },
  //   { id: 1, userName: "rifat", email: "Rayed@gmail.com", phone: 2234433 },
  //   { id: 2, userName: "Utsho", email: "Uayed@gmail.com", phone: 2234433 },
  //   { id: 3, userName: "AL", email: "Alayed@gmail.com", phone: 2234433 },
  // ];

  // const handleButtonClick = (a, b) => {
  //   alert(a * b);
  // };

  // const handleTextCopy = () => {
  //   alert("Stop copying my text");
  // };

  // const [names, setNames] = useState(["alex", "jhon", "tarek"]);

  // const addName = () => {
  //   setNames([...names, "zayed"]);
  // };
  // const removeName = () => {
  //   setNames(names.filter((f) => f !== "jhon"));
  // };
  // const updateName = () => {
  //   setNames(names.map((n) => (n === "alex" ? "zayedutsho" : n)));
  // };

  // const addName = () => {
  //   setNames([...names, "zayed utsho"]);
  // };

  // const removeName = () => {
  //   setNames(names.filter((f) => f !== "alex"));
  // };

  // const updateName = () => {
  //   setNames(names.map((f) => (f === "jhon" ? "zayed" : f)));
  // };

  // const [movies, setMovies] = useState({
  //   title: "Expendables",
  //   ratings: 8,
  // });

  // const [movies, setMovies] = useState([
  //   {
  //     id: 1,
  //     title: "superman",
  //     ratings: 17,
  //   },
  //   {
  //     id: 2,
  //     title: "superman2",
  //     ratings: 27,
  //   },
  //   {
  //     id: 3,
  //     title: "superman3",
  //     ratings: 37,
  //   },
  // ]);

  // const handleChange = () => {
  //   setMovies(
  //     movies.map((m) => (m.id === 1 ? { ...movies, title: "man of steel" } : m))
  //   );
  // };

  // const handlChange = () => {
  //   setMovies({ ...movies, ratings: 5 });
  // };

  // const [userName, SetUserName] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   SetUserName(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   alert(`name is:${userName}`);
  //   SetUserName("");
  //   console.log(SetUserName);
  // };
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();
  //     if (data && data.length) setData(data);
  //   }

  //   getData();
  // }, []);

  const name = "zayed";

  return (
    <>
      <CompA name={name} />
      {/* {data.map((item) => (
        <li key={Math.random}>{item.title}</li>
      ))} */}
      {/* <h1>This is Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="border-2  px-10 py-2 rounded-md"
          type="text"
          value={userName}
          onChange={handleChange}
        />

        <button className="border-2  px-10 py-2 rounded-md ">Submit</button>
      </form> */}
      {/* <SimpleForm /> */}

      {/* {movies.map((m) => (
        <ul key={Math.random()}>
          <li>{m.title}</li>
          <li>{m.ratings}</li>
        </ul>
      ))}
      <button onClick={handleChange}>change</button> */}

      {/* <h1>{movies.title}</h1>
      <p>{movies.ratings}</p>
      <button onClick={handlChange}>change rating</button> */}
      {/* <h1>{myName}</h1>
      <p>result={multiply(2, 4)}</p>
      {myBio.map((user) => (
        <User key={user.id} userName={user.userName} user={user}>
          <h1>hello i am children</h1>
        </User>
      ))} */}

      {/* <Pass isValid={false}></Pass> */}

      {/* <button
        className=" border-2  px-10 py-2 rounded-md	  "
        onClick={() => handleButtonClick(2, 2)}
      >
        click
      </button> */}

      {/* <p onCopy={() => handleTextCopy()}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
      </p> */}

      {/* <h1 className=" text-xl font-bold">{count}</h1>
      <button onClick={increment} className="border-2  px-10 py-2 rounded-md">
        +
      </button>
      <button onClick={dicrement} className="border-2  px-10 py-2 rounded-md">
        -
      </button> */}

      {/* {names.map((n) => (
        <li key={Math.random()}>{n}</li>
      ))}

      <button onClick={addName} className="border-2  px-10 py-2 rounded-md">
        add
      </button>
      <button onClick={removeName} className="border-2  px-10 py-2 rounded-md">
        delete
      </button>
      <button onClick={updateName} className="border-2  px-10 py-2 rounded-md">
        update
      </button> */}
    </>
  );
}

export default App;

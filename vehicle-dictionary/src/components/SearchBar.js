import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

// const baseURL =
//   "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";

// export default function VINSearchBar() {
//   const [value, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!value) return null;
// export default function VINSearchBar() {
//   function doSomethingWith(input) {
//     console.log(input);
//   }
//   return (
//     <div>
//       <SearchBar>
//         value={this.state.value}
//         onChange={(newValue) => this.setState({ value: newValue })}
//         onRequestSearch={() => doSomethingWith(this.state.value)}
//       </SearchBar>
//     </div>
//   );
// }

function SearchBar() {
  return (
    <div className="main">
      <h1>VIN Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      {/* <List /> */}
    </div>
  );
}

export default SearchBar;

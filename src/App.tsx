import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <>
      <CssBaseline /> {/* Reset CSS */}
      <TextField
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="your@email.com"
        autoComplete="email"
        autoFocus
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Password"
        name="password"
        placeholder="••••••"
        type="password"
        id="password"
        autoComplete="current-password"
        required
        fullWidth
        variant="outlined"
      />
      <Button>Hello</Button>
    </>
  );
}

export default App;

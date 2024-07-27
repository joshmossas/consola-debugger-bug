# Consola Debugger Bug

This is a minimal reproduction showcasing a bug where logs outputted by `consola` are never rendered by the VSCode debugger.

## How To Run

### Without the Debugger

Run the following command

```
node main.mjs
```

Which will output logs from both `console.log()` and `consola` as expected.

```bash
Hello from console.log() 1
Hello from consola 1
Hello from console.log() 2
Hello from consola 2
# etc
```

### With the Debugger

- Open the `Run and Debug` tab in VSCode (`Ctrl+Shift+D`)
- Click `Start Debugging` (`F5`)

This will output logs from only `console.log()`

```bash
Hello from console.log() 1
Hello from console.log() 2
Hello from console.log() 3
# etc
```

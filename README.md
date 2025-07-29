
# 📘 JavaScript Execution Context

JavaScript Execution Context is the environment where JavaScript code is evaluated and executed.

This README covers:
- 🌍 Global Execution Context
- 🔧 Function Execution Context
- 🧪 Eval Execution Context (briefly)

## 🧠 What is an Execution Context?

JavaScript runs all code inside something called an **Execution Context**, which defines the environment where code is executed.

### 🏁 1. Global Execution Context (GEC)

🌍 This is the default context created when your JavaScript code first runs.

- It handles **global code** (code not inside any function).
- Only one Global EC exists at a time.
- It sets up:
  - `this` keyword pointing to the global object (e.g., `window` in browser).
  - A memory space for variables and functions.

🧠 Think of it as the starting point or main environment where everything begins.


### 🔁 2. Function Execution Context (FEC)

🔧 This is created **each time a function is called**.

- Every function gets its **own** Execution Context.
- It includes:
  - A new `this` value (based on how the function is called).
  - Its own variable environment (local memory).
- Multiple FECs can exist—one for each active function call.

🧱 These contexts are stacked on top of the **Global EC**, and removed after the function finishes running.


### 🧪 3. Eval Execution Context (EEC)

🧬 This context is created when JavaScript code is executed using the `eval()` function.

- Dynamically evaluates string-based code.
- Can access and modify variables in the current scope.
- Behaves like Global or Function context depending on usage.

⚠️ **Note:** Avoid using `eval()` in practice—it introduces security risks and can make debugging harder.


---
## 🔄 JavaScript Execution Context Phases
Every Execution Context in JavaScript runs in **two phases**:

---

### 🧾 1. Memory Creation Phase

📦 In this phase, JavaScript sets up memory before running any code.

- All **variables** are stored in memory with value `undefined`.
- All **functions** are fully stored in memory.
- `this` is set (e.g., points to `window` in browser).

💡 This step is called **hoisting** — variables and functions are moved to the top in memory.

⛔ Code is **not executed yet** — only memory is prepared.

---

### 🚀 2. Execution Phase

🧠 In this phase, JavaScript starts running the code line by line.

- Variables are assigned actual values.
- Functions are invoked if called.
- Any logic, loops, or conditions are executed here.

✅ This is where the actual output is produced.
## ⚙️ Execution Phases of JavaScript





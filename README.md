
# Four Two Five Years Ago

This is a simple project demonstrating the use of Three.js to create a rotating cube with a spotlight.

## Project Structure
.gitignore build.ts lib/ package.json src/ index.html index.ts tsconfig.json

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd four-two-five-years-ago
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Development
To start the development server with live reloading, run:
```sh
npm run dev
```

### Build
To build the project, run:
```sh
npm run build
```
This will compile the TypeScript files and copy the index.html file to the dist directory.

#### Project Files
src/index.html: The HTML file that includes the script to run the Three.js application.
src/index.ts: The main TypeScript file that sets up the Three.js scene, camera, renderer, and animation loop.
build.ts: The build script using esbuild to bundle the project and copy assets.
tsconfig.json: The TypeScript configuration file.
package.json: The project configuration file, including scripts and dependencies.

### License
This project is licensed under the ISC License.
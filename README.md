# molu-p1
MoluJS Prototype #1

`deno.json`
```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "jsx"
    },
    "imports": {
        "jsx/jsx-runtime": "https://deno.land/x/molu-p1/mod.ts"
    }
}
```
```jsx
<m:importMap src="./import_map.json"/>
<m:use raw src="./src/source.js"/>
<m:use raw src="./src/global.css"/>
```
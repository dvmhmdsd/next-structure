# The Next Scalable structure

This structure based on the `Modularization` of the code, as we keep every thing related to each other in one place and `independent`. This enhances the code structure, improves `maintainability` as we increase `cohesion`.

## Prerequisites

- Node 20.10.0

## Getting started

To run the project:

### Install packages

`yarn`

### Run the project

`yarn dev`

## Explaining the folder structure

You'll find all the implementation details inside the `src` folder, everything outside it will be the configurations of the project like `prettier` and `eslint`.

### `app/` Folder

This folder is only for `routing`. Every module will have its own routing group inside folder named like this `(moduleName)` and any route related to this module will be inside this folder e.g:

#### `/user/profile`:

- The folder structure will be like this:-
  - (user)/ # this is just the module grouping not the actual route
    - user/ # this is the actual route
      - page.tsx
      - profile/
        - page.tsx

All the code inside any page.tsx file will be just importing the components of the page, `no logic`, `no data` and no any `styling` code, just the components of the page that will appear to the user.

### `modules/`

Here will be all the code of the application including: components, styles, logic. It's like the page and the components are the contents of this page.

The structure of the module will be like this:-

- `components`: contains all `React components` that is related to the module. You should know that these components are `dumb` contains no logic at all but only the building blocks of the UI components (UI):
  --> Every component will be as a folder that contains:

  - `ComponentName.tsx`: the actual component
  - `componentName.css.ts`: contains styles that will be used as `style` or `sx` attributes or through `makeStyles` in `MUI`
  - `componentName.module.css`: contains the normal css code (it is not necessary if the .css.ts file used but it's preferred for standards)

- `atoms`: This will contain the logic of `state management` of the module. It's called `atoms` as we are using `jotai` as the state management solution (state management logic)

- `common`: This will contain any `interfaces`, `enums` or `types` used across the module (data)

- `hooks`: contains the react component logic (React component logic)
- `services`: contains all the logic associated with the `API` calling and server state management (API logic)
- `styles`: contains all the styles shared across the module (optional)
- `utils`: contains all the logic of the module that is not `API`, `state management` or `React component` (Business logic)

#### `shared/` module

The shared module includes all shared code across the application, make it: `UI`, `Business logic`, `API logic`, `React component logic` and `State management logic`.

## Quick guide

This will be the guide you'll use to know how to create new `module` or `component`

### New Module

To create new module you'll have to do some steps:

1. If it's routed module, go to the `app/` folder and:

   1.1 Create `(module_name)/` folder. This will be the grouping of all routes of the module

   1.2 Create `moduleName/` folder

   1.3 Create the `moduleName/page.tsx` file and add the imports of the components that will be used to build the page

2. Create `modules/moduleName/` folder and put the code on it as the structure stated above

### New Component

To create new component, see where it will be located:

- If it's shared across multiple modules, then put it inside `shared/components/` folder
- If it's specific to a module then put it inside the `components/` folder of that module

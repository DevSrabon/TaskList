# React Task List App

This is a simple Task list app built using React. It allows you to add, edit, and delete tasks, mark tasks as completed, and view your tasks.

## Components

### `ListProvider`

- Context provider component that manages the state of the Task list items.
- Exposes functions to add, update, and delete items in the list.

### `List`

- Represents an individual Task list item.
- Displays the task's title, description, completion status, and date.
- Allows editing of task title and description.
- Provides buttons to save changes, cancel editing, and delete the task.
- Offers a checkbox to mark the task as completed or not completed.

### `Lists`

- Displays a list of all the Task list items.
- Utilizes the `List` component to render each individual item.

### `Heading`

- Displays a heading with an eye-catching style and a horizontal line.

## Usage

1. Import the `ListProvider` component and wrap it around your app's root component.

```

export const initialStore = () => {
  return {
    message: null,
    contacts: [
      {
        name: "",
        address: "",
        email: "",
        phone: "",
      },
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    
      case 'save_contact':
      return{
        ...store,
          contacts: action.payload 
      }
    default:
      throw Error('Unknown action.');
  }
}

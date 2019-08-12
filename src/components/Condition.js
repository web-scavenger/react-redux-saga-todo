export const  Condition = ({ value, message, children }) => {
    return value ? children : message;
}
  
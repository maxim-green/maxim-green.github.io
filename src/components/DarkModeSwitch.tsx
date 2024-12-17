export const DarkModeSwitch = () => {
  
  const clickHandler = () => {
    document.body.classList.toggle('dark');
  }
  
  return (
    <button onClick={clickHandler}>Toggle dark mode</button>
  )
}
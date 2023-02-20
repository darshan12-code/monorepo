import './App.css';
import Checkbox from './lib/CheckboxCustom';
function App() {
  const onChange=(e)=>{
    console.log(e);
    
  }


  return (
    <Checkbox
    label='item 5'
    checkboxStyle={
      {   
          backgroundColor:'#000',
          iconColor:'#fff',
          borderColor:'grey',
          focusBorderColor: 'blue'
      }}
      disabled={false}
      checked={false}
       options = {[
        { label: 'item 1 erryre ', value: 'item 1',checked:false,disabled:false },
        { label: 'item 2 erhber trhyt juhgfgtrtyjjt', value: 'item 2',checked:false,disabled:false },
        { label: 'item 3 fergr', value: 'item 3',checked:false,disabled:true },
        { label: 'item 4', value: 'item 4',checked:false,disabled:false },
        { label: 'item 5 erhbertr hytjuh gfgtrtyjjt', value: 'item 5',checked:false,disabled:false },
        { label: 'item 6', value: 'item 6',checked:false,disabled:false },
      ]}
      onChange={onChange}
      onFocus={onChange}
      onBlur={onChange}
      isGrid={false}
  />
  );
}

export default App;

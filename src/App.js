import Card from "./components/Card";
import CardWithProps from "./components/CardWithProps";

function App() {
  return (
    <div>
        <div>Hello </div>

        {/* Calling Basic Component */}
        <Card/>
        {/*  ----------  Components Card with props ------------- */}
       <CardWithProps name="mithilesh" currentclass="BA"/>
       <CardWithProps name="himanshu" currentclass="BSC"/>
       <CardWithProps name="Pushpa" currentclass="BCA" gender="female"/>
        {/* -------------------------------------- */}
    </div>
  );
}

export default App;

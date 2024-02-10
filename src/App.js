import './App.css';
import Person from "./components/user/Person";

function App() {
  return (
      <>
        <div>
            <Person
                name={"Геральт"}
                age={57}
                desc={"Вымышленный персонаж, ведьмак Школы Волка, охотник на монстров, обладающий некоторыми сверхспособностями и признанный мастер меча."}
                photo={"https://n1s1.hsmedia.ru/01/d3/54/01d354c20ff8eb33a8c68f92cf3e62df/600x600_1_c60a5ba77c4bb831b47a4bfcc0bef334@900x900_0xac120003_6794944971655631346.jpeg"}/>
        </div>
      </>
  );
}

export default App;

import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

import TemperatureInput from "./TemperatureInput";

// PDF 8.4
// function Calculator(props) {
//   const [temperature, setTemperature] = useState('');
//   const handleChange = (event) => {
//     setTemperature(event.target.value);
//   }
//   return (
//     <fieldset>
//       <legend>섭씨 온도를 입력하세요:</legend>
//       <input
//         value={temperature}
//         onChange={handleChange} />
//       <BoilingVerdict
//         celsius={parseFloat(temperature)} />
//       {/* parseFloat
//           : 온도의 소수점까지도 지원해주기위해 사용
//           : input으로 입력받는것들은 String 값을 가지기 때문에 연산을 할때 오동작을 할 가능성이 있어서 숫자로 형태 변환 */}
//     </fieldset>
//   );
// }

// PDF 8.6
// function Calculator(props) {
//   const [temperature, setTemperature] = useState('');
//   const handleChange = (event) => {
//     setTemperature(event.target.value);
//   }
//   return (
//     <div>
//       <TemperatureInput scale="c" />
//       <TemperatureInput scale="f" />
//     </div>
//   );
// }

// function Calculator(props) {
//   const [temperature, setTemperature] = useState('');

//   // PDF 8.7
//   function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
//   function tryConvert(temperature, convert) { // 계산하는 실질적인 함수
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input); // 위의 convert(콜백)가 여기서 함수로 불려지고 있음
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }

//   const handleChange = (event) => {
//     setTemperature(event.target.value);
//   }
//   return (
//     <div>
//       <TemperatureInput scale="c" />
//       <TemperatureInput scale="f" />
//     </div>
//   );
// }

// function Calculator(props) {
//   const [temperature, setTemperature] = useState('');
//   function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }
//   return (
//     <div>
//       <TemperatureInput scale="c"
//         onTemperatureChange={(value) => {
//           const v = tryConvert(value, toFahrenheit);
//           setTemperature(value);
//         }} />
//       <TemperatureInput scale="f"
//         onTemperatureChange={(value) => {
//           const v = tryConvert(value, toCelsius);
//           setTemperature(v);
//         }} />
//       <BoilingVerdict celsius={temperature} />
//     </div>
//   );
// }

function Calculator(props) {
  const [temperature, setTemperature] = useState('');
  const [c, setC] = useState(0);
  const [f, setF] = useState(0);

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  return (
    <div>
      <TemperatureInput scale="c" temp={c}
        onTemperatureChange={(value) => {
          const v = tryConvert(value, toFahrenheit);
          setF(v);
          setTemperature(value);
        }} />
      <TemperatureInput scale="f" temp={f}
        onTemperatureChange={(value) => {
          const v = tryConvert(value, toCelsius);
          setC(v);
          setTemperature(v);
        }} />
      <BoilingVerdict celsius={temperature} />
    </div>
  );
}

export default Calculator;
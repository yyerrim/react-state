import { useEffect, useState } from "react";

// PDF 8.5
const scaleNames = {
  c: '섭씨',
  f: '화씨'
};
// function TemperatureInput(props) {
//   const [temperature, setTemperature] = useState('');
//   const handleChange = (event) => {
//     setTemperature(event.target.value);
//   }
//   return (
//     <fieldset>
//       <legend>온도를 입력해주세요(단위 : {scaleNames[props.scale]})</legend>
//       <input value={temperature} onChange={handleChange} />
//     </fieldset>
//   );
// }

// 객체의 속성명을 중괄호와 함께 사용하면 바로 그 데이터를 뽑아낼 수 있음
// function TemperatureInput({ scale }) {
//   const [temperature, setTemperature] = useState('');
//   const handleChange = (event) => {
//     setTemperature(event.target.value);
//   }
//   return (
//     <fieldset>
//       <legend>온도를 입력해주세요(단위 : {scaleNames[scale]})</legend>
//       <input value={temperature} onChange={handleChange} />
//     </fieldset>
//   );
// }

// PDF 8.8
// function TemperatureInput({ scale, onTemperatureChange }) {
//   const [temperature, setTemperature] = useState('');
//   const handleChange = (event) => {
//     setTemperature(event.target.value);
//     onTemperatureChange(event.target.value);
//   }
//   return (
//     <fieldset>
//       <legend>온도를 입력해주세요(단위 : {scaleNames[scale]})</legend>
//       <input value={temperature} onChange={handleChange} />
//     </fieldset>
//   );
// }

function TemperatureInput({ scale, onTemperatureChange, temp }) {
  const [temperature, setTemperature] = useState('');
  const handleChange = (event) => {
    setTemperature(event.target.value);
    onTemperatureChange(event.target.value);
  }
  useEffect(() => {
    setTemperature(temp);
  }, [temp]);
  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위 : {scaleNames[scale]})</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
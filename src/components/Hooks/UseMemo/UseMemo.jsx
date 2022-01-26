import React, { useState, useMemo, useCallback } from "react"
import { ListOfNums } from ".";

// useMemo - значение useCallback - функцию

// useMomo сохраняет результат в переменную и подьедает место, поэтому использовать его "везде" тоже не варик.

export const UseMemo = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // допустим медленная функция имеет долгое время выполнения, а при рендере компонента, мы ее вызываем каждый раз,чтобы узнать даблНамбер
  // но мы не хотим выщитывать каждый раз двойное число, если само число не изменилось.

  // const doubleNumber = slowFunction(number) =>>>>

  // кешируем результат вызова медленной функции и не выщитываем его, если массив зависимостей не изменился.
  const doubleNumber = useMemo(() => {
    console.log('doubleNumber recalculated');
    return slowFunction(number)
  }, [number]);

  // мемоизируем обьект стилей, который будет меняться только при изменении массива зависимостей
  // и тогда не будет пересоздаваться каждый раз новый обьект при рендере компонента
  const themeStyles = useMemo(() => {
    console.log('theme obj created');

    return ({
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    })
  }, [dark])


  // каждый раз создаем новую функцию и рендерим поновой список из-за изменения пропса(изменилась тема - компонент рендерится - функция новая)
  // const getItems = () => [number, number + 1, number + 2]; =>>>>>

  const getItems = useCallback(
    () => {
      return () => [number, number + 1, number + 2]
    },
    [number],
  )


  const changeHandler = (value) => setNumber(value)
  const clickHandler = () => setDark(prevDark => !prevDark)

  return (
    <>
    <input type="number" value={number} onChange={(e) => changeHandler(+e.target.value)}/>
    <button onClick={clickHandler}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    <ListOfNums getItems={getItems} />
    </>
  )
}

function slowFunction(num) {
  for (let i = 0; i <= 100000000000000000000000000; i++) {
    return num * 2
  }
}

import React, { useState } from 'react';
import { ThemeModeValues, ThemeProvider, useThemeState } from './context/theme';

import { HeavyComponent } from './components/HeavyComponent';
import { HeavyComponentWithContext } from './components/HeavyComponentWithContext';

import './App.css';

// const MemoizedHeavyComponent = React.memo(HeavyComponent, (old, curr) => old.payload === curr.payload);
const MemoizedHeavyComponent = React.memo(HeavyComponent, () => true);
const MemoizedHeavyComponentWithContext = React.memo(HeavyComponentWithContext, () => true);

MemoizedHeavyComponent.displayName = 'MemoizedHeavyComponent';
MemoizedHeavyComponentWithContext.displayName = 'MemoizedHeavyComponentWithContext';

const ITERATIONS = 10000000;

function App() {
  const [mode, setMode] = useThemeState();
  const [payload1, setPayload1] = useState<string>('foo-bar');
  const [payload2, setPayload2] = useState<string>('foo-bar');
  const [payload3, setPayload3] = useState<string>('foo-bar');
  const [payload4, setPayload4] = useState<string>('foo-bar');

  const toggleThemeMode = () => setMode((mode) => (mode === ThemeModeValues.dark ? ThemeModeValues.light : ThemeModeValues.dark));
  const togglePayload1 = () => setPayload1((payload) => (payload === 'foo-bar' ? 'bar-foo' : 'foo-bar'));
  const togglePayload2 = () => setPayload2((payload) => (payload === 'foo-bar' ? 'bar-foo' : 'foo-bar'));
  const togglePayload3 = () => setPayload3((payload) => (payload === 'foo-bar' ? 'bar-foo' : 'foo-bar'));
  const togglePayload4 = () => setPayload4((payload) => (payload === 'foo-bar' ? 'bar-foo' : 'foo-bar'));

  return (
    <ThemeProvider mode={mode}>
      <div className="App">
        <button onClick={() => toggleThemeMode()}>Change context theme mode: {mode}</button>

        {/* <h3>HeavyComponent (payload1)</h3>
        <button onClick={() => togglePayload1()}>Change state payload 1: {payload1}</button>
        <HeavyComponent payload={payload1} iterationCount={ITERATIONS} /> */}

        <h3>MemoizedHeavyComponent (payload2)</h3>
        <button onClick={() => togglePayload2()}>Change state payload 2: {payload2}</button>
        <MemoizedHeavyComponent payload={payload2} iterationCount={ITERATIONS} />

        {/* <h3>HeavyComponentWithContext (payload3)</h3>
        <button onClick={() => togglePayload3()}>Change state payload 3: {payload3}</button>
        <HeavyComponentWithContext payload={payload3} iterationCount={ITERATIONS} />  */}

        <h3>MemoizedHeavyComponentWithContext</h3>
        <button onClick={() => togglePayload4()}>Change state payload 4: {payload4}</button>
        <MemoizedHeavyComponentWithContext payload={payload4} iterationCount={ITERATIONS} />
      </div>
    </ThemeProvider>
  );
}

export default App;

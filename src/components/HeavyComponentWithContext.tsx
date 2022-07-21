import { useTheme } from '../context/theme';

export type HeavyComponentWithContextProps = {
  payload: string;
  iterationCount: number;
};

export function HeavyComponentWithContext({ payload, iterationCount }: HeavyComponentWithContextProps) {
  const { mode } = useTheme();

  const funcs = [];

  console.log('rendered');

  for (let i = 0; i < iterationCount; i++) {
    funcs.push(function f() {
      return payload;
    });
  }

  for (let i = 0; i < iterationCount; i++) {
    funcs[i]();
  }

  while (funcs.length) funcs.pop();

  return (
    <div style={{ backgroundColor: '#ddd' }}>
      <p>Hello, World!</p>
      <p>
        Current theme mode is <strong>{mode}</strong>
      </p>
      <p>
        Payload info <strong>{payload}</strong>
      </p>
    </div>
  );
}

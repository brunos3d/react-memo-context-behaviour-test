import { useTheme } from '../context/theme';

export type HeavyComponentProps = {
  payload: string;
  iterationCount: number;
};

export function HeavyComponent({ payload, iterationCount }: HeavyComponentProps) {
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
        Payload info <strong>{payload}</strong>
      </p>
    </div>
  );
}

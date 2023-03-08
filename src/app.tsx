function Welcome(props: { name: string }) {
  const { name } = props;

  return <h2>Hello, {name}!</h2>;
}

export function App() {
  return (
    <div>
      <Welcome name="Marek" />
      <Welcome name="Karen" />
    </div>
  );
}

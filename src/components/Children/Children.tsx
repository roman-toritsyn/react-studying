import './styles.css'

export function FancyBorder(props: any) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

export function WelcomeDialog() {
  return (
    <>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Добро пожаловать
        </h1>
        <p className="Dialog-message">
          Спасибо, что посетили наш космический корабль!
        </p>
      </FancyBorder>

      <FancyBorder color="red">
        <h2> Let it be red </h2>
      </FancyBorder>
    </>

  );
}
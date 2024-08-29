import Head from "next/head";
import React, { useEffect, useMemo } from "react";
import { memo, useCallback, useRef, useState } from "react";

const Button = ({ onClick, children }) => {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <button onClick={onClick}>
      {children} - rendering: {renderCount.current}
    </button>
  );
};

const Button2 = ({ onClick, children }) => {
  const renderCount2 = useRef(0);
  renderCount2.current++;

  return <button onClick={onClick}>{children}</button>;
};

const Button3 = memo(
  ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => {
    const renderCount3 = useRef(0);
    renderCount3.current++;
    return (
      <button onClick={onClick}>
        {children} - rendering:{renderCount3.current}
      </button>
    );
  },
);

Button3.displayName = "Button3";

const Button4 = memo(
  ({ onClick, label }: { onClick: () => void; label: string }) => {
    const renderCount4 = useRef(0);
    renderCount4.current++;
    return (
      <button onClick={onClick}>
        {label} - rendering:{renderCount4.current}
      </button>
    );
  },
);

Button4.displayName = "Button4";

const Button5 = memo(
  ({ onClick, label }: { onClick: () => void; label: string }) => {
    return <button onClick={onClick}>{label}</button>;
  },
);

Button5.displayName = "Button5";

const Button6 = memo(
  ({
    onClick,
    label,
    counterObject,
  }: {
    onClick: () => void;
    label: string;
    counterObject: {
      counter9: number;
    };
  }) => {
    const renderCount3 = useRef(0);
    renderCount3.current++;
    return (
      <button onClick={onClick}>
        {label} - {counterObject.counter9} - rendering {renderCount3.current}
      </button>
    );
  },
);
Button6.displayName = "Button6";
const Button7 = memo(
  ({
    onClick,
    label,
    counterObject,
  }: {
    onClick: () => void;
    label: number;
    counterObject: {
      counter9: number;
    };
  }) => {
    const renderCount3 = useRef(0);
    renderCount3.current++;
    return (
      <button onClick={onClick}>
        {label} - {counterObject.counter9} - rendering {renderCount3.current}
      </button>
    );
  },
);
Button7.displayName = "Button7";
const Button8 = memo(
  ({
    onClick,
    label,
    counterObject,
  }: {
    onClick: () => void;
    label: number;
    counterObject: {
      counter9: number;
    };
  }) => {
    const renderCount3 = useRef(0);
    renderCount3.current++;
    return (
      <button onClick={onClick}>
        {label} - {counterObject.counter9} - rendering {renderCount3.current}
      </button>
    );
  },
);
Button8.displayName = "Button8";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const counter2 = useRef(0); //Il componente non viene reindirizzato
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [counter8, setCounter8] = useState(0);
  const [counter9, setCounter9] = useState(0);
  const [counter10, setCounter10] = useState(0);
  const [counter11, setCounter11] = useState(0);

  const handleClick = () => {
    setCounter3(counter3 + 1);
  };

  const handleClick2 = useCallback(() => {
    setCounter5(counter5 + 1);
  }, [counter5]); //memomizziamo una funzione

  const handleClick3 = useCallback(() => {
    setCounter6(counter6 + 1);
  }, [counter6]);

  const handleClick4 = useCallback(() => {
    setCounter7(counter7 + 1);
  }, [counter7]);

  const handleClick5 = useCallback(() => {
    setCounter8((prev) => prev + 1);
  }, []);

  const handleClick6 = useCallback(() => {
    setCounter9((prev) => prev + 1);
  }, []);
  const handleClick7 = useCallback(() => {
    setCounter10((prev) => prev + 1);
  }, []);
  const handleClick8 = useCallback(() => {
    setCounter11((prev) => prev + 1);
  }, []);

  const counterObject = useMemo(() => {
    //really complicated algorithm
    return { counter9 };
  }, [counter9]);

  useEffect(() => {
    console.log("effect");
    //console.log("effect" + counter 9);
  }, []); //[counter9]

  useEffect(() => {
    window.onresize = () => {
      console.log("resize");
    };
  }, []);

  useEffect(() => {
    window.onresize = () => {
      console.log("resize");
    };
    return () => {
      window.onresize = null;
    };
  }, []);

  const onResize = useCallback(() => {}, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  let num = 5;
  for (let i = 0; i < 100000000; i++) {
    num += i;
  }

  const label2 = useMemo(() => {
    let num2 = 5;
    for (let i = 0; i < 1000; i++) {
      num2 += i;
    }
    return num2;
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Hello world</h1>
          <h2>Next.js</h2>
          <div>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Clicked me {counter}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                counter2.current += 1;
              }}
            >
              Clicked me {counter2.current}
            </button>
          </div>
          <div>
            <Button
              onClick={handleClick}
              children={`Clicked me ${counter3} `}
            />
            <button onClick={() => setCounter3(counter3 + 1)}>
              Other button
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setCounter4(counter4 + 1);
              }}
            >
              {counter4}
            </button>
          </div>
          <div>
            <Button2
              onClick={handleClick2}
              children={`Clicked me ${counter5} `}
            />
          </div>
          <div>
            <Button3
              onClick={handleClick3}
              children={`Clicked me ${counter6} `}
            />
          </div>
          <div>
            <Button4 onClick={handleClick4} label={`Clicked me ${counter7} `} />
          </div>
          <div>
            <Button5 onClick={handleClick5} label={"Clicked me"} />
            <span>Clicked {counter8} times</span>
          </div>
          <div>
            <Button6
              onClick={handleClick6}
              label={`Clicked me`}
              counterObject={counterObject}
            />
            <span>Clicked {counter9} times</span>
          </div>
          <div>
            <Button7
              onClick={handleClick7}
              label={num}
              counterObject={counterObject}
            />
            <span>Clicked {counter10} times</span>
          </div>
          <div>
            <Button8
              onClick={handleClick8}
              label={label2}
              counterObject={counterObject}
            />
            <span>Clicked {counter11} times</span>
          </div>
        </div>
      </main>
    </>
  );
}

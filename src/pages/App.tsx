import { JSX, createSignal, splitProps } from "solid-js";
import "./app.css";
import { CSSAttributes } from "../types";

const MyCom = (props: { text: string } & CSSAttributes) => {
  const [text, other] = splitProps(props, ["text"]);

  return <div {...other}>{text.text}</div>;
};

function App() {
  const [color, setColor] = createSignal("red");
  const [show, _] = createSignal(true);

  const [otherProps, setOtherProps] = createSignal<
    JSX.HTMLAttributes<HTMLDivElement>
  >({
    c: "red",
    children: <div></div>,
  });

  return (
    <div
      var:c="10"
      mt={100}
      class="ppp tttt"
      flex
      flex-col
      items-center
      // display="flex"
      c={color()}
      onClick={() => setColor((pre) => (pre === "red" ? "yellowgreen" : "red"))}
      classList={{ ooo: show() }}
      user-select="none"
      bg="green"
      dark-hover:bg="blue"
      box-sizing="content-box"
      min-h="500px"
    >
      <button
        cursor="pointer"
        onClick={undefined}
        onMouseDown={undefined}
        onMouseUp={undefined}
      >
        123
      </button>
      qqq
      <input
        c="green"
        value="1adsfdsafsadfsaddf"
        hover:c="pink"
        focus:c="red"
        hover-focus:c="blue"
      />
      <div
        {...otherProps()}
        onClick={() =>
          setOtherProps({
            c: "pink",
            bg: "white",
            classStyle: { "&:hover": { color: "black" } },
          })
        }
      >
        cccc
        <div>oooo</div>
      </div>
      <MyCom
        after:content="'12132132'"
        text="6666"
        c="var(--my-data)"
        var:my-data="blue"
        hover:c="black"
        bg="rgba(255,255,255,var(--bg-op, 0.5))"
      />
    </div>
  );
}

export default App;

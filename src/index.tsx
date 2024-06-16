/* @refresh reload */
import { render } from "solid-js/web";
import App from "./pages/App.tsx";
import { useCssAttrs } from "./libs";

const root = document.getElementById("root");

render(() => <App />, root!);

useCssAttrs();

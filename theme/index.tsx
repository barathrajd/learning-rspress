import { Navbar } from "./Navbar";
import { Content } from "rspress/runtime";

function Layout(){
  return <div>
  <Navbar />
  <Content />
  <h1>Custom Layout Theme</h1>
  </div>
}

const setup = () => {}

export * from "rspress/theme"

export default {
  Layout,
  setup
}

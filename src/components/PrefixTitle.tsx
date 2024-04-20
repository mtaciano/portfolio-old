import { Title } from "@solidjs/meta";
import { ParentProps } from "solid-js";

export default function PrefixTitle(props: ParentProps) {
  let title = () => `Miguel Taciano :: ${props.children}`;
  return <Title>{title()}</Title>;
}

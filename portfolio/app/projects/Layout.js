import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export default function ProjectLayout({ children }) {
  return (
    <Theme panelBackground="translucent">
      {children}
    </Theme>
  );
}
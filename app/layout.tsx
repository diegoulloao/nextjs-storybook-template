// Types
import type { PropsWithChildren } from "react";

// Main Styles
import "styles/globals.css";

/**
 *
 * Layout: Main Pages Layout
 * @description main pages layout
 *
 */
const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;

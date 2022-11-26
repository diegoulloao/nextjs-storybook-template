"use client";

// Components
import { Button } from "components/Button";

/**
 *
 * Page: Home
 * @description home page
 *
 */
const Home: React.FC = () => {
  return (
    <>
      <main className="bg-gray-300 h-screen">
        <Button label="Storybook button with tailwind" tailwind />
      </main>
    </>
  );
};

export default Home;

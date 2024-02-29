import Image from "next/image";
import "@styles/global.css";
import Feed from "@components/feed";

export default function Home() {
  return (
    <section className="flex flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        {/* FIXME: Make it 2 lines then 1 line when md screen*/}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        An open-source tool for modern world. Create and share creative prompts
      </p>
      <Feed />
    </section>
  );
}

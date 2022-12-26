import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function creatingEmojiCards(emojiVal) {
  return (
    <Card
      key={emojiVal.id}
      emoji={emojiVal.emoji}
      name={emojiVal.name}
      meaning={emojiVal.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(creatingEmojiCards)}</dl>
    </div>
  );
}

export default App;

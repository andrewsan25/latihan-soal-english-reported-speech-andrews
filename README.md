# Reported Speech Quiz

A simple Apple-style quiz website for practising **Reported Speech (Direct & Indirect Speech)**.

It's a **single HTML file** with no dependencies, so it works offline on any computer. Just open `index.html` in a browser.

## Features

- **6 question types + Mixed**
  - **Type A** · Multiple Choice: choose the correct reported sentence
  - **Type B** · True or False: is the reported sentence correct?
  - **Type C** · Fill in the Blank: type the missing word(s)
  - **Type D** · Error Spotting: find the incorrect part
  - **Type E** · Word & Tense Changes: how tenses, time and place words change
  - **Type F** · Back to Direct: find the original direct words
  - **Mixed Challenge**: random questions from every type
- **3 difficulty levels**: Easy, Medium, Hard (or All Levels)
- 130+ questions, 10 random questions per quiz, with explanations
- Instant feedback, score ring (0–100), full review, "Retry Wrong Answers"
- Keyboard shortcuts: `1–4` / `A–D` to answer, `Enter` for next
- Light & dark mode (follows your system)
- Best scores saved in your browser
- **Download HTML** button saves the quiz as one file to share with other computers

## Usage

Download `index.html` (or click **⬇ Download HTML** inside the app) and double-click it.

To add questions, edit the `QUESTION BANK` section in `index.html`:

```js
add('A', 1, `Question`, [`Option 1`, `Option 2`, `Option 3`, `Option 4`], 0, `Explanation`);
```

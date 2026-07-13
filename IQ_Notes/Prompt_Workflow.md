# Prompt Workflow: Concept Explanations

Use this prompt to generate a Markdown file explaining any programming or technical concept.

---

## Prompt

```
Explain [concept name] clearly.
Save the explanation as a .md file inside the iq_notes folder.
Include:
- A concise explanation of the concept
- Examples or comparisons (if relevant)
- Proper Markdown formatting for readability
```

## Example Usage

```
Explain closures in JavaScript.
Save the explanation as a .md file inside the iq_notes folder.
Include:
- A concise explanation of the concept
- Examples or comparisons (if relevant)
- Proper Markdown formatting for readability
```

---

## Output Format

Each generated file follows this structure:

```markdown
# Concept Name

## Explanation

[Clear, concise description]

---

## Example

\`\`\`js
// code example
\`\`\`

---

## Comparison Table (if applicable)

| Aspect | Concept A | Concept B |
|--------|-----------|-----------|
| ...    | ...       | ...       |
```

## Folder

All files are saved to: `iq_notes/`

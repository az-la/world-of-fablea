# Character portraits

Drop portrait images here, named after the character's node id from
`src/data/characters.ts`:

- `hmgfan.jpg`
- `dina-agustina.jpg`
- `anna-nishikinomiya.jpg`
- ... (jpg, jpeg, png, or webp)

Files are picked up automatically at build time and rendered through
`astro:assets` on the relationship chart (`/characters/`). A character
without a file here gets the monogram placeholder.

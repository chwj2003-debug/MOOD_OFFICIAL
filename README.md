# MOOD official website

The original manually deployed homepage, with the Studio image replacement.

## Local development

Run `python3 -m http.server 3001 --directory public` from this directory.
The homepage is `public/index.html`. Local images belong in `public/assets`.
No dependency installation or build is required.

## Netlify

Connect this dedicated repository to the existing moodofficial project.
Production branch: main. Base directory: repository root. Build command: empty.
Publish directory: public (also declared in netlify.toml).
Verify a preview before publishing to the official domain.
Do not connect the unrelated solid-fiesta sticker/invitation repository.

The Studio image is an AI-generated illustrative space, not a real store photo.
Other images, fonts, and icons currently use the original external hosts.

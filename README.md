# lavigilia.org

The public website of **La Vigilia**, an association being set up in Rome.

## What this repository is

This repository is the record of the site's publications: each commit is a published version, signed by La Vigilia. Preparatory work (drafting, reviews, trials) happens in a private repository; only the published result arrives here. A correction is made by a new publication, never by rewriting history.

The site is static (HTML, CSS, a little JavaScript), with no build step, no dependency, no cookie and no analytics, and it loads no external resource (fonts are served by the site itself). Its content is in Italian, French and English.

```
/              manifesto, Italian (home page)
/fr/           manifesto, French
/en/           manifesto, English
/css/          stylesheet
/js/           light/dark mode toggle
/fonts/        EB Garamond, self-hosted
/assets/       logos
```

## Running the site locally

Internal links are absolute (`/fr/`), so the folder has to be served rather than opened as files:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Licenses

- **Texts**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You may copy, translate and adapt them, including for commercial purposes, provided you credit La Vigilia and indicate changes.
- **Code** (HTML, CSS, JavaScript): MIT License.
- **Fonts** (EB Garamond): SIL Open Font License 1.1.
- **Name and logo** of La Vigilia: all rights reserved.

File-by-file details are in [REUSE.toml](REUSE.toml), license texts in [LICENSES/](LICENSES/).

## Contact

contact@lavigilia.org. To report a security issue or data published by mistake, see [SECURITY.md](SECURITY.md).

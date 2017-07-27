# ¡Hola! Design

This repo contains source & built (in the `built` branch) version of [¡Hola! Design](https://design.ihola.one).

We're currently busy with the Chinese version (in `source/zh-cn`) and we would come back to the English version once we finished our work on Chinese version.

Thanks to hexo team, for their creating a theme for documents. We're using a fork of their `navy` theme.

## Usage

1. Clone this (or your fork if you don't have required permission)
2. `npm i`
3. Make your modifications
4. Preview your modifications with `hexo s`
5. Commit & psuh it 
6. `hexo g && hexo d` (or make a PR and make the team run this after merge)

## Notice for maintainers

Create files in `source/zh-cn/docs` with the name defined in `source/_data/sidebar.yml`, but end up with `.md` instead of `.html`.

Yes, you need to create new items in that yml when you create new files that is not defined yet, in a similar manner. Actually you will need to create corresponding items in `themes/hola-design/languages/*.yml`, to make sure the titles get translated in the sidebar.

You will need at least a `title` field in frontmatter. Align it with the one defined in `themes/hola-design/languages/*.yml`.

## Legal

The project itself is opensourced in MIT. Contents are licensed under CC BY-NC-SA 4.0.
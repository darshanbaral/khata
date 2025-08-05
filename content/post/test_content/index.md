---
title: "Demo Content"
author: "Darshan Baral"
date: 2025-08-04
tags: ["html", "markdown"]
categories: ["theme"]
description: "Sample article showcasing formatting for HTML elements."
draft: false
---

This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.

<!--more-->

## Headings

Here are `<h1>` - `<h6>`.

{{< raw_html >}}
<p>
<h1>Heading 1</h1>
</p>

<p>
<h2>Heading 2</h2>
</p>

<p>
<h3>Heading 3</h3>
</p>

<p>
<h4>Heading 4</h4>
</p>

<p>
<h5>Heading 5</h5>
</p>

<p>
<h6>Heading 6</h6>
</p>

{{< /raw_html >}}

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Here is a [hyperlink](#). Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp; | Markdown&nbsp;&nbsp;&nbsp; | In&nbsp;&nbsp;&nbsp;                | Table  |
| ------------------------ | -------------------------- | ----------------------------------- | ------ |
| _italics_                | **bold**                   | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code` |

## Figures

Figures can be added using shortcode `figure`.

{{< figure src="pexels-kmerriman-20787.jpg" alt="Image of a cat" caption="Image of a cat" >}}

## Code Blocks

### Code block with backticks

```
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Code block indented with four spaces

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested list

- Item 1
  1. First Sub-item
     - primary
     - secondary
  2. Second Sub-item
- Item 2

## Other Elements — `abbr`, `sub`, `sup`, `kbd`, `mark`

{{< raw_html >}}

<p>
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.
</p>

<p>
H<sub>2</sub>O
</p>

<p>
X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>
</p>

<p>
Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.
</p>

<p>
Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
</p>
{{< /raw_html >}}

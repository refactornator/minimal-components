import { injectGlobal } from 'styled-components';

injectGlobal`
  /*
    ----
    Opinionated reset designed for making developing website easier, with accessibility in mind.

    - Initial resets of mostly all elements
    ----

    Note: Not all of the elements listed here might not contain the properties listed by default but it's entirely possible for someone to add their own stylesheet to be used on every site so it's a good idea to reset all elements just incase so your pages look exactly how you intended them to be.
  */
  html, body {
      width: 100%;
      height: 100%;
  }

  html, body, div,  span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, header, footer, section, article, nav, canvas, aside, figcaption, figure, hgroup, menuitem, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      background: transparent;
  }

  /*
    - Use border-box within the box-sizing property to incorporate padding within the width/height of an element.
    - Set font-size to 16px as a root to ensure all browsers are the same.
    ----

    border-box credit:
      http://www.paulirish.com/2012/box-sizing-border-box-ftw/
      https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

  */
  html {
      box-sizing: border-box;
      font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  /*
    - Set body font to commonly used fallback fonts.
    - Set body font-size to root font-size to ensure continuity.
    - Reset line-height
    - Use common font smoothing rules
  */
  body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Oxygen-Sans, 'Fira Sans', 'Droid Sans', Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      font-size: 1.6rem;
      line-height: 1.5em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  /*
    - Remove underline of links by default
  */
  a {
      text-decoration: none;
  }

  /*
    - Remove outline from :focus pseudo element
    ----

    Note: Remember to apply some styling for the focus state of elements that support it, for good user experience and usability. We remove it here because it's common practise to not use the default style.
  */
  :focus { outline: 0; }

  /*
    - List elements have a reputation of being used, commonly, for uses other than a standard list. For this reason we will remove the list-style from the ol and ul elements to allow them to be used semantically in code and used as a list when defined by the user. This is a reset after all.
    - Remove default margins appled to lists and allow that option to be decided by design
  */
  ol, ul {
    list-style: none;
    margin: 0;
  }

  /*
    - Remove quotemarks from the blockquote/q elements by default
  */
  blockquote, q { quotes: none; }

  /*
    - Set elements that use monospace fonts to use fonts that work better with common fallbacks
    - Fix broken handling of monospace fonts in browsers
    ----

    broken monospace credit:
      http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/
  */
  pre, code, kbd, samp, tt {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1em;
  }
`;

const JAVASCRIPT = "JavaScript"
const CSS = "CSS"

const quizzes = [
  {
    technology: JAVASCRIPT,
    name: "Currying",
    date: "Jan 11, 2021.",
    url: "https://gist.github.com/teffcode/6a5389e5458ae6ae2499fedd7ee5a7f4",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: ":not() & :nth-child() pseudo-classes",
    date: "Jan 4, 2021.",
    url: "https://gist.github.com/teffcode/52c1d44e601595274ae5e61614a08b32",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "typeof & hoisting",
    date: "Dec 4, 2020.",
    url: "https://gist.github.com/teffcode/b2d7fd6e2705f44f0068a169a7d472d6",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "rem unit",
    date: "Nov 27, 2020.",
    url: "https://gist.github.com/teffcode/53be48fbd537bc5e95f0bd5f177d7c05",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Margin on inline elements",
    date: "Nov 20, 2020.",
    url: "https://gist.github.com/teffcode/2b09b209a0e7938f92678038b60e9224",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Call Stack",
    date: "Nov 9, 2020.",
    url: "https://gist.github.com/teffcode/cd212b3ece44369a106d11bcba896d99",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "place-items property",
    date: "Nov 2, 2020.",
    url: "https://gist.github.com/teffcode/c53c36ee3e04efdcb3a11b70d56f4f8d",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "apply() method",
    date: "Oct 18, 2020.",
    url: "https://gist.github.com/teffcode/b4fab214740204a2e5f6ff531b30c15c",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Creating immutable objects",
    date: "Oct 4, 2020.",
    url: "https://gist.github.com/teffcode/7874386bd3dc22e658f63d8ee0ede970",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Double class",
    date: "Sep 29, 2020.",
    url: "https://gist.github.com/teffcode/fb661de964a7ca818034a3c615570654",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Destructuring assignment",
    date: "Sep 28, 2020.",
    url: "https://gist.github.com/teffcode/417c14415b7834cb526a1c1a0ff67976",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Float & Block Formatting Context",
    date: "Sep 22, 2020.",
    url: "https://gist.github.com/teffcode/69d968b6939e723859b56ce7ddcc4b60",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Set object",
    date: "Aug 3, 2020.",
    url: "https://gist.github.com/teffcode/0b916401246fe1814fa4441f2db31a98",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "line-height property",
    date: "Jul 29, 2020.",
    url: "https://gist.github.com/teffcode/279d09730612178616d0428fde1fbb3a",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "The arguments object & Spread Operator",
    date: "Jul 20, 2020.",
    url: "https://gist.github.com/teffcode/37ae061bbc61a44a5f6751f472a26d5a",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: ":not() pseudo-class",
    date: "Jul 13, 2020.",
    url: "https://gist.github.com/teffcode/0ffda0e4361da1956fbbbc82143e6396",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Flex shorthand",
    date: "Jul 6, 2020.",
    url: "https://gist.github.com/teffcode/f0adb0f6df47249c41becbee10960130",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Creating object with dynamic keys",
    date: "Jul 2, 2020.",
    url: "https://gist.github.com/teffcode/ef9576ac8b1923574aae6d48e2691088",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "sort() method",
    date: "Jun 30, 2020.",
    url: "https://gist.github.com/teffcode/97b08ed8dd696db4706599115456da67",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Inline elements",
    date: "Jun 29, 2020.",
    url: "https://gist.github.com/teffcode/dbec26ddcde888b78f80a3002750294b",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Arrow Functions",
    date: "Jun 24, 2020.",
    url: "https://gist.github.com/teffcode/ab383734fb4976523bd719012e2a2781",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "The stacking context",
    date: "Jun 21, 2020.",
    url: "https://gist.github.com/teffcode/e0b3e89df22ecf5374527deaf31b11ca",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "JSON.stringify()",
    date: "Jun 19, 2020.",
    url: "https://gist.github.com/teffcode/74f11e32e6a25faa24f8a9cee4964638",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "slice() method",
    date: "Jun 17, 2020.",
    url: "https://gist.github.com/teffcode/df619e56be5c0c7d641b90c76a845ea4",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Specificity",
    date: "Jun 14, 2020.",
    url: "https://gist.github.com/teffcode/7a58e0b4700fcf1583731a182c87ac9f",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Padding Percentage",
    date: "Jun 7, 2020.",
    url: "https://gist.github.com/teffcode/25abade04efdca87f8145bb71bf93dd2",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Property accessors",
    date: "Jun 6, 2020.",
    url: "https://gist.github.com/teffcode/c5b4009cea53c6457b0443e22f631f14",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "reduce() method",
    date: "Jun 6, 2020.",
    url: "https://gist.github.com/teffcode/95716f19f9b41ac1e8e991e2daf15d12",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "var & let keywords",
    date: "Jun 5, 2020.",
    url: "https://gist.github.com/teffcode/2135d6603a53c50cbefbef775a0ca6bf",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Hoisting",
    date: "Jul 3, 2020.",
    url: "https://gist.github.com/teffcode/25fdf7f7ef1b89411b04c9cf4b4316aa",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Margin Collapsing",
    date: "Jun 1, 2020.",
    url: "https://gist.github.com/teffcode/6189776c18ac79162b8b53992e05969c",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Closure",
    date: "May 29, 2020.",
    url: "https://gist.github.com/teffcode/0b240584a41b1b3077762ce0d7c3bad9",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "push() & unshift() methods",
    date: "May 26, 2020.",
    url: "https://gist.github.com/teffcode/5394cf305e8f84ba3dfda36164dfca53",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Comparison operators",
    date: "May 22, 2020.",
    url: "https://gist.github.com/teffcode/66074d8ff47cc6ce4ccbefc498a35bb5",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "pop() method",
    date: "May 19, 2020.",
    url: "https://gist.github.com/teffcode/8ea3c505e61e5f0b2664a92713f4a9aa",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Margin",
    date: "May 18, 2020.",
    url: "https://gist.github.com/teffcode/f1e7b0edad2062bc8af837446dfc0676",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "By reference vs By value (2)",
    date: "May 15, 2020.",
    url: "https://gist.github.com/teffcode/3bb2b9bcd55b7a0d623e9fe59ec53737",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "By reference vs By value (1)",
    date: "May 13, 2020.",
    url: "https://gist.github.com/teffcode/bf0a0f270071269d4669f2f9af12f687",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Logical Properties",
    date: "May 11, 2020.",
    url: "https://gist.github.com/teffcode/a693b0ffc907c7b0745d0f9d7d711cfd",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "This",
    date: "May 8, 2020.",
    url: "https://gist.github.com/teffcode/0509350d314b9d84639268ae4217f37b",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Arithmetic Operators",
    date: "May 6, 2020.",
    url: "https://gist.github.com/teffcode/348bc3fe39a277db28c97f5d08ff0d0c",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: CSS,
    name: "Grid",
    date: "May 3, 2020.",
    url: "https://gist.github.com/teffcode/249ec6c7eba26de461612477e7211fc4",
    imageUrl: "",
    imageAlt: ""
  },
  {
    technology: JAVASCRIPT,
    name: "Arithmetic Operators",
    date: "May 5, 2020.",
    url: "https://gist.github.com/teffcode/6d66516ad957a8277fa4a649f874e1ea",
    imageUrl: "",
    imageAlt: ""
  }
]

export { quizzes }

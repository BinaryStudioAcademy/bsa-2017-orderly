module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "plugins": [
        "react",
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict": true,
            "experimentalObjectRestSpread": true,
        }
    },
    "rules": {
        "indent": 2,
        "strict": ["error", "global"],
        "semi": ["error", "always"],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "caughtErrors": "none" }],
        "no-console": "off",
        "camelcase": ["error", { "properties": "always" }],
        "arrow-spacing": "error",
        "arrow-parens": ["error", "always"],
        "no-confusing-arrow": ["error", { "allowParens": false }],
        "no-constant-condition": "error",
        "no-labels": "error",
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
        "func-style": "off",
    }
};

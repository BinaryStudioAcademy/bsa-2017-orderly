module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict": true
        }
    },
    "rules": {
        "indent": 4,
        "strict": ["error", "global"],
        "semi": ["error", "always"],
        "no-unused-vars": ["error", { "vars": "all", "args": "all", "caughtErrors": "none" }],
        "no-console": "off",
        "camelcase": ["error", { "properties": "always" }],
        "arrow-spacing": "error",
        "arrow-parens": ["error", "always"],
        "arrow-body-style": ["error", "as-needed"],
        "no-confusing-arrow": ["error", { "allowParens": false }],
        "no-constant-condition": "error",
        "no-labels": "error",
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
        "func-style": "off",

        // ESLint-plugin-React
        // https://github.com/yannickcr/eslint-plugin-react

        "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
        "react/jsx-boolean-value": "warn",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-curly-spacing": "warn",
        "react/jsx-indent-props": "off",
        "react/jsx-key": "warn",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-no-literals": "off",
        "react/jsx-pascal-case": "warn",
        "react/jsx-sort-prop-types": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-wrap-multilines": "error",
        "react/no-multi-comp": "warn",
        "react/no-set-state": "off",
        "react/prefer-es6-class": "warn",
        "react/self-closing-comp": "warn",
        "react/sort-comp": "warn",
        "react/sort-prop-types": "warn"
    }
};
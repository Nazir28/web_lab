import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    ignorePatterns: ['**/@generated/**', '**/dist/**', '**/build/**', '**/.next/**'],
    extends: [
        'next/core-web-vitals',
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['import', 'prettier', 'react'],
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'no-restricted-syntax': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        // ts-require directive
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'always'],
        indent: 'off',
        'max-len': [
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'implicit-arrow-linebreak': 'off',
        'no-plusplus': 'off',
        'max-classes-per-file': 'off',
        'operator-linebreak': 'off',
        'object-curly-newline': 'off',
        'class-methods-use-this': 'off',
        'no-confusing-arrow': 'off',
        'function-paren-newline': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'space-before-function-paren': 'off',
        'consistent-return': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/prefer-default-export': 'off',
        // https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['off'],
        'arrow-body-style': 'off',
        'padding-line-between-statements': 'off',
        'no-unused-expressions': 'off',
        camelcase: 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/display-name': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'prefer-destructuring': 'error',
        'no-restricted-imports': [
            'warn',
            {
                paths: [
                    {
                        name: '@prisma/client',
                        message: 'Use the trpc procedures inferred types instead',
                    },
                ],
            },
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            {
                props: 'never',
                children: 'never',
            },
        ],
    },
})
];

export default eslintConfig;

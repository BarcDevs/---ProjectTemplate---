import js from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import nodePlugin from 'eslint-plugin-node'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import airbnbConfig from 'eslint-config-airbnb'
import prettierConfig from 'eslint-config-prettier'

export default [
    js.configs.recommended,
    // airbnbConfig, // TODO: update plugin
    prettierConfig,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                browser: true,
                es2021: true
            }
        },
        plugins: {
            prettier: eslintPluginPrettier,
            typescript: typescriptPlugin,
            node: nodePlugin
        },
        rules: {
            'no-console': 'off',
            'class-methods-use-this': 'off',
            'no-shadow': 'off',
            'no-nested-ternary': 'off',
            'import/extensions': 'off',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'import/no-import-module-exports': 'off',
            'import/no-extraneous-dependencies': 'off',
            'typescript/no-unused-vars': 'warn',
            'typescript/no-shadow': 'warn',
            'typescript/ban-ts-comment': 'off',
        }
    }
]

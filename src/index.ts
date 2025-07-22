import type { Config } from 'prettier';

/**
 * Preset configuration for Bracketed Softworks projects and other community projects, free for public and community use, or any use really.
 * @example Implementing the config into your prettier workflow.
 * ```json
 * // package.json
 * ...
 * "prettier": "@bracketed/prettier-configuration"
 * ```
 */
export default {
	plugins: [
		'@prettier/plugin-php',
		'@prettier/plugin-pug',
		'@prettier/plugin-ruby',
		'@prettier/plugin-xml',
		'prettier-plugin-prisma',
		'prettier-plugin-sh',
		'prettier-plugin-sql',
		'prettier-plugin-css-order',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-sort-imports',
		'prettier-plugin-embed',
		'prettier-plugin-merge',
		'prettier-plugin-sort-package-json',
		'prettier-plugin-jsdoc-type',
		'prettier-plugin-jsdoc',
		'prettier-plugin-sort-json',
	],
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'crlf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	singleAttributePerLine: true,
	bracketSameLine: true,
	jsxBracketSameLine: true,
	jsxSingleQuote: true,
	printWidth: 120,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
	embeddedLanguageFormatting: 'auto',
	vueIndentScriptAndStyle: true,
} satisfies Config;

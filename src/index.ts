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

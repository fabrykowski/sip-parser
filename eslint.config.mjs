import eslint from '@eslint/js';
import ts_eslint from 'typescript-eslint';

export default ts_eslint.config(
    {
        ignores: [
            'dist/**',
        ]
    },
    eslint.configs.recommended,
    ...ts_eslint.configs.recommendedTypeChecked,
    ...ts_eslint.configs.stylisticTypeChecked,
    ...ts_eslint.configs.strictTypeChecked,
    {
        rules: {
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
        }
    },
    {
        files: [
            '**/*.ts',
        ],

        languageOptions: {
            parserOptions: {

                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },


        'rules': {
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    'allowNumber': true
                }
            ]
        }
    },
    {
        files: [
            'eslint.config.mjs',
        ],
        ...ts_eslint.configs.disableTypeChecked
    }
);

// eslint.config.mjs  //✅수정: compat 제거, Flat 전용으로 재작성
import js from "@eslint/js";                                 //✅추가
import tseslint from "typescript-eslint";                    //✅추가

import reactPlugin from "eslint-plugin-react";               //✅추가
import reactHooks from "eslint-plugin-react-hooks";          //✅추가
import jsxA11y from "eslint-plugin-jsx-a11y";                //✅추가
import nextPlugin from "@next/eslint-plugin-next";           //✅추가

export default [
    {
        // .eslintignore 대체
        ignores: [".next/**", "node_modules/**", ".yarn/**", "dist/**"], //✅추가
    },

    // JS/TS 기본 권장
    js.configs.recommended,                                    //✅추가
    ...tseslint.configs.recommended,                           //✅추가 (타입 정보 비의존, 설정 간단)

    {
        files: ["**/*.{ts,tsx,js,jsx}"],                         //✅추가
        languageOptions: {
            parser: tseslint.parser,                               //✅추가
            ecmaVersion: "latest",                                 //✅추가
            sourceType: "module",                                  //✅추가
            parserOptions: { ecmaFeatures: { jsx: true } },        //✅추가
        },
        plugins: {
            react: reactPlugin,                                    //✅추가
            "react-hooks": reactHooks,                             //✅추가
            "jsx-a11y": jsxA11y,                                   //✅추가
            "@next/next": nextPlugin,                              //✅추가
        },
        settings: {
            react: { version: "detect" },                          //✅추가
        },
        rules: {
            // 각 플러그인의 권장 규칙을 Flat에서 직접 병합
            ...reactPlugin.configs.recommended.rules,              //✅추가
            ...reactHooks.configs.recommended.rules,               //✅추가
            ...jsxA11y.configs.recommended.rules,                  //✅추가
            ...nextPlugin.configs["core-web-vitals"].rules,        //✅추가

            // Next 자동 JSX 런타임
            "react/react-in-jsx-scope": "off",                     //✅추가
        },
    },
];
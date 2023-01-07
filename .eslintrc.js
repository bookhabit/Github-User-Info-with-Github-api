module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "plugin:prettier/recommended"
      ],
    globals:{
        Aotomics:"readonly",
        SharedArrayBuffer:"readonly"
    },
    "overrides": [
    ],
    "parserOptions": {
        ecmaFeatures:{
            jsx:true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars":"off", // 사용 안한 변수 경고 중복
        "react/jsx-filename-extenstion":[
            1,
            {extensions:[".js",".jsx",".tsx"]} // jsx사용가능한 확장자 설명
        ]
    }
}

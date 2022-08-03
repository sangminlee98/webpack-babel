module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "103", // preset-env가 크롬 103버전까지 지원하는 코드를 만든다
          ie: "11",
        },
        useBuiltIns: "usage", // 폴리필 사용 방식 지정 'entry', false
        corejs: {
          version: 3, // 폴리필 버전 지정
        },
      },
    ],
  ],
};

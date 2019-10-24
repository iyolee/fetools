// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         targets: {
//           node: 'current',
//         },
//       },
//     ],
//   ],
// };
module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
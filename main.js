console.log(123);

const str = `
  010-0000-0000
test@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
  tabbcccdddd
  hxyp
  http://localhost:3000/
  동해물과_백두산이 마르고 닳도록
`

// 정규식 생성자 방식
// const regexp = new RegExp('the', 'gi')

// 정규식 리터럴 방식
const regexp = /the/gi

// 메소드
console.log(regexp.test(str));
console.log(str.replace(regexp, 'AAA'));
console.log(str.match(regexp));

let strLet = `
  010-0000-0000.
  test@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
`

strLet = strLet.replace(regexp, '대체 텍스트')
console.log(strLet);

console.log(strLet.match(/\.$/gi));
console.log(strLet.match(/\.$/gim));

console.log(str.match(/d$/gm));
console.log('An E'.match(/^A/g));
console.log(str.match(/^t/gim));

console.log(str.match(/./g));
console.log(str.match(/h..p/g));
console.log(str.match(/dog|fox/));
console.log(str.match(/dog|fox/g));
console.log(str.match(/https?/g));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/\b\w{2,3}\b/g));

console.log(str.match(/[fox]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));

console.log(str.match(/\w/g));
console.log(str.match(/\bf\w{1,}\b/g));
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));

const h = `  the hello  world   !`
console.log(h.match(/\s/g));
console.log(h.replace(/\s/g, ''));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
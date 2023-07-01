type Expr = () => boolean;

const True: Expr = () => true;
const False: Expr = () => false;

const And = (left: Expr, right: Expr): Expr => () => left() && right();
const Or = (left: Expr, right: Expr): Expr => () => left() || right();

const expr: Expr = And(True, False);
const r: boolean = expr();
console.log(r)

//Numerals 1 ???? 
console.log(`NUMERALS 1:##################################################`)
const zero = _ => x => x;
const one = f => x => f(x);
const two = f => x => f(f(x));
const three = f => x => f(f(f(x)));
const four = f => x => f(f(f(f(x))));
const five = f => x => f(f(f(f(f(x)))));

const succ = a => b => c => a(b)(b(c))
const add = a => b => c => d => b(c)(a(c)(d))

const decodeNumeral = a => a(b => b + 1)(0);

console.log(decodeNumeral(zero));
console.log(decodeNumeral(one));
console.log(decodeNumeral(two));
console.log(decodeNumeral(three));
console.log(decodeNumeral(four));
console.log(decodeNumeral(five));

console.log(decodeNumeral(succ(zero)))
console.log(decodeNumeral(add(one)(two)))

/// Numeralss 2 ??? 
type Numeral = (f: (x: any) => any) => (x: any) => any;

const _zero: Numeral = _ => (x) => x;
const _succ = (n: Numeral) : Numeral => (f) => (x) => f(n(f)(x))
const _decodeNumeral = (n: Numeral): number => n((x) => x + 1)(0)
const _add = (m: Numeral, n: Numeral): Numeral => (f) => (x) => m(f)(n(f)(x))

const _one: Numeral = _succ(zero);
const _two: Numeral = _succ(_one);
const _three: Numeral = _succ(_two);
const _four: Numeral = _succ(_three);
const _five: Numeral = _succ(_four);

console.log(`NUMERALS 2:##################################################`)
console.log(_decodeNumeral(_zero))
console.log(_decodeNumeral(_one))
console.log(_decodeNumeral(_two))
console.log(_decodeNumeral(_three))
console.log(_decodeNumeral(_four))
console.log(_decodeNumeral(_five))
console.log(`ADD ##################################################`)
console.log(_decodeNumeral(_add(_zero, _one)))
console.log(_decodeNumeral(_add(_one, _two)))
console.log(_decodeNumeral(_add(_two, _three)))
console.log(_decodeNumeral(_add(_three, _four)))

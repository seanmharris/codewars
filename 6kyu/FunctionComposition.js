/*
Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability.
f3 = compose( f1 f2 )
   Is equivalent to...
f3(a) = f1( f2( a ) )
Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas.
Remember that the resulting composed function may be passed multiple arguments!
compose(f , g)(x)
=> f( g( x ) )
*/

function compose(f,g) {
    return function f3(...arguments) {
      return f(g(...arguments))
    }
  }
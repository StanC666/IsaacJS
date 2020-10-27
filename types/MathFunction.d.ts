declare namespace Isaac {
  namespace Functions {
    type Interval = {
      start :number | { infinity :true }
      end :number | { infinity :true }
    }
    function range() :Interval
    type MathFunction = (x :number) => number
    type MathFunctionDetails = {
      domain :Interval
      range :Interval
    }
    function functionify(func :MathFunction) :MathFunctionDetails
  }
}

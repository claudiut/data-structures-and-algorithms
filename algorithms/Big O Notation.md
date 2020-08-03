**It describes the complexity of the algorithm time-wise: how the algorithm scales in time, given n number of inputs.**

## How to measure / algo analysis
```js
    function run(array) {
        // C1
        let temp;
        // C2 + C3 + C4
        for (let i = 1; i < array.length; i++) {
            // C5
            temp = array[i];
        }

        // C6
        const j = 0;
    }
```
Above algo code analisys: // C + (C + C + C + C) x n + C => 4C(n) + 2C. What matters is the n-times this is running, the 4C and 2C are negligible => O(n) complexity

*We always take the dominant part, the slowest part, when defining the complexity. So if we have  2C + 3C(n) + 4C(n^2) we are left with n + n^2 and say we have O(n^2) complexity.*

*Example: say we have 37(n^3) + 18(n^2) + 180. So for n=10 this is 37000+1800+180. The 1800+180 doesn't quite matter. So we have O(n^3).*

### Graphic / behavious understanding
The graphic of O(n^2) is a curve. This is because, for example, if we give it:
- n=1 => 1s
- n=10 => 100s (if would be linear, would take 10s. But for O(n^2), for each n it runs 10 operations => 10s * 10)
- n=100 => 10000s

*So it takes **n^2 time/steps** to run.*

## Performance example
- Binary search algo is O(log2(n)) which is very good, better than O(n). For 1000 inputs, since we divide the problem by 2 => 10 steps needed.
*log2(n) means divide n / 2 / 2 / 2 ... until we reach 1. This is what the algo does*.

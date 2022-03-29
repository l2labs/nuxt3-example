import BigNumber from 'bignumber.js/bignumber.mjs'
import { Bignumberish } from '~~/types'

/**
 * bigNumber 分数
 */
export class Fraction {
  public numerator: BigNumber
  public denominator: BigNumber

  constructor(numerator: Bignumberish, denominator: Bignumberish = 1) {
    this.numerator = new BigNumber(numerator)
    this.denominator = new BigNumber(denominator)
  }

  get quotient() {
    const quotient = this.numerator.div(this.denominator)
    if (quotient.isNaN() || !quotient.isFinite()) {
      return new BigNumber(0)
    }
    return quotient
  }

  get remainder() {
    return new Fraction(this.numerator.mod(this.denominator), this.denominator)
  }

  invert() {
    return new Fraction(this.denominator, this.numerator)
  }

  plus(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    if (this.denominator.eq(fraction.denominator)) {
      return new Fraction(this.numerator.plus(fraction.numerator), this.denominator)
    }
    return new Fraction(
      this.numerator.times(fraction.denominator).plus(this.denominator.times(fraction.numerator)),
      this.denominator.times(fraction.denominator),
    )
  }

  minus(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    if (this.denominator.eq(fraction.denominator)) {
      return new Fraction(this.numerator.minus(fraction.numerator), this.denominator)
    }
    return new Fraction(
      this.numerator.times(fraction.denominator).minus(this.denominator.times(fraction.numerator)),
      this.denominator.times(fraction.denominator),
    )
  }

  times(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    return new Fraction(this.numerator.times(fraction.numerator), this.denominator.times(fraction.denominator))
  }

  div(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    return new Fraction(this.numerator.times(fraction.denominator), this.denominator.times(fraction.numerator))
  }

  lt(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    return this.numerator.times(fraction.denominator).lt(this.denominator.times(fraction.numerator))
  }

  lte(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    return this.numerator.times(fraction.denominator).lte(this.denominator.times(fraction.numerator))
  }

  eq(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    return this.numerator.times(fraction.denominator).eq(this.denominator.times(fraction.numerator))
  }

  gt(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    return this.numerator.times(fraction.denominator).gt(this.denominator.times(fraction.numerator))
  }

  gte(fraction: Fraction | Bignumberish) {
    fraction = fraction instanceof Fraction ? fraction : new Fraction(fraction)
    return this.numerator.times(fraction.denominator).gte(this.denominator.times(fraction.numerator))
  }

  toFixed(dp: number, rounding = BigNumber.ROUND_DOWN) {
    return this.quotient.dp(dp, rounding).toFixed()
  }

  toString(dp = 6) {
    return this.toFixed(dp)
  }

  toPercent() {
    return this.times(100)
  }
}

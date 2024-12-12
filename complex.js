export class C {
    constructor(x, y) {
        this.re = x;
        this.im = y;
    }

    static polar(mod, arg) {
        return new C(mod * Math.cos(arg), mod * Math.sin(arg));
    }

    add(o) {
        return new C(this.re + o.re, this.im + o.im);
    }

    mult(o) {
        return new C(this.re * o.re - this.im * o.im, this.re * o.im + this.im * o.re);
    }

    mul(num) {
        return new C(this.re * num, this.im * num);
    }

    module() {
        return Math.sqrt(this.re ** 2 + this.im ** 2);
    }

    arg() {
        return Math.acos(this.re / this.module()) * (this.im < 0 ? -1 : 1);
    }

}
function fibo(x) {
    if (x === 1)
        return 1;
    if (x === 2)
        return 2;
    return fibo(x - 1) + fibo(x - 2);
}
fibo(10);

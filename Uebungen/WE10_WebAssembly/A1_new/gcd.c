// https://de.wikipedia.org/wiki/Gr%C3%B6%C3%9Fter_gemeinsamer_Teiler
int GreatestCommonDivisor(int a, int b)
{
    int h;
    if (a == 0) return abs(b);
    if (b == 0) return abs(a);

    do {
        h = a % b;
        a = b;
        b = h;
    } while (b != 0);

    return abs(a);
}
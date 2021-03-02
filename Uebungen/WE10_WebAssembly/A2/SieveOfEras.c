// source: https://technotip.com/9436/prime-numbers-using-sieve-of-eratosthenes-c-program/
#include<stdio.h>
    int calcPrimes(N)
    {
        int num[N], i, j, count

        for(i = 0; i < N; i++)
            num[i] = i + 1;

        for(i = 1; (num[i] * num[i]) <= N; i++)
        {
            if(num[i] != 0)
            {
                for(j = num[i] * num[i]; j <= N; j += num[i])
                {
                    num[j - 1] = 0;
                }
            }
        }
        count = 0;
        for(i = 1; i < N; i++)
        {
            if(num[i] != 0)
                count = count + 1;
        }

        return count;
    }
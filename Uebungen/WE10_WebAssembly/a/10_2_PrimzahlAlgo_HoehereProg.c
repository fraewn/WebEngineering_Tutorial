#include <stdbool.h> 

int countPrimes(int until);
int getNewPrimeNumber(int lastNumber);
bool isPrimeNumber(int number);


int calcPrimes(int until)
{
  int lastNumber = 2;
	int primesCount=0;
	for (;;){
		
	  lastNumber = getNewPrimeNumber(lastNumber);
		
	
	  if(lastNumber > until){
	    break;
	  }
		
	  primesCount++;
		
	}
	
  return primesCount;
}

int getNewPrimeNumber(int lastNumber){
		int currNum = lastNumber+1;
		
		for (;;){
			if(isPrimeNumber(currNum)){
				return currNum;
				break;
			}
			currNum = currNum+1;						
		}
  return -1;
}

bool isPrimeNumber(int number){
	bool isStillPrime=true;
	for(int i = 2; i <= number/2; i++){
		isStillPrime = isStillPrime && !(number % i == 0);
	
		if(!isStillPrime){
			break;
		}
	}
	return isStillPrime;
}
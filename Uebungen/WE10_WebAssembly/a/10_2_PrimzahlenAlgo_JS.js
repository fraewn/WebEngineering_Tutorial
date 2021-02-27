export function countPrimes(until){
	
	let lastNumber = 2n;
	let primesCount=1;
	
	while(true){
		
		lastNumber = getNewPrimeNumber(lastNumber);
		
	
		if(lastNumber > until){
				break;
		}
		
		primesCount++;
		
	}
	
	return primesCount;
}

function getNewPrimeNumber(lastNumber){

	
		let currNum = lastNumber+1n;
		
		while(true){
			if(isPrimeNumber(currNum)){
				return currNum;
				break;
			}
			currNum = currNum+1n;						
		}

}

function isPrimeNumber(number){
	let isStillPrime=true;
	for(let i = 2n; i <= number/2n; i++){
		isStillPrime = isStillPrime && !(number % i === 0n);
	
		if(!isStillPrime){
			break;
		}
	}
	
	return isStillPrime;
}
function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break; // Stops the loop at the first vowel found
      }
      console.log(char); // Logs each character until a vowel is encountered
    }
  }
  
  logUntilVowel("syzygy"); 
  logUntilVowel("syzygyweai"); 
// With a blind attempt at it,
// I think I would start with comparing 
// the first and last character of a string, 
// and keep moving one end forward until at  
// least 1 set of characters match, save the 
//end location while you check to see if the 
// substring from the front to back is a palindrome.
// If it is, save the string as a possible 
// answer as well as the size of the substring 
// and regardless go back to the saved start and 
//end location and continue incrementing until the 
//distance between the front and back is less than 
// the current max palindrome size. Then increment 
//the front index forward and repeat until the gap 
//from front to back is smaller than the max 
//palindrome size as well.
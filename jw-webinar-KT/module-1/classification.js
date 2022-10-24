/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    
    if(score < 0 || score > 100){
        return 0;
    }
 
    if(score >= 90) return 5;
    if(score >= 80) return 4;
    if(score >= 70) return 3;
    if(score >= 60) return 2;
    
    return 1;
}
module.exports = grade;
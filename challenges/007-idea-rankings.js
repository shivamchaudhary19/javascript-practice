/* Given a list of ideas with optimistic, realistic, and pessimistic completion estimates, calculate the expected completion time for each idea.

Formula:
expected = ((optimistic + 4 × realistic + pessimistic) / 6) × ideaNameLength

Return the idea names sorted by expected completion time, shortest first.
*/


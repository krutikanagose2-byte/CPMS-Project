import re
import json

text = """
1. Number System — 20 MCQs
Q1. What is the remainder when 25 is divided by 4?

A) 0
B) 1
C) 2
D) 3

Answer: B) 1

Solution:
25 = 4 × 6 + 1.

Q2. Which of the following is a prime number?

A) 21
B) 27
C) 29
D) 33

Answer: C) 29

Solution:
29 has only two factors: 1 and 29.

Q3. What is the smallest even prime number?

A) 1
B) 2
C) 3
D) 4

Answer: B) 2

Solution:
2 is the only prime number that is even.

Q4. What is the remainder when 100 is divided by 9?

A) 0
B) 1
C) 2
D) 3

Answer: B) 1

Solution:
100 = 9 × 11 + 1.

Q5. Which number is divisible by 3?

A) 124
B) 125
C) 126
D) 127

Answer: C) 126

Solution:
1 + 2 + 6 = 9, and 9 is divisible by 3.

Q6. What is 2³ × 2²?

A) 16
B) 24
C) 32
D) 64

Answer: C) 32

Solution:
2³ × 2² = 2⁵ = 32.

Q7. What is the unit digit of 7²?

A) 7
B) 8
C) 9
D) 6

Answer: C) 9

Solution:
7² = 49 → unit digit = 9.

Q8. What is the greatest 3-digit number?

A) 999
B) 100
C) 998
D) 1000

Answer: A) 999

Solution:
The largest 3-digit number is 999.

Q9. What is the smallest 4-digit number?

A) 999
B) 1000
C) 1001
D) 1111

Answer: B) 1000

Solution:
The smallest number having four digits is 1000.

Q10. Which number is divisible by 5?

A) 123
B) 126
C) 130
D) 137

Answer: C) 130

Solution:
Numbers divisible by 5 end in 0 or 5.

Q11. What is 15% of 200?

A) 20
B) 25
C) 30
D) 35

Answer: C) 30

Solution:
15/100 × 200 = 30.

Q12. What is the square of 15?

A) 125
B) 200
C) 225
D) 250

Answer: C) 225

Solution:
15 × 15 = 225.

Q13. What is √144?

A) 10
B) 11
C) 12
D) 14

Answer: C) 12

Solution:
12 × 12 = 144.

Q14. Which is an irrational number?

A) 2
B) 3/4
C) √2
D) 5

Answer: C) √2

Solution:
√2 cannot be expressed as a fraction of two integers.

Q15. What is 5! ?

A) 20
B) 60
C) 100
D) 120

Answer: D) 120

Solution:
5! = 5 × 4 × 3 × 2 × 1 = 120.

Q16. What is the remainder when 50 is divided by 7?

A) 0
B) 1
C) 2
D) 3

Answer: C) 1

Solution:
50 = 7 × 7 + 1.

Q17. What is the sum of the first 10 natural numbers?

A) 45
B) 50
C) 55
D) 60

Answer: C) 55

Solution:
n(n+1)/2 = 10×11/2 = 55.

Q18. What is the product of the first five natural numbers?

A) 100
B) 120
C) 150
D) 125

Answer: B) 120

Solution:
1 × 2 × 3 × 4 × 5 = 120.

Q19. Which number is divisible by 9?

A) 124
B) 135
C) 142
D) 152

Answer: B) 135

Solution:
1 + 3 + 5 = 9 → divisible by 9.

Q20. What is 2⁰?

A) 0
B) 1
C) 2
D) Undefined

Answer: B) 1

Solution:
Any non-zero number raised to power 0 = 1.

2. HCF & LCM — 20 MCQs
Q1. Find the HCF of 12 and 18.

A) 2
B) 3
C) 6
D) 9

Answer: C) 6

Solution:
Factors common to both include 1, 2, 3, 6. Highest = 6.

Q2. Find the LCM of 4 and 6.

A) 8
B) 10
C) 12
D) 24

Answer: C) 12

Solution:
Multiples: 4, 8, 12; 6, 12.

Q3. HCF of 20 and 30 is:

A) 5
B) 10
C) 15
D) 20

Answer: B) 10

Solution:
Common factors include 1, 2, 5, 10.

Q4. LCM of 8 and 12 is:

A) 16
B) 20
C) 24
D) 48

Answer: C) 24

Solution:
24 is the smallest number divisible by both 8 and 12.

Q5. HCF of 15 and 25 is:

A) 3
B) 5
C) 10
D) 15

Answer: B) 5

Solution:
Common factors: 1, 5 → HCF = 5.

Q6. LCM of 5 and 7 is:

A) 12
B) 25
C) 30
D) 35

Answer: D) 35

Solution:
5 and 7 are co-prime → LCM = 5×7 = 35.

Q7. HCF of 36 and 48 is:

A) 6
B) 8
C) 12
D) 16

Answer: C) 12

Solution:
Highest common factor = 12.

Q8. LCM of 10 and 15 is:

A) 20
B) 25
C) 30
D) 50

Answer: C) 30

Solution:
30 is the smallest common multiple.

Q9. HCF of 16 and 24 is:

A) 4
B) 6
C) 8
D) 12

Answer: C) 8

Solution:
Common factors include 1,2,4,8 → HCF = 8.

Q10. LCM of 9 and 12 is:

A) 18
B) 24
C) 36
D) 48

Answer: C) 36

Solution:
36 is divisible by both 9 and 12.

Q11. HCF of 27 and 45 is:

A) 3
B) 6
C) 9
D) 15

Answer: C) 9

Solution:
27 = 3³ and 45 = 3²×5 → HCF = 9.

Q12. LCM of 6, 8 and 12 is:

A) 12
B) 24
C) 36
D) 48

Answer: B) 24

Solution:
24 is divisible by 6, 8 and 12.

Q13. HCF of 42 and 56 is:

A) 7
B) 14
C) 21
D) 28

Answer: B) 14

Solution:
42 = 14×3; 56 = 14×4.

Q14. LCM of 3, 4 and 5 is:

A) 30
B) 40
C) 50
D) 60

Answer: D) 60

Solution:
LCM = 3×4×5 = 60.

Q15. If HCF of two numbers is 5 and their product is 300, and one number is 15, the other is:

A) 10
B) 15
C) 20
D) 25

Answer: C) 20

Solution:
Other number = 300/15 = 20.

Q16. HCF of 64 and 96 is:

A) 16
B) 24
C) 32
D) 48

Answer: C) 32

Solution:
64 = 32×2 and 96 = 32×3.

Q17. LCM of 16 and 20 is:

A) 40
B) 60
C) 80
D) 100

Answer: C) 80

Solution:
16 = 2⁴, 20 = 2²×5 → LCM = 2⁴×5 = 80.

Q18. HCF of 18, 24 and 30 is:

A) 3
B) 6
C) 9
D) 12

Answer: B) 6

Solution:
6 divides all three numbers.

Q19. LCM of 2, 3, 4 and 5 is:

A) 30
B) 40
C) 60
D) 120

Answer: C) 60

Solution:
Smallest number divisible by all = 60.

Q20. If two numbers are co-prime, their HCF is:

A) 0
B) 1
C) 2
D) Their product

Answer: B) 1

Solution:
Co-prime numbers have no common factor other than 1.

3. Percentages — 20 MCQs
Q1. 20% of 250 is:

A) 25
B) 40
C) 50
D) 60

Answer: C) 50

Solution:
20/100 × 250 = 50.

Q2. 10% of 500 is:

A) 25
B) 40
C) 50
D) 100

Answer: C) 50

Solution:
500 × 10/100 = 50.

Q3. 25% of 400 is:

A) 50
B) 75
C) 100
D) 125

Answer: C) 100

Solution:
400 × 25/100 = 100.

Q4. 15% of 200 is:

A) 20
B) 25
C) 30
D) 35

Answer: C) 30

Solution:
200 × 15/100 = 30.

Q5. 50 is what percentage of 200?

A) 20%
B) 25%
C) 30%
D) 40%

Answer: B) 25%

Solution:
50/200 × 100 = 25%.

Q6. 80 is what percentage of 400?

A) 10%
B) 15%
C) 20%
D) 25%

Answer: C) 20%

Solution:
80/400 × 100 = 20%.

Q7. A number increases from 100 to 120. Percentage increase?

A) 10%
B) 15%
C) 20%
D) 25%

Answer: C) 20%

Solution:
Increase = 20.
20/100 × 100 = 20%.

Q8. A number decreases from 200 to 150. Percentage decrease?

A) 20%
B) 25%
C) 30%
D) 35%

Answer: B) 25%

Solution:
Decrease = 50.
50/200 ×100 = 25%.

Q9. 30% of a number is 90. Find the number.

A) 200
B) 250
C) 300
D) 350

Answer: C) 300

Solution:
30% × x = 90
x = 90×100/30 = 300.

Q10. 40% of a number is 160. The number is:

A) 200
B) 300
C) 400
D) 500

Answer: C) 400

Solution:
x = 160×100/40 = 400.

Q11. If 20% of x = 60, x = ?

A) 200
B) 250
C) 300
D) 350

Answer: C) 300

Solution:
x = 60×100/20 = 300.

Q12. A salary of ₹20,000 increases by 10%. New salary?

A) ₹21,000
B) ₹22,000
C) ₹23,000
D) ₹24,000

Answer: B) ₹22,000

Solution:
Increase = 10% of 20,000 = 2,000.
New salary = ₹22,000.

Q13. A price of ₹800 is reduced by 25%. New price?

A) ₹500
B) ₹550
C) ₹600
D) ₹650

Answer: C) ₹600

Solution:
25% of 800 = 200.
800−200 = 600.

Q14. 12.5% of 800 is:

A) 50
B) 75
C) 100
D) 125

Answer: C) 100

Solution:
12.5% = 1/8.
800/8 = 100.

Q15. 5% of 600 is:

A) 20
B) 25
C) 30
D) 35

Answer: C) 30

Solution:
600×5/100 = 30.

Q16. If a number is increased by 50%, it becomes 150. Original number?

A) 75
B) 100
C) 125
D) 150

Answer: B) 100

Solution:
150% of original = 150.
Original = 150/1.5 = 100.

Q17. A number is reduced by 20% and becomes 80. Original number?

A) 90
B) 100
C) 110
D) 120

Answer: B) 100

Solution:
80% of original = 80 → original = 100.

Q18. 75% of 120 is:

A) 80
B) 90
C) 100
D) 110

Answer: B) 90

Solution:
120×75/100 = 90.

Q19. 35% of 200 is:

A) 60
B) 65
C) 70
D) 75

Answer: C) 70

Solution:
200×35/100 = 70.

Q20. If 60% of students are boys and there are 300 students, number of boys?

A) 150
B) 160
C) 180
D) 200

Answer: C) 180

Solution:
300×60/100 = 180.

4. Profit, Loss & Discount — 20 MCQs
Q1. CP = ₹100, SP = ₹120. Profit?

A) ₹10
B) ₹20
C) ₹25
D) ₹30

Answer: B) ₹20

Solution:
Profit = SP − CP = 120−100 = ₹20.

Q2. CP = ₹500, SP = ₹400. Loss?

A) ₹50
B) ₹75
C) ₹100
D) ₹150

Answer: C) ₹100

Solution:
Loss = CP−SP = 500−400 = ₹100.

Q3. CP = ₹200, SP = ₹250. Profit percentage?

A) 20%
B) 25%
C) 30%
D) 35%

Answer: B) 25%

Solution:
Profit = 50.
50/200×100 = 25%.

Q4. CP = ₹500, SP = ₹450. Loss percentage?

A) 5%
B) 10%
C) 15%
D) 20%

Answer: B) 10%

Solution:
Loss = 50.
50/500×100 = 10%.

Q5. An article costs ₹1000 and is sold at 20% profit. SP?

A) ₹1100
B) ₹1150
C) ₹1200
D) ₹1250

Answer: C) ₹1200

Solution:
SP = 1000 + 20% = ₹1200.

Q6. An article costs ₹800 and is sold at 10% loss. SP?

A) ₹700
B) ₹720
C) ₹740
D) ₹760

Answer: B) ₹720

Solution:
10% of 800 = 80.
SP = 800−80 = ₹720.

Q7. Marked price = ₹1000, discount = 10%. Selling price?

A) ₹800
B) ₹850
C) ₹900
D) ₹950

Answer: C) ₹900

Solution:
Discount = 100.
SP = 1000−100 = ₹900.

Q8. Marked price = ₹2000, discount = 25%. SP?

A) ₹1200
B) ₹1400
C) ₹1500
D) ₹1600

Answer: C) ₹1500

Solution:
25% of 2000 = 500.
SP = ₹1500.

Q9. CP = ₹400, profit = 25%. SP?

A) ₹450
B) ₹500
C) ₹550
D) ₹600

Answer: B) ₹500

Solution:
25% of 400 = 100.
SP = ₹500.

Q10. CP = ₹1000, loss = 15%. SP?

A) ₹800
B) ₹850
C) ₹900
D) ₹950

Answer: B) ₹850

Solution:
15% of 1000 = 150.
SP = ₹850.

Q11. An article is sold for ₹600 at 20% profit. CP?

A) ₹400
B) ₹450
C) ₹500
D) ₹550

Answer: C) ₹500

Solution:
120% of CP = 600.
CP = 600/1.2 = ₹500.

Q12. An article is sold for ₹450 at 10% loss. CP?

A) ₹400
B) ₹450
C) ₹500
D) ₹550

Answer: C) ₹500

Solution:
90% of CP = 450.
CP = 450/0.9 = ₹500.

Q13. Discount on ₹1500 at 20% is:

A) ₹200
B) ₹250
C) ₹300
D) ₹350

Answer: C) ₹300

Solution:
1500×20/100 = ₹300.

Q14. If CP = SP, there is:

A) Profit
B) Loss
C) No profit/no loss
D) 10% profit

Answer: C) No profit/no loss

Solution:
Profit/Loss = SP−CP = 0.

Q15. A shopkeeper buys an item for ₹800 and sells it for ₹960. Profit percentage?

A) 15%
B) 20%
C) 25%
D) 30%

Answer: B) 20%

Solution:
Profit = 160.
160/800×100 = 20%.

Q16. CP = ₹1000 and profit = ₹250. Profit percentage?

A) 20%
B) 25%
C) 30%
D) 35%

Answer: B) 25%

Solution:
250/1000×100 = 25%.

Q17. A ₹2000 item is sold after a ₹400 discount. Discount percentage?

A) 10%
B) 15%
C) 20%
D) 25%

Answer: C) 20%

Solution:
400/2000×100 = 20%.

Q18. An article bought for ₹600 is sold for ₹720. Profit percentage?

A) 15%
B) 20%
C) 25%
D) 30%

Answer: B) 20%

Solution:
Profit = 120.
120/600×100 = 20%.

Q19. If an article is sold at 25% loss for ₹750, CP is:

A) ₹900
B) ₹950
C) ₹1000
D) ₹1100

Answer: C) ₹1000

Solution:
75% of CP = 750 → CP = ₹1000.

Q20. A product marked ₹500 is sold for ₹450. Discount percentage?

A) 5%
B) 10%
C) 15%
D) 20%

Answer: B) 10%

Solution:
Discount = 50.
50/500×100 = 10%.

5. Ratio & Proportion — 20 MCQs
Q1. Simplify 10:20.

A) 1:2
B) 2:1
C) 1:3
D) 2:3

Answer: A) 1:2

Solution:
Divide both by 10 → 1:2.

Q2. Ratio of 15 to 25 is:

A) 2:3
B) 3:5
C) 5:3
D) 4:5

Answer: B) 3:5

Solution:
15:25 = 3:5.

Q3. If A:B = 2:3 and B:C = 3:4, then A:C = ?

A) 1:2
B) 2:4
C) 2:3
D) 3:4

Answer: B) 2:4

Solution:
A:B:C = 2:3:4 → A:C = 2:4 = 1:2.

Q4. Divide ₹1000 in the ratio 2:3.

A) ₹200, ₹800
B) ₹400, ₹600
C) ₹300, ₹700
D) ₹500, ₹500

Answer: B) ₹400, ₹600

Solution:
Total parts = 5.
1000/5 = 200.
2 parts = 400; 3 parts = 600.

Q5. If 3:5 = x:20, x = ?

A) 10
B) 12
C) 15
D) 18

Answer: B) 12

Solution:
3/5 = x/20 → x = 12.

Q6. Ratio of 2 hours to 30 minutes is:

A) 2:1
B) 3:1
C) 4:1
D) 5:1

Answer: C) 4:1

Solution:
2 hours = 120 min.
120:30 = 4:1.

Q7. Ratio of 1 kg to 250 g is:

A) 2:1
B) 3:1
C) 4:1
D) 5:1

Answer: C) 4:1

Solution:
1 kg = 1000 g.
1000:250 = 4:1.

Q8. If A:B = 4:5 and A = 20, B = ?

A) 15
B) 20
C) 25
D) 30

Answer: C) 25

Solution:
4 parts = 20 → 1 part = 5.
B = 5×5 = 25.

Q9. If boys:girls = 3:2 and total students = 50, boys?

A) 20
B) 25
C) 30
D) 35

Answer: C) 30

Solution:
Total parts = 5.
50/5 = 10.
Boys = 3×10 = 30.

Q10. If x:y = 5:7 and x = 25, y = ?

A) 30
B) 35
C) 40
D) 45

Answer: B) 35

Solution:
5 parts = 25 → 1 part = 5.
y = 7×5 = 35.

Q11. Simplify 24:36.

A) 2:3
B) 3:2
C) 4:5
D) 1:2

Answer: A) 2:3

Solution:
Divide by 12 → 2:3.

Q12. If 4 pens cost ₹40, cost of 10 pens?

A) ₹80
B) ₹90
C) ₹100
D) ₹120

Answer: C) ₹100

Solution:
1 pen = ₹10 → 10 pens = ₹100.

Q13. 5 workers complete a job in 10 days. At the same rate, 10 workers take:

A) 2 days
B) 5 days
C) 10 days
D) 20 days

Answer: B) 5 days

Solution:
Workers double → time becomes half.

Q14. Ratio of 45 minutes to 1 hour is:

A) 2:3
B) 3:4
C) 4:5
D) 1:2

Answer: B) 3:4

Solution:
45:60 = 3:4.

Q15. If 6:x = 3:4, x = ?

A) 6
B) 8
C) 10
D) 12

Answer: B) 8

Solution:
6/x = 3/4 → x = 8.

Q16. Divide ₹900 in ratio 4:5.

A) ₹300, ₹600
B) ₹400, ₹500
C) ₹350, ₹550
D) ₹450, ₹450

Answer: B) ₹400, ₹500

Solution:
9 parts = 900 → 1 part = 100.

Q17. If 2:3 = 8:x, x = ?

A) 10
B) 12
C) 14
D) 16

Answer: B) 12

Solution:
2/3 = 8/x → x = 12.

Q18. A:B = 7:3. If total = 50, A = ?

A) 30
B) 35
C) 40
D) 45

Answer: B) 35

Solution:
10 parts = 50 → 1 part = 5.
A = 7×5 = 35.

Q19. Ratio of 500 ml to 2 litres is:

A) 1:2
B) 1:3
C) 1:4
D) 2:5

Answer: C) 1:4

Solution:
2 litres = 2000 ml.
500:2000 = 1:4.

Q20. If A:B = 3:4 and B:C = 2:5, then A:B:C is:

A) 3:4:10
B) 6:8:20
C) 3:2:5
D) 6:4:10

Answer: B) 6:8:20

Solution:
Make B common:
3:4 ×2 = 6:8
2:5 ×4 = 8:20
Therefore 6:8:20.

6. Average — 20 MCQs
Q1. Average of 10, 20 and 30?

A) 15
B) 20
C) 25
D) 30

Answer: B) 20

Solution:
(10+20+30)/3 = 20.

Q2. Average of 5, 10, 15, 20?

A) 10
B) 12.5
C) 15
D) 17.5

Answer: B) 12.5

Solution:
50/4 = 12.5.

Q3. Average of first five natural numbers?

A) 2
B) 3
C) 4
D) 5

Answer: B) 3

Solution:
(1+2+3+4+5)/5 = 3.

Q4. Average of 20 and 40?

A) 20
B) 25
C) 30
D) 35

Answer: C) 30

Solution:
60/2 = 30.

Q5. Average of 10 numbers is 20. Their total is:

A) 100
B) 150
C) 200
D) 250

Answer: C) 200

Solution:
Total = Average × Number = 20×10 = 200.

Q6. Average of 6 numbers is 15. Total?

A) 60
B) 75
C) 90
D) 100

Answer: C) 90

Solution:
15×6 = 90.

Q7. Average of 12, 18, 24?

A) 16
B) 18
C) 20
D) 22

Answer: B) 18

Solution:
54/3 = 18.

Q8. Average of 5 numbers is 20. If one number is 30, sum of remaining four?

A) 60
B) 70
C) 80
D) 90

Answer: C) 70

Solution:
Total = 5×20 = 100.
Remaining = 100−30 = 70.

Q9. Average of 4 numbers is 25. If 30 is added, new average?

A) 25
B) 26
C) 27
D) 28

Answer: B) 26

Solution:
Old total = 100.
New total = 130.
130/5 = 26.

Q10. Average of 10, 20, 30, 40, 50?

A) 20
B) 25
C) 30
D) 35

Answer: C) 30

Solution:
150/5 = 30.

Q11. Average age of 5 people is 20 years. Total age?

A) 80
B) 90
C) 100
D) 120

Answer: C) 100

Solution:
20×5 = 100.

Q12. Average of 8 numbers is 12.5. Total?

A) 80
B) 90
C) 100
D) 120

Answer: C) 100

Solution:
12.5×8 = 100.

Q13. Average of 7, 9 and 14?

A) 8
B) 9
C) 10
D) 11

Answer: C) 10

Solution:
30/3 = 10.

Q14. Average of 100 and 200?

A) 120
B) 150
C) 180
D) 200

Answer: B) 150

Solution:
300/2 = 150.

Q15. Average of first 10 even numbers?

A) 10
B) 11
C) 12
D) 15

Answer: B) 11

Solution:
Even numbers: 2 to 20.
Average = (2+20)/2 = 11.

Q16. Average of first 10 odd numbers?

A) 9
B) 10
C) 11
D) 12

Answer: B) 10

Solution:
First odd = 1, last = 19.
Average = (1+19)/2 = 10.

Q17. Average of 15, 25, 35, 45?

A) 25
B) 30
C) 35
D) 40

Answer: B) 30

Solution:
120/4 = 30.

Q18. A student's average marks in 4 subjects is 70. Total marks?

A) 240
B) 260
C) 280
D) 300

Answer: C) 280

Solution:
70×4 = 280.

Q19. Average of 3 numbers is 40. Two numbers are 30 and 50. Third number?

A) 30
B) 40
C) 50
D) 60

Answer: B) 40

Solution:
Total = 120.
Third = 120−30−50 = 40.

Q20. Average of 5 consecutive numbers is 25. Middle number?

A) 23
B) 24
C) 25
D) 26

Answer: C) 25

Solution:
For consecutive numbers, average = middle number.

7. Simple Interest & Compound Interest — 20 MCQs
Q1. Find SI on ₹1000 at 10% for 2 years.

A) ₹100
B) ₹150
C) ₹200
D) ₹250

Answer: C) ₹200

Solution:
SI = PRT/100 = 1000×10×2/100 = ₹200.

Q2. SI on ₹2000 at 5% for 3 years?

A) ₹200
B) ₹300
C) ₹400
D) ₹500

Answer: B) ₹300

Solution:
2000×5×3/100 = ₹300.

Q3. SI on ₹5000 at 10% for 1 year?

A) ₹400
B) ₹500
C) ₹600
D) ₹700

Answer: B) ₹500

Solution:
5000×10×1/100 = ₹500.

Q4. Principal = ₹1000, SI = ₹200, rate = 10%. Time?

A) 1 year
B) 2 years
C) 3 years
D) 4 years

Answer: B) 2 years

Solution:
200 = 1000×10×T/100 → T = 2 years.

Q5. Principal = ₹2000, rate = 5%, time = 2 years. Amount?

A) ₹2100
B) ₹2200
C) ₹2300
D) ₹2400

Answer: B) ₹2200

Solution:
SI = 200.
Amount = 2000+200 = ₹2200.

Q6. SI on ₹4000 at 8% for 2 years?

A) ₹540
B) ₹600
C) ₹640
D) ₹720

Answer: C) ₹640

Solution:
4000×8×2/100 = ₹640.

Q7. If P = ₹5000, R = 10%, T = 2 years, SI?

A) ₹500
B) ₹1000
C) ₹1500
D) ₹2000

Answer: B) ₹1000

Solution:
5000×10×2/100 = ₹1000.

Q8. Compound interest is calculated on:

A) Principal only
B) Principal + accumulated interest
C) Interest only
D) Rate only

Answer: B

Solution:
CI includes interest earned in previous periods.

Q9. CI on ₹1000 at 10% for 2 years?

A) ₹200
B) ₹210
C) ₹220
D) ₹250

Answer: B) ₹210

Solution:
Amount = 1000(1.1)² = 1210.
CI = ₹210.

Q10. Amount on ₹2000 at 10% CI for 2 years?

A) ₹2200
B) ₹2400
C) ₹2420
D) ₹2500

Answer: C) ₹2420

Solution:
2000×1.1×1.1 = ₹2420.

Q11. CI on ₹5000 at 10% for 2 years?

A) ₹1000
B) ₹1050
C) ₹1100
D) ₹1150

Answer: B) ₹1050

Solution:
Amount = 5000×1.21 = 6050.
CI = ₹1050.

Q12. SI on ₹3000 at 6% for 4 years?

A) ₹620
B) ₹720
C) ₹820
D) ₹920

Answer: B) ₹720

Solution:
3000×6×4/100 = ₹720.

Q13. If SI = ₹500, P = ₹2500, T = 2 years, rate?

A) 5%
B) 10%
C) 15%
D) 20%

Answer: B) 10%

Solution:
R = 500×100/(2500×2) = 10%.

Q14. If P = ₹4000, R = 5%, T = 3 years, amount?

A) ₹4300
B) ₹4500
C) ₹4600
D) ₹4800

Answer: C) ₹4600

Solution:
SI = 4000×5×3/100 = 600.
Amount = ₹4600.

Q15. SI on ₹10,000 at 8% for 2 years?

A) ₹1200
B) ₹1400
C) ₹1600
D) ₹1800

Answer: C) ₹1600

Solution:
10000×8×2/100 = ₹1600.

Q16. Difference between CI and SI on ₹1000 at 10% for 2 years?

A) ₹5
B) ₹10
C) ₹15
D) ₹20

Answer: B) ₹10

Solution:
CI = ₹210, SI = ₹200. Difference = ₹10.

Q17. SI on ₹1500 at 4% for 5 years?

A) ₹200
B) ₹250
C) ₹300
D) ₹350

Answer: C) ₹300

Solution:
1500×4×5/100 = ₹300.

Q18. If SI on ₹2000 for 2 years is ₹400, rate?

A) 5%
B) 10%
C) 15%
D) 20%

Answer: B) 10%

Solution:
R = 400×100/(2000×2) = 10%.

Q19. If P = ₹5000 and SI = ₹1000, amount?

A) ₹5000
B) ₹5500
C) ₹6000
D) ₹6500

Answer: C) ₹6000

Solution:
Amount = P + SI = ₹6000.

Q20. At 10% simple interest, ₹1000 becomes:

A) ₹1100 after 1 year
B) ₹1200 after 1 year
C) ₹1500 after 1 year
D) ₹2000 after 1 year

Answer: A) ₹1100

Solution:
SI = 10% of 1000 = ₹100.
Amount = ₹1100.
"""

def parse_questions(text):
    topics_data = {}
    
    # Split by topic headers like '1. Number System — 20 MCQs'
    topic_blocks = re.split(r'\d+\.\s+([A-Za-z &,-]+)\s+—\s+\d+\s+MCQs', text)
    
    # topic_blocks[0] is everything before the first topic
    for i in range(1, len(topic_blocks), 2):
        topic_name = topic_blocks[i].strip()
        questions_text = topic_blocks[i+1]
        
        q_blocks = re.split(r'(Q\d+\..+?)(?=Q\d+\.|$)', questions_text, flags=re.DOTALL)
        
        questions_arr = []
        q_id = 1
        
        for q_text in q_blocks:
            if not q_text.strip():
                continue
                
            q_match = re.search(r'Q\d+\.\s+(.*?)(?=A\))', q_text, re.DOTALL)
            options_match = re.findall(r'([A-D]\))\s+(.*?)(?=[A-D]\)|Answer:|$)', q_text, re.DOTALL)
            ans_match = re.search(r'Answer:\s+([A-D]\)\s+.*?)(?=Solution:|$)', q_text, re.DOTALL)
            if not ans_match:
                ans_match = re.search(r'Answer:\s+([A-D])(?=Solution:|$)', q_text, re.DOTALL)
                
            sol_match = re.search(r'Solution:\s+(.*?)$', q_text, re.DOTALL)
            
            if q_match and len(options_match) >= 4 and ans_match:
                q = q_match.group(1).strip()
                opts = [f'{m[0]} {m[1].strip()}' for m in options_match[:4]]
                ans = ans_match.group(1).strip()
                if not ')' in ans: # some answer just say 'B'
                    # try to match with options
                    for opt in opts:
                        if opt.startswith(ans):
                            ans = opt
                            break
                sol = sol_match.group(1).strip() if sol_match else ''
                
                questions_arr.append({
                    'id': q_id,
                    'question': q,
                    'options': opts,
                    'answer': ans,
                    'explanation': sol
                })
                q_id += 1
                
        topics_data[topic_name] = questions_arr
        
    return topics_data

topics_data = parse_questions(text)

filenames = {
    'Number System': 'numberSystemQuestions',
    'HCF & LCM': 'hcfLcmQuestions',
    'Percentages': 'percentagesQuestions',
    'Profit, Loss & Discount': 'profitLossQuestions',
    'Ratio & Proportion': 'ratioProportionQuestions',
    'Average': 'averageQuestions',
    'Simple Interest & Compound Interest': 'interestQuestions'
}

for topic, q_arr in topics_data.items():
    if topic in filenames:
        var_name = filenames[topic]
        file_path = f'{var_name}.js'
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f'export const {var_name} = ')
            json.dump(q_arr, f, indent=2, ensure_ascii=False)
            f.write(';\n')
        print(f'Created {file_path} with {len(q_arr)} questions.')
    else:
        print(f'Warning: No filename for {topic}')

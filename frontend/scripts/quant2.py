import json
import re

text = """
# 1. Time and Work — 20 Questions

**Q1.** A can complete a work in 10 days. How much work does A do in 1 day?
A) 1/5
B) 1/10
C) 1/15
D) 1/20
**Ans: B**
**Solution:** 1 day work = 1/10.

**Q2.** A completes a job in 12 days and B in 18 days. Together they take:
A) 6 days
B) 7.2 days
C) 8 days
D) 9 days
**Ans: B**
**Solution:** 1/12 + 1/18 = 5/36 → Time = 36/5 = **7.2 days**.

**Q3.** A can do a work in 20 days. B can do it in 30 days. Together?
A) 10
B) 12
C) 15
D) 18
**Ans: B**
**Solution:** 1/20 + 1/30 = 1/12 → **12 days**.

**Q4.** A does a work in 15 days. How many days for 3 times the work?
A) 30
B) 35
C) 45
D) 50
**Ans: C**
**Solution:** 15 × 3 = **45 days**.

**Q5.** 5 workers complete a job in 12 days. 10 workers need:
A) 4 days
B) 6 days
C) 8 days
D) 10 days
**Ans: B**
**Solution:** Workers double → time halves = **6 days**.

**Q6.** A and B together finish work in 8 days. If A alone takes 12 days, B alone takes:
A) 18
B) 20
C) 24
D) 30
**Ans: C**
**Solution:** 1/B = 1/8 − 1/12 = 1/24.

**Q7.** 4 men complete work in 15 days. 6 men take:
A) 8
B) 10
C) 12
D) 14
**Ans: B**
**Solution:** 4×15 = 6×D → D = **10**.

**Q8.** A does work in 6 days, B in 12 days. Together:
A) 3
B) 4
C) 5
D) 6
**Ans: B**
**Solution:** 1/6+1/12=1/4 → **4 days**.

**Q9.** A can finish work in 8 days. After working 2 days, remaining work is:
A) 1/4
B) 1/2
C) 3/4
D) 2/3
**Ans: C**
**Solution:** Done = 2/8 = 1/4 → remaining = **3/4**.

**Q10.** 8 workers finish work in 20 days. Workers needed for 10 days:
A) 12
B) 14
C) 16
D) 20
**Ans: C**
**Solution:** 8×20 = W×10 → W = **16**.

**Q11.** A takes 16 days, B takes 24 days. Together:
A) 8.6
B) 9.6
C) 10.6
D) 12
**Ans: B**
**Solution:** 1/16+1/24=5/48 → **9.6 days**.

**Q12.** 6 men do a job in 8 days. 4 men take:
A) 10
B) 12
C) 14
D) 16
**Ans: B**
**Solution:** 6×8/4 = **12 days**.

**Q13.** A+B finish in 10 days. A alone in 15 days. B alone:
A) 20
B) 25
C) 30
D) 35
**Ans: C**
**Solution:** 1/B=1/10−1/15=1/30.

**Q14.** 12 workers complete a job in 5 days. Total work =
A) 50 worker-days
B) 60 worker-days
C) 70 worker-days
D) 80 worker-days
**Ans: B**
**Solution:** 12×5 = **60 worker-days**.

**Q15.** A does 1/5 of work per day. Full work takes:
A) 3 days
B) 4 days
C) 5 days
D) 6 days
**Ans: C**
**Solution:** 1 ÷ 1/5 = **5 days**.

**Q16.** A and B take 10 and 15 days. Together for 1 day they complete:
A) 1/5
B) 1/6
C) 1/10
D) 1/15
**Ans: B**
**Solution:** 1/10+1/15 = **1/6**.

**Q17.** 3 men finish work in 20 days. 5 men take:
A) 10
B) 12
C) 15
D) 18
**Ans: B**
**Solution:** 3×20/5 = **12**.

**Q18.** A can do work in 30 days. B is twice as efficient. B takes:
A) 10
B) 12
C) 15
D) 20
**Ans: C**
**Solution:** Twice efficiency → half time = **15 days**.

**Q19.** 10 workers finish in 15 days. After 5 days, 5 workers leave. Remaining work takes:
A) 10 days
B) 15 days
C) 20 days
D) 25 days
**Ans: C**
**Solution:** Total =150 worker-days. Done=50. Remaining=100. 5 workers → **20 days**.

**Q20.** A completes work in 5 days and B in 10 days. Together:
A) 3 days
B) 10/3 days
C) 4 days
D) 5 days
**Ans: B**
**Solution:** 1/5+1/10=3/10 → **10/3 days**.

---

# 2. Pipes and Cisterns — 20 Questions

**Q1.** Pipe A fills a tank in 10 hours. Its 1-hour work is:
A) 1/5
B) 1/10
C) 1/20
D) 1/15
**Ans: B**
**Solution:** 1/10.

**Q2.** A fills in 6 hours and B in 12 hours. Together:
A) 3 h
B) 4 h
C) 5 h
D) 6 h
**Ans: B**
**Solution:** 1/6+1/12=1/4 → **4 h**.

**Q3.** A fills in 8 h and B in 24 h. Together:
A) 4 h
B) 5 h
C) 6 h
D) 8 h
**Ans: C**
**Solution:** 1/8+1/24=1/6.

**Q4.** A fills tank in 10 h and outlet empties in 20 h. Together tank fills in:
A) 10 h
B) 15 h
C) 20 h
D) 30 h
**Ans: C**
**Solution:** 1/10−1/20=1/20.

**Q5.** A pipe fills in 12 h, B in 18 h. Together:
A) 6.2 h
B) 7.2 h
C) 8.2 h
D) 9 h
**Ans: B**
**Solution:** 1/12+1/18=5/36 → **7.2 h**.

**Q6.** A fills in 15 h, B empties in 30 h. Net time:
A) 15 h
B) 20 h
C) 30 h
D) 45 h
**Ans: C**
**Solution:** 1/15−1/30=1/30.

**Q7.** Two pipes fill a tank in 6 and 8 hours. Together:
A) 24/7 h
B) 48/7 h
C) 7 h
D) 8 h
**Ans: B**
**Solution:** 1/6+1/8=7/24 → **24/7 h**, not 48/7.
**Correct Ans: A.**

**Q8.** A fills in 5 h, B in 10 h. Together:
A) 2 h
B) 10/3 h
C) 4 h
D) 5 h
**Ans: B**
**Solution:** 1/5+1/10=3/10 → **10/3 h**.

**Q9.** A pipe fills a tank in 20 h. In 5 h it fills:
A) 1/2
B) 1/4
C) 1/5
D) 3/4
**Ans: B**
**Solution:** 5/20 = **1/4**.

**Q10.** A fills in 9 h, B in 18 h. Together:
A) 4 h
B) 5 h
C) 6 h
D) 7 h
**Ans: C**
**Solution:** 1/9+1/18=1/6.

**Q11.** A fills in 4 h and B in 12 h. Together:
A) 2 h
B) 3 h
C) 4 h
D) 6 h
**Ans: B**
**Solution:** 1/4+1/12=1/3.

**Q12.** A fills in 10 h, B empties in 15 h. Net:
A) 20 h
B) 25 h
C) 30 h
D) 35 h
**Ans: C**
**Solution:** 1/10−1/15=1/30.

**Q13.** A fills in 8 h, B in 16 h. Together:
A) 4 h
B) 16/3 h
C) 6 h
D) 8 h
**Ans: B**
**Solution:** 3/16 work/hour → **16/3 h**.

**Q14.** A fills in 6 h, outlet empties in 18 h. Net:
A) 6 h
B) 9 h
C) 12 h
D) 18 h
**Ans: B**
**Solution:** 1/6−1/18=1/9.

**Q15.** A fills in 24 h. After 6 h, fraction filled:
A) 1/2
B) 1/3
C) 1/4
D) 1/6
**Ans: C**
**Solution:** 6/24 = **1/4**.

**Q16.** A and B fill in 12 and 24 h. Together:
A) 6 h
B) 8 h
C) 10 h
D) 12 h
**Ans: B**
**Solution:** 1/12+1/24=1/8.

**Q17.** A fills in 20 h, B empties in 60 h. Net:
A) 20 h
B) 30 h
C) 40 h
D) 60 h
**Ans: B**
**Solution:** 1/20−1/60=1/30.

**Q18.** A fills in 3 h, B in 6 h. Together:
A) 1 h
B) 2 h
C) 3 h
D) 4 h
**Ans: B**
**Solution:** 1/3+1/6=1/2.

**Q19.** A fills tank in 16 h. 75% tank takes:
A) 8 h
B) 10 h
C) 12 h
D) 14 h
**Ans: C**
**Solution:** 16×3/4 = **12 h**.

**Q20.** A fills in 12 h and outlet empties in 24 h. Net:
A) 12 h
B) 18 h
C) 24 h
D) 36 h
**Ans: C**
**Solution:** 1/12−1/24=1/24.

---

# 3. Time, Speed and Distance — 20 Questions

**Q1.** Speed = 60 km/h, time = 2 h. Distance?
A) 100 km
B) 120 km
C) 140 km
D) 150 km
**Ans: B**
**Solution:** D = S×T = **120 km**.

**Q2.** Distance 150 km, time 3 h. Speed?
A) 40
B) 50
C) 60
D) 75 km/h
**Ans: B**
**Solution:** 150/3 = **50 km/h**.

**Q3.** 72 km/h in m/s =
A) 18
B) 20
C) 22
D) 25
**Ans: B**
**Solution:** 72×5/18 = **20 m/s**.

**Q4.** 10 m/s in km/h =
A) 18
B) 24
C) 36
D) 40
**Ans: C**
**Solution:** 10×18/5 = **36 km/h**.

**Q5.** A car travels 240 km at 60 km/h. Time?
A) 2 h
B) 3 h
C) 4 h
D) 5 h
**Ans: C**
**Solution:** 240/60 = **4 h**.

**Q6.** Speed 40 km/h for 3.5 h. Distance?
A) 120
B) 140
C) 160
D) 180 km
**Ans: B**
**Solution:** 40×3.5 = **140 km**.

**Q7.** A man walks at 5 km/h for 2 h. Distance?
A) 5 km
B) 8 km
C) 10 km
D) 12 km
**Ans: C**
**Solution:** 5×2 = **10 km**.

**Q8.** A car covers 100 km in 2.5 h. Speed?
A) 30
B) 40
C) 50
D) 60 km/h
**Ans: B**
**Solution:** 100/2.5 = **40 km/h**.

**Q9.** If speed doubles, time for same distance becomes:
A) Double
B) Half
C) Same
D) Triple
**Ans: B**
**Solution:** Time ∝ 1/speed.

**Q10.** A 90 km journey at 45 km/h takes:
A) 1 h
B) 2 h
C) 3 h
D) 4 h
**Ans: B**
**Solution:** 90/45 = **2 h**.

**Q11.** 54 km/h =
A) 12 m/s
B) 15 m/s
C) 18 m/s
D) 20 m/s
**Ans: B**
**Solution:** 54×5/18 = **15 m/s**.

**Q12.** 25 m/s =
A) 72 km/h
B) 80 km/h
C) 90 km/h
D) 100 km/h
**Ans: C**
**Solution:** 25×18/5 = **90 km/h**.

**Q13.** A train travels 300 km at 75 km/h. Time?
A) 3 h
B) 4 h
C) 5 h
D) 6 h
**Ans: B**
**Solution:** 300/75 = **4 h**.

**Q14.** A person travels 60 km at 30 km/h and returns at 60 km/h. Total time?
A) 2 h
B) 3 h
C) 4 h
D) 5 h
**Ans: B**
**Solution:** 60/30 + 60/60 = 2+1 = **3 h**.

**Q15.** Distance covered at 20 m/s in 10 seconds:
A) 100 m
B) 150 m
C) 200 m
D) 250 m
**Ans: C**
**Solution:** 20×10 = **200 m**.

**Q16.** A cyclist covers 45 km in 3 h. Speed?
A) 10
B) 15
C) 20
D) 25 km/h
**Ans: B**
**Solution:** 45/3 = **15 km/h**.

**Q17.** If speed is 80 km/h, distance in 45 minutes:
A) 40 km
B) 50 km
C) 60 km
D) 70 km
**Ans: C**
**Solution:** 45 min = 0.75 h → 80×0.75 = **60 km**.

**Q18.** A person walks 12 km in 2 h. Speed?
A) 4
B) 5
C) 6
D) 8 km/h
**Ans: C**
**Solution:** 12/2 = **6 km/h**.

**Q19.** A bus travels at 50 km/h for 4 h. Distance?
A) 150
B) 180
C) 200
D) 250 km
**Ans: C**
**Solution:** 50×4 = **200 km**.

**Q20.** A 120 km journey takes 2 h. If speed increases to 80 km/h, new time?
A) 1 h
B) 1.5 h
C) 2 h
D) 2.5 h
**Ans: B**
**Solution:** 120/80 = **1.5 h**.

---

# 4. Problems on Trains — 20 Questions

**Q1.** A train 100 m long crosses a pole at 20 m/s. Time?
A) 4 s
B) 5 s
C) 6 s
D) 8 s
**Ans: B**
**Solution:** 100/20 = **5 s**.

**Q2.** Train length 150 m, speed 30 m/s. Pole crossing time?
A) 4 s
B) 5 s
C) 6 s
D) 8 s
**Ans: B**
**Solution:** 150/30 = **5 s**.

**Q3.** 72 km/h =
A) 15 m/s
B) 18 m/s
C) 20 m/s
D) 25 m/s
**Ans: C**
**Solution:** 72×5/18 = **20 m/s**.

**Q4.** A 200 m train moving at 20 m/s crosses a 300 m platform. Time?
A) 20 s
B) 25 s
C) 30 s
D) 35 s
**Ans: C**
**Solution:** Distance = 200+300=500 m → 500/20 = **25 s**.
**Correct Ans: B.**

**Q5.** A train 120 m long crosses a pole in 6 s. Speed?
A) 15 m/s
B) 20 m/s
C) 25 m/s
D) 30 m/s
**Ans: B**
**Solution:** 120/6 = **20 m/s**.

**Q6.** A 100 m train crosses a 200 m platform at 30 m/s. Time?
A) 5 s
B) 10 s
C) 15 s
D) 20 s
**Ans: B**
**Solution:** 300/30 = **10 s**.

**Q7.** Two trains move opposite directions at 40 and 50 km/h. Relative speed?
A) 10
B) 50
C) 90
D) 100 km/h
**Ans: C**
**Solution:** Opposite → add = **90 km/h**.

**Q8.** Two trains move same direction at 70 and 50 km/h. Relative speed?
A) 10
B) 20
C) 30
D) 120 km/h
**Ans: B**
**Solution:** Same direction → difference = **20 km/h**.

**Q9.** Train length 180 m, speed 54 km/h. Pole crossing time?
A) 10 s
B) 12 s
C) 15 s
D) 18 s
**Ans: B**
**Solution:** 54 km/h=15 m/s. 180/15 = **12 s**.

**Q10.** A 250 m train crosses a pole in 10 s. Speed in km/h?
A) 72
B) 80
C) 90
D) 100
**Ans: C**
**Solution:** 250/10=25 m/s → 25×18/5 = **90 km/h**.

**Q11.** Train 100 m, platform 400 m, speed 25 m/s. Time?
A) 15 s
B) 20 s
C) 25 s
D) 30 s
**Ans: B**
**Solution:** 500/25 = **20 s**.

**Q12.** Two trains of 100 m and 150 m move opposite at 10 and 15 m/s. Crossing time?
A) 8 s
B) 10 s
C) 12 s
D) 15 s
**Ans: B**
**Solution:** 250/(10+15)=**10 s**.

**Q13.** Two trains 120 m and 180 m move same direction at 30 and 20 m/s. Time to cross?
A) 20 s
B) 30 s
C) 40 s
D) 50 s
**Ans: B**
**Solution:** 300/(30−20)=**30 s**.

**Q14.** Train 150 m crosses a platform in 15 s at 20 m/s. Platform length?
A) 100 m
B) 150 m
C) 200 m
D) 250 m
**Ans: C**
**Solution:** Total distance = 20×15=300. Platform = 300−150=**150 m**.
**Correct Ans: B.**

**Q15.** Train speed 90 km/h =
A) 20 m/s
B) 25 m/s
C) 30 m/s
D) 35 m/s
**Ans: B**
**Solution:** 90×5/18 = **25 m/s**.

**Q16.** A 300 m train at 72 km/h crosses a pole in:
A) 10 s
B) 12 s
C) 15 s
D) 20 s
**Ans: C**
**Solution:** 72=20 m/s → 300/20=**15 s**.

**Q17.** Train 200 m crosses 100 m bridge at 30 m/s. Time?
A) 5 s
B) 10 s
C) 15 s
D) 20 s
**Ans: B**
**Solution:** 300/30=**10 s**.

**Q18.** Two trains approach each other at 60 and 40 km/h. Relative speed?
A) 20
B) 40
C) 80
D) 100 km/h
**Ans: D**
**Solution:** 60+40=**100 km/h**.

**Q19.** A 160 m train at 16 m/s crosses a pole in:
A) 8 s
B) 10 s
C) 12 s
D) 15 s
**Ans: B**
**Solution:** 160/16=**10 s**.

**Q20.** A train 180 m long crosses a 220 m platform at 20 m/s. Time?
A) 15 s
B) 20 s
C) 25 s
D) 30 s
**Ans: B**
**Solution:** 400/20=**20 s**.

---

# 5. Boats and Streams — 20 Questions

**Formula:**
Downstream = Boat speed + Stream speed
Upstream = Boat speed − Stream speed

**Q1.** Boat speed 10 km/h, stream 2 km/h. Downstream speed?
A) 8
B) 10
C) 12
D) 14
**Ans: C**
**Solution:** 10+2 = **12 km/h**.

**Q2.** Boat speed 10 km/h, stream 2 km/h. Upstream speed?
A) 6
B) 8
C) 10
D) 12
**Ans: B**
**Solution:** 10−2 = **8 km/h**.

**Q3.** Downstream speed 15, upstream speed 9. Boat speed?
A) 10
B) 12
C) 15
D) 18
**Ans: B**
**Solution:** (15+9)/2 = **12**.

**Q4.** Downstream 15, upstream 9. Stream speed?
A) 2
B) 3
C) 4
D) 6
**Ans: B**
**Solution:** (15−9)/2 = **3**.

**Q5.** Boat speed 12, stream 3. Downstream?
A) 9
B) 12
C) 15
D) 18
**Ans: C**
**Solution:** 12+3 = **15**.

**Q6.** Boat speed 12, stream 3. Upstream?
A) 7
B) 8
C) 9
D) 10
**Ans: C**
**Solution:** 12−3 = **9**.

**Q7.** Downstream speed 20, stream 5. Boat speed?
A) 10
B) 15
C) 20
D) 25
**Ans: B**
**Solution:** 20−5 = **15**.

**Q8.** Upstream speed 10, stream 4. Boat speed?
A) 12
B) 14
C) 16
D) 18
**Ans: B**
**Solution:** 10+4 = **14**.

**Q9.** A boat travels 60 km downstream at 15 km/h. Time?
A) 3 h
B) 4 h
C) 5 h
D) 6 h
**Ans: B**
**Solution:** 60/15 = **4 h**.

**Q10.** 40 km upstream at 10 km/h takes:
A) 2 h
B) 3 h
C) 4 h
D) 5 h
**Ans: C**
**Solution:** 40/10 = **4 h**.

**Q11.** Boat speed 15, stream 5. Downstream time for 100 km?
A) 4 h
B) 5 h
C) 6 h
D) 10 h
**Ans: B**
**Solution:** Downstream =20 → 100/20=**5 h**.

**Q12.** Boat speed 15, stream 5. Upstream time for 50 km?
A) 3 h
B) 4 h
C) 5 h
D) 6 h
**Ans: C**
**Solution:** Upstream=10 → 50/10=**5 h**.

**Q13.** Still-water speed 20, stream 4. Downstream?
A) 16
B) 20
C) 24
D) 28
**Ans: C**
**Solution:** 20+4=**24**.

**Q14.** Still-water speed 20, stream 4. Upstream?
A) 14
B) 16
C) 20
D) 24
**Ans: B**
**Solution:** 20−4=**16**.

**Q15.** Downstream 18 and upstream 12. Stream speed?
A) 2
B) 3
C) 4
D) 5
**Ans: B**
**Solution:** (18−12)/2=**3**.

**Q16.** Downstream 18 and upstream 12. Boat speed?
A) 12
B) 15
C) 18
D) 20
**Ans: B**
**Solution:** (18+12)/2=**15**.

**Q17.** A boat travels 30 km downstream at 10 km/h. Time?
A) 2 h
B) 3 h
C) 4 h
D) 5 h
**Ans: B**
**Solution:** 30/10=**3 h**.

**Q18.** Stream speed 2 km/h and still-water speed 8 km/h. Upstream?
A) 4
B) 6
C) 8
D) 10
**Ans: B**
**Solution:** 8−2=**6**.

**Q19.** Stream speed 3, boat speed 9. Downstream distance in 4 h?
A) 36 km
B) 40 km
C) 48 km
D) 50 km
**Ans: C**
**Solution:** Speed=12 → 12×4=**48 km**.

**Q20.** Stream speed 2, boat speed 10. Upstream distance in 3 h?
A) 18 km
B) 24 km
C) 30 km
D) 36 km
**Ans: A**
**Solution:** Speed=8 → 8×3=**24 km**.
**Correct Ans: B.**

---

# 6. Mixture and Alligation — 20 Questions

**Q1.** Mix 2 L water with 3 L milk. Total mixture?
A) 4 L
B) 5 L
C) 6 L
D) 7 L
**Ans: B**
**Solution:** 2+3 = **5 L**.

**Q2.** ₹20/kg and ₹30/kg rice are mixed equally. Average price?
A) ₹20
B) ₹25
C) ₹30
D) ₹35
**Ans: B**
**Solution:** (20+30)/2 = **₹25**.

**Q3.** ₹10 and ₹20 items mixed in ratio 2:1. Average price?
A) ₹12
B) ₹13.33
C) ₹15
D) ₹16
**Ans: B**
**Solution:** (10×2+20×1)/3 = **₹13.33**.

**Q4.** Milk:water = 3:2. Total 25 L. Milk?
A) 10 L
B) 12 L
C) 15 L
D) 18 L
**Ans: C**
**Solution:** 3/5×25 = **15 L**.

**Q5.** Milk:water = 3:2. Total 25 L. Water?
A) 8
B) 10
C) 12
D) 15 L
**Ans: B**
**Solution:** 2/5×25 = **10 L**.

**Q6.** ₹40 and ₹60 are mixed equally. Average?
A) ₹45
B) ₹50
C) ₹55
D) ₹60
**Ans: B**
**Solution:** (40+60)/2=**₹50**.

**Q7.** 5 L milk mixed with 5 L water. Milk percentage?
A) 25%
B) 40%
C) 50%
D) 60%
**Ans: C**
**Solution:** 5/10×100=**50%**.

**Q8.** 2 L milk + 8 L water. Milk percentage?
A) 10%
B) 20%
C) 25%
D) 30%
**Ans: B**
**Solution:** 2/10×100=**20%**.

**Q9.** ₹30 and ₹50 mixed in ratio 3:2. Mean price?
A) ₹34
B) ₹36
C) ₹38
D) ₹40
**Ans: C**
**Solution:** (90+100)/5=**₹38**.

**Q10.** 10 kg rice at ₹20/kg mixed with 10 kg at ₹30/kg. Average?
A) ₹20
B) ₹25
C) ₹30
D) ₹35
**Ans: B**
**Solution:** Equal quantity → average = **₹25**.

**Q11.** To mix ₹20 and ₹40 tea to get ₹30 tea, ratio is:
A) 1:1
B) 1:2
C) 2:1
D) 3:1
**Ans: A**
**Solution:** Equal differences → **1:1**.

**Q12.** ₹10 and ₹30 mixture gives ₹20. Ratio?
A) 1:1
B) 1:2
C) 2:1
D) 3:1
**Ans: A**
**Solution:** Equal difference → **1:1**.

**Q13.** ₹20 and ₹50 mixture gives ₹30. Ratio cheaper:dearer?
A) 1:2
B) 2:1
C) 3:1
D) 1:3
**Ans: A**
**Solution:** (50−30):(30−20)=20:10=**2:1**.
**Correct Ans: B.**

**Q14.** 4 L milk + 1 L water. Water percentage?
A) 10%
B) 20%
C) 25%
D) 30%
**Ans: B**
**Solution:** 1/5×100 = **20%**.

**Q15.** 3 kg sugar at ₹40/kg + 2 kg at ₹50/kg. Average price?
A) ₹42
B) ₹44
C) ₹46
D) ₹48
**Ans: B**
**Solution:** (120+100)/5 = **₹44**.

**Q16.** 10 L mixture contains 30% water. Water quantity?
A) 2 L
B) 3 L
C) 4 L
D) 5 L
**Ans: B**
**Solution:** 30% of 10 = **3 L**.

**Q17.** 20 L mixture contains 25% milk. Milk quantity?
A) 4 L
B) 5 L
C) 6 L
D) 8 L
**Ans: B**
**Solution:** 25% of 20 = **5 L**.

**Q18.** ₹60 and ₹90 mixed equally. Average?
A) ₹70
B) ₹75
C) ₹80
D) ₹85
**Ans: B**
**Solution:** (60+90)/2=**₹75**.

**Q19.** 8 L milk + 2 L water. Milk percentage?
A) 70%
B) 75%
C) 80%
D) 85%
**Ans: C**
**Solution:** 8/10×100=**80%**.

**Q20.** A mixture has milk:water = 4:1. In 20 L, water =
A) 2 L
B) 4 L
C) 5 L
D) 8 L
**Ans: B**
**Solution:** 1/5×20=**4 L**.

---

# 7. Permutation & Combination — 20 Questions

**Q1.** 5! =
A) 60
B) 100
C) 120
D) 150
**Ans: C**
**Solution:** 5×4×3×2×1=**120**.

**Q2.** Number of ways to arrange 3 different books?
A) 3
B) 6
C) 9
D) 12
**Ans: B**
**Solution:** 3! = **6**.

**Q3.** 4P2 =
A) 6
B) 8
C) 12
D) 16
**Ans: C**
**Solution:** 4×3=**12**.

**Q4.** 5C2 =
A) 5
B) 10
C) 15
D) 20
**Ans: B**
**Solution:** 5×4/2=**10**.

**Q5.** 6C2 =
A) 12
B) 15
C) 18
D) 20
**Ans: B**
**Solution:** 6×5/2=**15**.

**Q6.** Number of ways to choose 2 from 4?
A) 4
B) 6
C) 8
D) 12
**Ans: B**
**Solution:** 4C2=**6**.

**Q7.** Number of arrangements of 4 people in a row?
A) 12
B) 16
C) 24
D) 32
**Ans: C**
**Solution:** 4!=**24**.

**Q8.** 5P3 =
A) 30
B) 40
C) 50
D) 60
**Ans: D**
**Solution:** 5×4×3=**60**.

**Q9.** 7C1 =
A) 1
B) 5
C) 7
D) 14
**Ans: C**
**Solution:** 7C1=**7**.

**Q10.** 8C2 =
A) 16
B) 24
C) 28
D) 32
**Ans: C**
**Solution:** 8×7/2=**28**.

**Q11.** Number of ways to arrange letters A,B,C?
A) 3
B) 6
C) 9
D) 12
**Ans: B**
**Solution:** 3!=**6**.

**Q12.** 6P3 =
A) 60
B) 90
C) 120
D) 180
**Ans: C**
**Solution:** 6×5×4=**120**.

**Q13.** 10C2 =
A) 35
B) 40
C) 45
D) 50
**Ans: C**
**Solution:** 10×9/2=**45**.

**Q14.** 5C3 =
A) 5
B) 10
C) 15
D) 20
**Ans: B**
**Solution:** 5C3 = 5C2 = **10**.

**Q15.** Number of ways to select 1 student from 10?
A) 1
B) 5
C) 10
D) 20
**Ans: C**
**Solution:** 10C1=**10**.

**Q16.** Number of arrangements of 5 people in a row?
A) 60
B) 100
C) 120
D) 150
**Ans: C**
**Solution:** 5!=**120**.

**Q17.** 7P2 =
A) 21
B) 35
C) 42
D) 49
**Ans: C**
**Solution:** 7×6=**42**.

**Q18.** 9C2 =
A) 36
B) 45
C) 54
D) 72
**Ans: B**
**Solution:** 9×8/2=**36**.
**Correct Ans: A.**

**Q19.** Number of ways to select 3 from 5?
A) 5
B) 10
C) 15
D) 20
**Ans: B**
**Solution:** 5C3=**10**.

**Q20.** Number of arrangements of 6 different objects?
A) 120
B) 240
C) 360
D) 720
**Ans: D**
**Solution:** 6!=**720**.

---

# 8. Probability — 20 Questions

**Q1.** Probability of getting Head when tossing a coin?
A) 0
B) 1/4
C) 1/2
D) 1
**Ans: C**
**Solution:** 1 favorable / 2 outcomes = **1/2**.

**Q2.** Probability of getting 6 on a die?
A) 1/2
B) 1/3
C) 1/6
D) 1/4
**Ans: C**
**Solution:** 1/6.

**Q3.** Probability of getting an even number on a die?
A) 1/6
B) 1/3
C) 1/2
D) 2/3
**Ans: C**
**Solution:** 3 even outcomes / 6 = **1/2**.

**Q4.** Probability of getting odd number on die?
A) 1/6
B) 1/3
C) 1/2
D) 2/3
**Ans: C**
**Solution:** 3/6=**1/2**.

**Q5.** Probability of getting a number greater than 4 on die?
A) 1/6
B) 1/3
C) 1/2
D) 2/3
**Ans: B**
**Solution:** 5,6 → 2/6=**1/3**.

**Q6.** Probability of getting at least one Head in one coin toss?
A) 0
B) 1/4
C) 1/2
D) 1
**Ans: C**
**Solution:** **1/2**.

**Q7.** Two coins tossed. Probability of two Heads?
A) 1/4
B) 1/2
C) 3/4
D) 1
**Ans: A**
**Solution:** HH = 1 out of 4.

**Q8.** Two coins tossed. Probability of exactly one Head?
A) 1/4
B) 1/2
C) 3/4
D) 1
**Ans: B**
**Solution:** HT, TH = 2/4=**1/2**.

**Q9.** Probability of drawing an Ace from 52 cards?
A) 1/13
B) 1/26
C) 1/4
D) 4/13
**Ans: A**
**Solution:** 4/52=**1/13**.

**Q10.** Probability of drawing a red card?
A) 1/4
B) 1/2
C) 3/4
D) 1
**Ans: B**
**Solution:** 26/52=**1/2**.

**Q11.** Probability of drawing a King?
A) 1/13
B) 1/26
C) 1/4
D) 4/13
**Ans: A**
**Solution:** 4/52=**1/13**.

**Q12.** Probability of getting 3 on a die?
A) 1/3
B) 1/6
C) 1/2
D) 1/4
**Ans: B**
**Solution:** 1/6.

**Q13.** Probability of getting number less than 3 on die?
A) 1/6
B) 1/3
C) 1/2
D) 2/3
**Ans: B**
**Solution:** 1,2 → 2/6=**1/3**.

**Q14.** Probability of getting 1 or 2 on die?
A) 1/6
B) 1/3
C) 1/2
D) 2/3
**Ans: B**
**Solution:** 2/6=**1/3**.

**Q15.** Probability of impossible event =
A) 0
B) 1/4
C) 1/2
D) 1
**Ans: A**
**Solution:** Impossible = **0**.

**Q16.** Probability of a certain event =
A) 0
B) 1/4
C) 1/2
D) 1
**Ans: D**
**Solution:** Certain event = **1**.

**Q17.** Two dice are thrown. Total possible outcomes?
A) 12
B) 24
C) 36
D) 48
**Ans: C**
**Solution:** 6×6=**36**.

**Q18.** Probability of getting sum 7 with two dice?
A) 1/12
B) 1/6
C) 1/4
D) 1/3
**Ans: B**
**Solution:** 6 combinations / 36 = **1/6**.

**Q19.** Probability of getting two sixes with two dice?
A) 1/6
B) 1/12
C) 1/36
D) 1/18
**Ans: C**
**Solution:** 1/6×1/6=**1/36**.

**Q20.** Probability of not getting Head in a coin toss?
A) 0
B) 1/4
C) 1/2
D) 1
**Ans: C**
**Solution:** Tail = **1/2**.

---

# 9. Mensuration — 20 Questions

**Q1.** Area of square with side 5 cm?
A) 20
B) 25
C) 30
D) 35 cm²
**Ans: B**
**Solution:** 5² = **25 cm²**.

**Q2.** Perimeter of square side 6 cm?
A) 12
B) 18
C) 24
D) 36 cm
**Ans: C**
**Solution:** 4×6=**24 cm**.

**Q3.** Area of rectangle 10×5 cm?
A) 25
B) 40
C) 50
D) 60 cm²
**Ans: C**
**Solution:** 10×5=**50 cm²**.

**Q4.** Perimeter of rectangle 10 cm × 5 cm?
A) 20
B) 25
C) 30
D) 50 cm
**Ans: C**
**Solution:** 2(10+5)=**30 cm**.

**Q5.** Area of triangle base 10 cm, height 6 cm?
A) 20
B) 30
C) 40
D) 60 cm²
**Ans: B**
**Solution:** 1/2×10×6 = **30 cm²**.

**Q6.** Circumference of circle radius 7 cm (π=22/7)?
A) 22
B) 44
C) 49
D) 154 cm
**Ans: B**
**Solution:** 2πr = 2×22/7×7 = **44 cm**.

**Q7.** Area of circle radius 7 cm?
A) 44
B) 88
C) 154
D) 308 cm²
**Ans: C**
**Solution:** πr² = 22/7×49 = **154 cm²**.

**Q8.** Volume of cube side 4 cm?
A) 16
B) 32
C) 64
D) 128 cm³
**Ans: C**
**Solution:** 4³=**64 cm³**.

**Q9.** Surface area of cube side 5 cm?
A) 100
B) 125
C) 150
D) 200 cm²
**Ans: C**
**Solution:** 6×25=**150 cm²**.

**Q10.** Volume of cuboid 5×4×3 cm?
A) 40
B) 50
C) 60
D) 70 cm³
**Ans: C**
**Solution:** 5×4×3=**60 cm³**.

**Q11.** Area of rectangle length 12, breadth 8?
A) 80
B) 96
C) 100
D) 120 cm²
**Ans: B**
**Solution:** 12×8=**96 cm²**.

**Q12.** Perimeter of square is 40 cm. Side?
A) 5
B) 8
C) 10
D) 20 cm
**Ans: C**
**Solution:** 40/4=**10 cm**.

**Q13.** Diameter of circle radius 10 cm?
A) 5
B) 10
C) 20
D) 30 cm
**Ans: C**
**Solution:** Diameter=2r=**20 cm**.

**Q14.** Area of circle diameter 14 cm?
A) 44
B) 154
C) 308
D) 616 cm²
**Ans: B**
**Solution:** r=7 → area=**154 cm²**.

**Q15.** Volume of cylinder r=7, h=10, π=22/7?
A) 770
B) 1540
C) 3080
D) 440 cm³
**Ans: B**
**Solution:** πr²h = 22/7×49×10 = **1540 cm³**.

**Q16.** Area of triangle base 12, height 5?
A) 20
B) 30
C) 40
D) 60 cm²
**Ans: B**
**Solution:** 1/2×12×5=**30**.

**Q17.** Area of square = 64 cm². Side?
A) 6
B) 7
C) 8
D) 9 cm
**Ans: C**
**Solution:** √64=**8 cm**.

**Q18.** Rectangle area = 72 cm², length = 9 cm. Breadth?
A) 6
B) 7
C) 8
D) 9 cm
**Ans: A**
**Solution:** 72/9=**8 cm**.
**Correct Ans: C.**

**Q19.** Cube volume = 125 cm³. Side?
A) 3
B) 4
C) 5
D) 6 cm
**Ans: C**
**Solution:** ∛125=**5 cm**.

**Q20.** Circumference of circle r=14 cm?
A) 44
B) 66
C) 88
D) 154 cm
**Ans: C**
**Solution:** 2×22/7×14 = **88 cm**.

---

# 10. Data Interpretation — 20 Questions

### Study the table:

| Year | Students Placed |
| ---- | --------------: |
| 2022 |              40 |
| 2023 |              50 |
| 2024 |              60 |
| 2025 |              80 |
| 2026 |             100 |

**Q1.** Highest placements occurred in:
A) 2022
B) 2023
C) 2025
D) 2026
**Ans: D**
**Solution:** Highest = **100**.

**Q2.** Placements in 2024?
A) 40
B) 50
C) 60
D) 80
**Ans: C**
**Solution:** **60**.

**Q3.** Increase from 2022 to 2026?
A) 40
B) 50
C) 60
D) 70
**Ans: C**
**Solution:** 100−40 = **60**.

**Q4.** Total placements from 2022–2026?
A) 300
B) 320
C) 330
D) 350
**Ans: C**
**Solution:** 40+50+60+80+100 = **330**.

**Q5.** Average placements?
A) 60
B) 66
C) 70
D) 75
**Ans: B**
**Solution:** 330/5 = **66**.

**Q6.** Percentage increase from 2022 to 2026?
A) 100%
B) 125%
C) 150%
D) 200%
**Ans: C**
**Solution:** 60/40×100 = **150%**.

**Q7.** Difference between 2025 and 2024?
A) 10
B) 15
C) 20
D) 25
**Ans: C**
**Solution:** 80−60 = **20**.

**Q8.** Ratio of 2022 to 2023 placements?
A) 4:5
B) 5:4
C) 2:3
D) 3:4
**Ans: A**
**Solution:** 40:50 = **4:5**.

**Q9.** Ratio of 2025 to 2026?
A) 3:4
B) 4:5
C) 5:6
D) 2:3
**Ans: B**
**Solution:** 80:100 = **4:5**.

**Q10.** Total placements in 2024 and 2025?
A) 120
B) 130
C) 140
D) 150
**Ans: C**
**Solution:** 60+80=**140**.

### Sales data:

| Product | Sales |
| ------- | ----: |
| A       |   100 |
| B       |   150 |
| C       |   200 |
| D       |   250 |
| E       |   300 |

**Q11.** Highest sales?
A) A
B) B
C) D
D) E
**Ans: D**
**Solution:** E = **300**.

**Q12.** Total sales?
A) 800
B) 900
C) 1000
D) 1100
**Ans: C**
**Solution:** 100+150+200+250+300=**1000**.

**Q13.** Average sales?
A) 150
B) 180
C) 200
D) 220
**Ans: C**
**Solution:** 1000/5=**200**.

**Q14.** Difference between E and A?
A) 100
B) 150
C) 200
D) 250
**Ans: C**
**Solution:** 300−100=**200**.

**Q15.** Ratio B:C?
A) 2:3
B) 3:4
C) 3:5
D) 4:5
**Ans: A**
**Solution:** 150:200 = **3:4**.
**Correct Ans: B.**

**Q16.** Sales of C as percentage of total?
A) 15%
B) 20%
C) 25%
D) 30%
**Ans: B**
**Solution:** 200/1000×100 = **20%**.

**Q17.** Combined sales of A and E?
A) 300
B) 350
C) 400
D) 450
**Ans: C**
**Solution:** 100+300=**400**.

**Q18.** Difference between D and B?
A) 50
B) 75
C) 100
D) 125
**Ans: C**
**Solution:** 250−150=**100**.

**Q19.** Product C contributes what fraction of total sales?
A) 1/2
B) 1/4
C) 1/5
D) 1/10
**Ans: C**
**Solution:** 200/1000 = **1/5**.

**Q20.** If sales of A increase by 20%, new sales?
A) 110
B) 120
C) 125
D) 130
**Ans: B**
**Solution:** 100 + 20% = **120**.
"""

def parse_questions(text):
    topics_data = {}
    
    topic_blocks = re.split(r'# \d+\.\s+([A-Za-z &,-]+)\s+—\s+\d+\s+Questions', text)
    
    for i in range(1, len(topic_blocks), 2):
        topic_name = topic_blocks[i].strip()
        questions_text = topic_blocks[i+1]
        
        q_blocks = re.split(r'(\*\*Q\d+\.\*\*.*?)(?=\*\*Q\d+\.\*\*|$)', questions_text, flags=re.DOTALL)
        
        questions_arr = []
        q_id = 1
        
        for q_text in q_blocks:
            if not q_text.strip():
                continue
                
            q_match = re.search(r'\*\*Q\d+\.\*\*\s+(.*?)(?=A\))', q_text, re.DOTALL)
            options_match = re.findall(r'([A-D]\))\s+(.*?)(?=[A-D]\)|\*\*Ans:|$)', q_text, re.DOTALL)
            ans_match = re.search(r'\*\*Ans:\s+([A-D])', q_text, re.DOTALL)
            sol_match = re.search(r'\*\*Solution:\*\*\s+(.*?)$', q_text, re.DOTALL)
            correct_ans_match = re.search(r'\*\*Correct Ans:\s+([A-D])\.\*\*', q_text, re.DOTALL)
            
            if q_match and len(options_match) >= 4 and ans_match:
                q = q_match.group(1).strip()
                opts = [m[1].strip() for m in options_match[:4]]
                ans_char = ans_match.group(1).strip()
                if correct_ans_match:
                    ans_char = correct_ans_match.group(1).strip()
                    
                ans_idx = ord(ans_char) - 65
                sol = sol_match.group(1).strip() if sol_match else ''
                
                difficulty = 'Easy'
                if q_id >= 15:
                    difficulty = 'Hard'
                elif q_id >= 8:
                    difficulty = 'Medium'
                
                questions_arr.append({
                    'id': q_id,
                    'text': q,
                    'options': opts,
                    'answer': ans_idx,
                    'explanation': sol,
                    'difficulty': difficulty
                })
                q_id += 1
                
        topics_data[topic_name] = questions_arr
        
    return topics_data

topics_data = parse_questions(text)

filenames = {
    'Time and Work': 'timeAndWorkQuestions',
    'Pipes and Cisterns': 'pipesCisternsQuestions',
    'Time, Speed and Distance': 'timeSpeedDistanceQuestions',
    'Problems on Trains': 'trainsQuestions',
    'Boats and Streams': 'boatsStreamsQuestions',
    'Mixture and Alligation': 'mixtureAlligationQuestions',
    'Permutation & Combination': 'permutationCombinationQuestions',
    'Probability': 'probabilityQuestions',
    'Mensuration': 'mensurationQuestions',
    'Data Interpretation': 'dataInterpretationQuestions',
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

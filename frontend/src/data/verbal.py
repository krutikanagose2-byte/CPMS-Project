import json
import re

text = """
1. Reading Comprehension — 20 Questions
Passage 1

Passage:
Technology has changed the way people communicate. Emails, instant messaging, and video calls allow people to communicate quickly regardless of distance. However, excessive use of technology can sometimes reduce face-to-face interaction.

Q1. What is the main idea of the passage?
A) Technology is harmful
B) Technology has changed communication
C) Emails are better than calls
D) People should stop using technology
Answer: B

Q2. Which technology is NOT mentioned?
A) Email
B) Instant messaging
C) Video calls
D) Television
Answer: D

Q3. What is one disadvantage mentioned?
A) Slow communication
B) Expensive internet
C) Reduced face-to-face interaction
D) Lack of technology
Answer: C

Q4. According to the passage, technology allows communication:
A) Only locally
B) Regardless of distance
C) Only through emails
D) Only between businesses
Answer: B

Passage 2

Passage:
Reading books improves vocabulary and develops critical thinking. Regular readers are often exposed to different ideas, cultures, and perspectives. Reading also helps improve concentration and communication skills.

Q5. What does reading improve?
A) Only memory
B) Vocabulary and critical thinking
C) Only handwriting
D) Physical strength
Answer: B

Q6. Readers are exposed to:
A) Only their own culture
B) Different ideas and cultures
C) Only fictional stories
D) Only academic subjects
Answer: B

Q7. Reading helps improve:
A) Concentration
B) Height
C) Speed
D) Vision
Answer: A

Q8. The passage mainly discusses:
A) Problems with books
B) Benefits of reading
C) Types of books
D) History of reading
Answer: B

Passage 3

Passage:
Time management is an important skill for students and professionals. Creating a schedule helps people prioritize important tasks and avoid unnecessary delays. Proper planning can reduce stress and improve productivity.

Q9. What is the main topic?
A) Stress
B) Time management
C) Professional jobs
D) Scheduling software
Answer: B

Q10. A schedule helps people:
A) Avoid work
B) Prioritize tasks
C) Increase stress
D) Waste time
Answer: B

Q11. Proper planning can:
A) Reduce productivity
B) Increase delays
C) Reduce stress
D) Eliminate work
Answer: C

Q12. Time management is useful for:
A) Only students
B) Only professionals
C) Students and professionals
D) Only managers
Answer: C

Passage 4

Passage:
Teamwork is essential in many organizations. When employees work together, they can share ideas, solve problems faster, and complete projects efficiently. Good communication and mutual respect are important for successful teamwork.

Q13. Teamwork is important in:
A) Organizations
B) Schools only
C) Sports only
D) Homes only
Answer: A

Q14. Team members can:
A) Avoid communication
B) Share ideas
C) Work separately only
D) Increase problems
Answer: B

Q15. What helps successful teamwork?
A) Competition
B) Poor communication
C) Mutual respect
D) Individualism
Answer: C

Q16. Teamwork can help solve problems:
A) More slowly
B) Faster
C) Never
D) Randomly
Answer: B

Passage 5

Passage:
Exercise is important for maintaining a healthy lifestyle. Regular physical activity can improve fitness, strengthen muscles, and reduce stress. Even simple activities such as walking can provide health benefits.

Q17. Exercise helps maintain:
A) A healthy lifestyle
B) Only mental health
C) Wealth
D) Career growth
Answer: A

Q18. Physical activity can:
A) Weaken muscles
B) Strengthen muscles
C) Increase stress only
D) Reduce fitness
Answer: B

Q19. Which simple activity is mentioned?
A) Swimming
B) Running
C) Walking
D) Cycling
Answer: C

Q20. The passage mainly emphasizes:
A) Benefits of exercise
B) Types of sports
C) Professional fitness
D) Competitive games
Answer: A

2. Grammar — 20 Questions

Q1. She ___ to college every day.
A) go
B) goes
C) going
D) gone
Answer: B

Q2. They ___ playing cricket now.
A) is
B) was
C) are
D) be
Answer: C

Q3. I ___ my homework yesterday.
A) complete
B) completed
C) completing
D) completes
Answer: B

Q4. He has ___ his project.
A) complete
B) completed
C) completing
D) completes
Answer: B

Q5. Neither Ram nor his friends ___ present.
A) is
B) was
C) are
D) has
Answer: C

Q6. She is good ___ mathematics.
A) in
B) at
C) on
D) by
Answer: B

Q7. I saw ___ elephant in the zoo.
A) a
B) an
C) the
D) no article
Answer: B

Q8. He is ___ honest man.
A) a
B) an
C) the
D) no article
Answer: B

Q9. The opposite of "early" is:
A) Soon
B) Late
C) Fast
D) Quick
Answer: B

Q10. She ___ when I called her.
A) sleeps
B) slept
C) was sleeping
D) sleep
Answer: C

Q11. If I ___ rich, I would help the poor.
A) am
B) was
C) were
D) be
Answer: C

Q12. He can ___ English fluently.
A) speaks
B) speaking
C) speak
D) spoke
Answer: C

Q13. The books are ___ the table.
A) on
B) at
C) by
D) into
Answer: A

Q14. She ___ already left.
A) have
B) has
C) having
D) had been
Answer: B

Q15. We ___ visit Mumbai next week.
A) will
B) were
C) have
D) had
Answer: A

Q16. He ___ in Nagpur since 2020.
A) lives
B) lived
C) has lived
D) living
Answer: C

Q17. The plural of "child" is:
A) Childs
B) Children
C) Childes
D) Childrens
Answer: B

Q18. She speaks English ___.
A) fluent
B) fluently
C) fluency
D) more fluent
Answer: B

Q19. Everyone ___ responsible for their work.
A) are
B) were
C) is
D) have
Answer: C

Q20. I prefer tea ___ coffee.
A) than
B) over
C) to
D) from
Answer: C

3. Sentence Correction — 20 Questions

Choose the correct sentence.

Q1.
A) She don't like coffee.
B) She doesn't likes coffee.
C) She doesn't like coffee.
D) She not like coffee.
Answer: C

Q2.
A) He go to school daily.
B) He goes to school daily.
C) He going school daily.
D) He gone school daily.
Answer: B

Q3.
A) I have seen him yesterday.
B) I saw him yesterday.
C) I see him yesterday.
D) I had see him yesterday.
Answer: B

Q4.
A) She is senior than me.
B) She is senior to me.
C) She is senior from me.
D) She senior than me.
Answer: B

Q5.
A) He is good in mathematics.
B) He is good at mathematics.
C) He good at mathematics.
D) He is good on mathematics.
Answer: B

Q6.
A) Each students has a book.
B) Each student have a book.
C) Each student has a book.
D) Each students have books.
Answer: C

Q7.
A) I am living here since five years.
B) I have been living here for five years.
C) I live here since five years.
D) I lived here since five years.
Answer: B

Q8.
A) She is married with him.
B) She is married to him.
C) She married with him.
D) She has married with him.
Answer: B

Q9.
A) He discussed about the issue.
B) He discussed the issue.
C) He discussed on the issue.
D) He discussed for the issue.
Answer: B

Q10.
A) She returned back home.
B) She returned to back home.
C) She returned home.
D) She return home.
Answer: C

Q11.
A) The news are good.
B) The news is good.
C) The news were good.
D) The news have good.
Answer: B

Q12.
A) He gave me an advice.
B) He gave me some advice.
C) He gave me advices.
D) He gave an advices.
Answer: B

Q13.
A) She is more smarter than him.
B) She is smarter than him.
C) She is most smarter than him.
D) She smarter than him.
Answer: B

Q14.
A) I did not went there.
B) I did not go there.
C) I did not gone there.
D) I don't went there.
Answer: B

Q15.
A) He is one of the best player.
B) He is one of the best players.
C) He is one of best player.
D) He one of the best players.
Answer: B

Q16.
A) She can sings well.
B) She can singing well.
C) She can sing well.
D) She can sang well.
Answer: C

Q17.
A) I am interested to learn Java.
B) I am interested in learning Java.
C) I interested in learn Java.
D) I am interest learning Java.
Answer: B

Q18.
A) He is afraid from dogs.
B) He is afraid of dogs.
C) He afraid of dogs.
D) He is afraid with dogs.
Answer: B

Q19.
A) She has two childs.
B) She has two children.
C) She have two children.
D) She has two child.
Answer: B

Q20.
A) Mathematics are difficult.
B) Mathematics is difficult.
C) Mathematics were difficult.
D) Mathematics have difficult.
Answer: B

4. Vocabulary — 20 Questions
Synonyms

Q1. Synonym of "Rapid"
A) Slow
B) Fast
C) Weak
D) Small
Answer: B

Q2. Synonym of "Abundant"
A) Scarce
B) Plenty
C) Empty
D) Limited
Answer: B

Q3. Synonym of "Brave"
A) Coward
B) Courageous
C) Weak
D) Afraid
Answer: B

Q4. Synonym of "Begin"
A) End
B) Start
C) Stop
D) Finish
Answer: B

Q5. Synonym of "Difficult"
A) Easy
B) Hard
C) Simple
D) Clear
Answer: B

Antonyms

Q6. Antonym of "Ancient"
A) Old
B) Modern
C) Historic
D) Past
Answer: B

Q7. Antonym of "Expand"
A) Increase
B) Grow
C) Contract
D) Extend
Answer: C

Q8. Antonym of "Accept"
A) Receive
B) Reject
C) Allow
D) Agree
Answer: B

Q9. Antonym of "Permanent"
A) Fixed
B) Temporary
C) Stable
D) Constant
Answer: B

Q10. Antonym of "Victory"
A) Success
B) Win
C) Defeat
D) Achievement
Answer: C

One-word Substitution

Q11. A person who cannot read or write:
A) Literate
B) Scholar
C) Illiterate
D) Graduate
Answer: C

Q12. A person who loves mankind:
A) Philanthropist
B) Misanthrope
C) Criminal
D) Patriot
Answer: A

Q13. A place where books are kept:
A) Laboratory
B) Library
C) Museum
D) Gallery
Answer: B

Q14. One who speaks many languages:
A) Linguist
B) Artist
C) Scientist
D) Journalist
Answer: A

Q15. A person who writes books:
A) Editor
B) Author
C) Reader
D) Publisher
Answer: B

Idioms

Q16. "Break the ice" means:
A) Break something
B) Start a conversation
C) Become angry
D) Stop talking
Answer: B

Q17. "Once in a blue moon" means:
A) Very frequently
B) Rarely
C) Daily
D) Never
Answer: B

Q18. "Piece of cake" means:
A) Difficult task
B) Easy task
C) Food
D) Expensive task
Answer: B

Q19. "Hit the nail on the head" means:
A) Make a mistake
B) Say exactly the right thing
C) Work hard
D) Hurt someone
Answer: B

Q20. "Under the weather" means:
A) Feeling sick
B) Feeling happy
C) Traveling
D) Working outside
Answer: A

5. Fill in the Blanks — 20 Questions

Q1. She is ___ honest person.
A) a
B) an
C) the
D) no article
Answer: B

Q2. He is interested ___ computers.
A) on
B) at
C) in
D) by
Answer: C

Q3. The train arrived ___ time.
A) on
B) in
C) at
D) by
Answer: A

Q4. She has been working here ___ 2022.
A) for
B) since
C) from
D) at
Answer: B

Q5. I have lived here ___ five years.
A) since
B) from
C) for
D) at
Answer: C

Q6. He was tired, ___ he continued working.
A) because
B) but
C) so
D) or
Answer: B

Q7. Study hard ___ you will fail.
A) and
B) or
C) because
D) but
Answer: B

Q8. She is taller ___ her sister.
A) then
B) than
C) that
D) to
Answer: B

Q9. Neither of the answers ___ correct.
A) are
B) were
C) is
D) have
Answer: C

Q10. He ___ already finished his work.
A) has
B) have
C) having
D) had been
Answer: A

Q11. I will call you ___ I reach home.
A) when
B) than
C) because
D) although
Answer: A

Q12. She is afraid ___ dogs.
A) from
B) with
C) of
D) at
Answer: C

Q13. The teacher divided the students ___ groups.
A) into
B) on
C) at
D) by
Answer: A

Q14. He apologized ___ his mistake.
A) for
B) on
C) at
D) by
Answer: A

Q15. She is capable ___ solving the problem.
A) to
B) of
C) for
D) at
Answer: B

Q16. We should comply ___ the rules.
A) to
B) with
C) for
D) at
Answer: B

Q17. He succeeded ___ solving the problem.
A) in
B) on
C) at
D) by
Answer: A

Q18. She prefers coffee ___ tea.
A) than
B) from
C) to
D) over
Answer: C

Q19. The children are playing ___ the garden.
A) on
B) in
C) at
D) by
Answer: B

Q20. He arrived ___ the airport early.
A) at
B) in
C) on
D) to
Answer: A

6. Para Jumbles — 20 Questions

Arrange the sentences in the correct order.

Q1.
P. He went to the market.
Q. He bought some vegetables.
R. He returned home.
S. He prepared dinner.

A) PQRS
B) QPRS
C) RQPS
D) PSRQ

Answer: A

Q2.
P. She woke up early.
Q. She brushed her teeth.
R. She had breakfast.
S. She went to college.

A) PQRS
B) QRSP
C) RPQS
D) SPQR
Answer: A

Q3.
P. The students entered the classroom.
Q. The teacher arrived.
R. The lecture began.
S. The students took notes.

A) PQRS
B) QPRS
C) RSPQ
D) PSRQ
Answer: A

Q4.
P. Rahul studied hard.
Q. He appeared for the examination.
R. He received good marks.
S. He celebrated with his family.

A) PQRS
B) QPRS
C) RQPS
D) SRQP
Answer: A

Q5.
P. It started raining.
Q. People opened their umbrellas.
R. The roads became wet.
S. The rain finally stopped.

A) PQRS
B) QRPS
C) RQPS
D) PSRQ
Answer: A

Q6.
P. She bought a laptop.
Q. She installed the required software.
R. She started working on her project.
S. She completed the project.

A) PQRS
B) QPRS
C) RSPQ
D) PSRQ
Answer: A

Q7.
P. The alarm rang.
Q. He woke up.
R. He got ready.
S. He left for work.

A) PQRS
B) QPRS
C) RQPS
D) SPQR
Answer: A

Q8.
P. The company announced vacancies.
Q. Candidates submitted applications.
R. The company conducted interviews.
S. Selected candidates received offers.

A) PQRS
B) QPRS
C) RPSQ
D) SPQR
Answer: A

Q9.
P. The farmer planted seeds.
Q. He watered the field regularly.
R. The plants grew.
S. He harvested the crops.

A) PQRS
B) QPRS
C) RPQS
D) SRQP
Answer: A

Q10.
P. The programmer identified the error.
Q. He checked the code.
R. He fixed the error.
S. The program worked correctly.

A) QPRS
B) PQRS
C) RQPS
D) SPQR
Answer: A

Q11.
P. She booked a ticket.
Q. She packed her luggage.
R. She reached the station.
S. She boarded the train.

A) PQRS
B) QPRS
C) RQPS
D) SRQP
Answer: A

Q12.
P. The interview started.
Q. The interviewer asked questions.
R. The candidate answered them.
S. The interview ended.

A) PQRS
B) QPRS
C) RPQS
D) SPQR
Answer: A

Q13.
P. He opened his laptop.
Q. He connected to the internet.
R. He opened his email.
S. He replied to the messages.

A) PQRS
B) QPRS
C) RQPS
D) SPQR
Answer: A

Q14.
P. The team discussed the problem.
Q. They identified possible solutions.
R. They selected the best solution.
S. They implemented it.

A) PQRS
B) QPRS
C) RSPQ
D) SPQR
Answer: A

Q15.
P. The boy found a wallet.
Q. He looked for its owner.
R. He found the owner.
S. He returned the wallet.

A) PQRS
B) QPRS
C) RQPS
D) SPQR
Answer: A

Q16.
P. She learned HTML.
Q. She learned CSS.
R. She learned JavaScript.
S. She built her first website.

A) PQRS
B) QPRS
C) RSPQ
D) SPQR
Answer: A

Q17.
P. The company developed a product.
Q. It tested the product.
R. It launched the product.
S. Customers started using it.

A) PQRS
B) QPRS
C) RQPS
D) SPQR
Answer: A

Q18.
P. He prepared his resume.
Q. He applied for jobs.
R. He received an interview call.
S. He attended the interview.

A) PQRS
B) QPRS
C) RPQS
D) SPQR
Answer: A

Q19.
P. The sun rose.
Q. Birds started singing.
R. People began their daily activities.
S. The city became busy.

A) PQRS
B) QPRS
C) RPQS
D) SRQP
Answer: A

Q20.
P. She identified her goal.
Q. She created a plan.
R. She worked consistently.
S. She achieved her goal.

A) PQRS
B) QPRS
C) RQPS
D) SPQR
Answer: A

7. Error Detection — 20 Questions

Find the part containing the error.

Q1. She / don't / like coffee.
A) She
B) don't
C) like coffee
D) No error
Answer: B

Q2. He / go / to college daily.
A) He
B) go
C) to college daily
D) No error
Answer: B

Q3. She / has completed / her work yesterday.
A) She
B) has completed
C) her work yesterday
D) No error
Answer: B

Q4. He / is good / in mathematics.
A) He
B) is good
C) in mathematics
D) No error
Answer: C

Q5. They / was playing / football.
A) They
B) was playing
C) football
D) No error
Answer: B

Q6. I / have seen / him yesterday.
A) I
B) have seen
C) him yesterday
D) No error
Answer: B

Q7. She / is senior / than me.
A) She
B) is senior
C) than me
D) No error
Answer: C

Q8. He / did not / went there.
A) He
B) did not
C) went there
D) No error
Answer: C

Q9. Each student / have / a notebook.
A) Each student
B) have
C) a notebook
D) No error
Answer: B

Q10. The news / are / very interesting.
A) The news
B) are
C) very interesting
D) No error
Answer: B

Q11. She / can sings / very well.
A) She
B) can sings
C) very well
D) No error
Answer: B

Q12. He / is afraid / from dogs.
A) He
B) is afraid
C) from dogs
D) No error
Answer: C

Q13. I / am interested / to learn Python.
A) I
B) am interested
C) to learn Python
D) No error
Answer: C

Q14. She / has two / childs.
A) She
B) has two
C) childs
D) No error
Answer: C

Q15. He / discussed about / the problem.
A) He
B) discussed about
C) the problem
D) No error
Answer: B

Q16. She / returned back / home.
A) She
B) returned back
C) home
D) No error
Answer: B

Q17. He / is married / with her.
A) He
B) is married
C) with her
D) No error
Answer: C

Q18. The students / is / ready.
A) The students
B) is
C) ready
D) No error
Answer: B

Q19. He / has been working / since five years.
A) He
B) has been working
C) since five years
D) No error
Answer: C

Q20. She / prefers tea / than coffee.
A) She
B) prefers tea
C) than coffee
D) No error
Answer: C

8. Sentence Completion — 20 Questions

Q1. If you work hard, you will _____.
A) fail
B) succeed
C) stop
D) lose
Answer: B

Q2. Although it was raining, _____.
A) we continued playing
B) we stopped everything
C) rain stopped
D) nobody came
Answer: A

Q3. He was tired, but _____.
A) he continued working
B) he slept immediately
C) he stopped forever
D) he went nowhere
Answer: A

Q4. She studied hard because _____.
A) she wanted good marks
B) she disliked exams
C) she wanted to fail
D) she did not study
Answer: A

Q5. Unless you practice, _____.
A) you will improve
B) you may not improve
C) you will always succeed
D) you will become perfect
Answer: B

Q6. He missed the bus because _____.
A) he woke up late
B) he reached early
C) he ran fast
D) he waited early
Answer: A

Q7. She was happy because _____.
A) she received good news
B) she failed
C) she lost her book
D) she missed the train
Answer: A

Q8. If I had enough money, _____.
A) I would buy a car
B) I buy yesterday
C) I bought nothing
D) I will never buy
Answer: A

Q9. He could not attend the meeting because _____.
A) he was ill
B) he was present
C) he arrived early
D) he attended it
Answer: A

Q10. The project was successful because _____.
A) the team worked efficiently
B) nobody worked
C) it was cancelled
D) there was no planning
Answer: A

Q11. She practices daily so that _____.
A) she can improve her skills
B) she can forget everything
C) she can stop learning
D) she can fail
Answer: A

Q12. He saved money because _____.
A) he wanted to buy a laptop
B) he wanted to waste it
C) he had no goal
D) he disliked money
Answer: A

Q13. Since the road was blocked, _____.
A) we took another route
B) we continued on the same road
C) we stopped permanently
D) we flew
Answer: A

Q14. She learned programming because _____.
A) she wanted to become a software developer
B) she disliked computers
C) she wanted to avoid technology
D) she never used a computer
Answer: A

Q15. He reached the station late, therefore _____.
A) he missed the train
B) he caught it early
C) he arrived first
D) he cancelled the station
Answer: A

Q16. We should save water because _____.
A) water is an important resource
B) water is unlimited
C) water is useless
D) nobody needs water
Answer: A

Q17. The student revised the topic before the exam so that _____.
A) he could remember it better
B) he could forget it
C) he could skip the exam
D) he could avoid studying
Answer: A

Q18. If it rains tomorrow, _____.
A) the match may be cancelled
B) the sun will definitely shine
C) the match will never end
D) nothing can happen
Answer: A

Q19. He apologized because _____.
A) he had made a mistake
B) he had done nothing
C) he was celebrating
D) he won a prize
Answer: A

Q20. She joined the course in order to _____.
A) improve her skills
B) waste her time
C) stop learning
D) avoid education
Answer: A

9. Cloze Test — 20 Questions

Choose the correct word.

Passage

Education plays an important role in our (1) ____. It provides knowledge and helps people develop (2) ____ skills. A good education also teaches students how to (3) ____ problems and make decisions. In today's world, technology has become an important part of (4) ____. Students should therefore learn how to use technology (5) ____.

Q1.
A) lives
B) living
C) life
D) lived
Answer: C

Q2.
A) useful
B) useless
C) weak
D) harmful
Answer: A

Q3.
A) solve
B) solved
C) solving
D) solves
Answer: A

Q4.
A) education
B) educated
C) educate
D) educating
Answer: A

Q5.
A) responsibly
B) irresponsible
C) responsibility
D) responsible
Answer: A

Passage

Time is one of the most valuable (6) ____ we have. Once lost, it cannot be (7) ____. Therefore, people should learn to manage their time (8) ____. Making a proper schedule can help us complete our work (9) ____ and reduce (10) ____.

Q6.
A) resources
B) resourceful
C) resource
D) resourcing
Answer: A

Q7.
A) returned
B) wasted
C) recovered
D) lost
Answer: C

Q8.
A) effective
B) effectively
C) effect
D) effectiveness
Answer: B

Q9.
A) on time
B) never
C) late
D) slowly
Answer: A

Q10.
A) stress
B) success
C) happiness
D) productivity
Answer: A

Passage

Communication is essential for (11) ____ teamwork. Team members should listen to one another and (12) ____ their ideas clearly. Good communication can prevent (13) ____ and help teams work more (14) ____. Mutual respect is also (15) ____ for building a strong team.

Q11.
A) successful
B) success
C) successfully
D) succeed
Answer: A

Q12.
A) express
B) expressed
C) expressing
D) expresses
Answer: A

Q13.
A) misunderstandings
B) understanding
C) success
D) cooperation
Answer: A

Q14.
A) efficient
B) efficiently
C) efficiency
D) inefficient
Answer: B

Q15.
A) important
B) importance
C) importantly
D) import
Answer: A

Passage

Reading is a useful habit that can improve (16) ____. It introduces readers to new words and ideas. Regular reading also improves (17) ____ and concentration. People who read regularly can often (18) ____ their thoughts more clearly. Therefore, everyone should try to make reading a part of their (19) ____ routine. Even a few pages every day can make a (20) ____ difference.

Q16.
A) vocabulary
B) vocabularies
C) vocal
D) voice
Answer: A

Q17.
A) memory
B) memorized
C) memorize
D) memorable
Answer: A

Q18.
A) express
B) expression
C) expressed
D) expressing
Answer: A

Q19.
A) daily
B) day
C) days
D) daylight
Answer: A

Q20.
A) significant
B) significance
C) significantly
D) signify
Answer: A

10. Verbal Reasoning — 20 Questions
Statement & Conclusion

Q1. Statement: All students in the class have identity cards. Rahul is a student in the class.

Conclusion: Rahul has an identity card.

A) Definitely follows
B) Definitely does not follow
C) Cannot say
D) None
Answer: A

Q2. Statement: All programmers know programming. Amit is a programmer.

Conclusion: Amit knows programming.

A) Follows
B) Does not follow
C) Cannot say
D) None
Answer: A

Q3. Statement: Some employees work remotely.

Conclusion: All employees work remotely.

A) Follows
B) Does not follow
C) Both
D) Cannot say
Answer: B

Q4. Statement: No cats are dogs. Tommy is a cat.

Conclusion: Tommy is not a dog.

A) Follows
B) Does not follow
C) Cannot say
D) None
Answer: A

Q5. Statement: All flowers need water. Roses are flowers.

Conclusion: Roses need water.

A) Follows
B) Does not follow
C) Cannot say
D) None
Answer: A

Statement & Assumption

Q6. Statement: "Use this app to save time."

Assumption:

A) The app can help save time
B) Nobody uses apps
C) Time is not important
D) Apps are expensive
Answer: A

Q7. Statement: "Wear a helmet while riding a motorcycle."

Assumption:

A) Helmets can improve safety
B) Motorcycles are slow
C) Roads are empty
D) Helmets are unnecessary
Answer: A

Q8. Statement: "Join our course to improve your programming skills."

Assumption:

A) The course can help improve programming skills
B) Programming is useless
C) Nobody wants to learn programming
D) Courses are always free
Answer: A

Q9. Statement: "Carry an umbrella because it may rain."

Assumption:

A) Rain is possible
B) It will never rain
C) Umbrellas are harmful
D) It is always sunny
Answer: A

Q10. Statement: "Study regularly to score better marks."

Assumption:

A) Regular study can help improve performance
B) Studying has no benefit
C) Marks do not matter
D) Exams are cancelled
Answer: A

Cause & Effect

Q11. Heavy rain caused flooding in the city. What is the cause?
A) Flooding
B) Heavy rain
C) City
D) Roads
Answer: B

Q12. The student studied hard and scored high marks. What is the effect?
A) Studying
B) Student
C) High marks
D) Examination
Answer: C

Q13. The computer overheated because the cooling fan stopped. What is the cause?
A) Computer
B) Overheating
C) Cooling fan stopped
D) Electricity
Answer: C

Q14. The company trained employees, resulting in improved productivity. What is the effect?
A) Training
B) Employees
C) Improved productivity
D) Company
Answer: C

Q15. The road was blocked due to an accident. What caused the blockage?
A) Road
B) Accident
C) Traffic
D) Weather
Answer: B

Course of Action

Q16. Problem: Many students are unable to understand programming.

What should be done?

A) Stop teaching programming
B) Provide additional programming practice
C) Cancel exams
D) Remove computers
Answer: B

Q17. Problem: Employees are frequently arriving late.

Best action:

A) Ignore the issue
B) Introduce attendance monitoring and discuss the problem
C) Close the company
D) Fire everyone immediately
Answer: B

Q18. Problem: A website is frequently crashing.

Best action:

A) Ignore it
B) Identify and fix the technical problem
C) Delete the website
D) Stop using the internet
Answer: B

Q19. Problem: Students are not submitting assignments on time.

Best action:

A) Set clear deadlines and reminders
B) Stop giving assignments
C) Ignore everyone
D) Cancel the course
Answer: A

Q20. Problem: A team is unable to complete a project because of poor communication.

Best action:

A) Improve communication and conduct regular team meetings
B) Stop the project
C) Remove all team members
D) Avoid meetings completely
Answer: A
"""

def parse_verbal(text):
    topics_data = {}
    
    # Split text into topics
    topic_blocks = re.split(r'\d+\.\s+([A-Za-z &,-/]+)\s+—\s+\d+\s+Questions', text)
    
    for i in range(1, len(topic_blocks), 2):
        topic_name = topic_blocks[i].strip()
        questions_text = topic_blocks[i+1]
        
        q_blocks = re.split(r'(Q\d+\..+?)(?=Q\d+\.|$)', questions_text, flags=re.DOTALL)
        
        questions_arr = []
        q_id = 1
        
        current_passage = ""
        
        for p_match in re.finditer(r'Passage:?\s*(.*?)(?=Q\d+\.)', questions_text, re.DOTALL | re.IGNORECASE):
            # We can track passages based on their position, but this might be complex.
            pass
            
        # Better approach: split by lines, look for QX., Passage, options
        lines = questions_text.split('\\n')
        
        current_passage = ""
        current_q = None
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            if line.lower().startswith("passage:") or line.lower().startswith("passage"):
                # Usually followed by passage text
                if "passage" in line.lower() and len(line) < 15:
                    continue # like "Passage 1"
                elif line.lower().startswith("passage:"):
                    current_passage = line[8:].strip() + "\\n"
                else:
                    if current_passage and not current_q:
                        current_passage += line + "\\n"
            elif not current_q and not re.match(r'Q\d+\.', line) and not re.match(r'[A-D]\)', line) and not line.startswith("Answer:"):
                current_passage += line + "\\n"
                
            elif re.match(r'Q\d+\.', line):
                if current_q:
                    questions_arr.append(current_q)
                current_q = {
                    'id': q_id,
                    'text': (current_passage + "\\n\\n" + line).strip() if current_passage else line,
                    'options': [],
                    'answer': 0,
                    'explanation': '',
                    'difficulty': 'Easy' if q_id <= 7 else ('Medium' if q_id <= 14 else 'Hard')
                }
                q_id += 1
            elif re.match(r'[A-D]\)', line):
                if current_q:
                    # sometimes P,Q,R,S are mixed in before A,B,C,D.
                    current_q['options'].append(line[2:].strip())
            elif line.startswith("Answer:"):
                if current_q:
                    ans_char = line.split("Answer:")[1].strip()
                    if ans_char in ['A', 'B', 'C', 'D']:
                        current_q['answer'] = ord(ans_char) - 65
                    current_q['explanation'] = "Correct Answer is " + ans_char
                    # Clear passage after a question unless it's shared? No, we shouldn't clear passage automatically, 
                    # but maybe we should if there's a new passage indicator. Actually, let's keep the passage 
                    # until a new one is found. But Para jumbles have PQRS.
            elif re.match(r'[P-S]\.', line):
                if current_q:
                    current_q['text'] += "\\n" + line
            elif "Statement:" in line or "Conclusion:" in line or "Assumption:" in line or "Problem:" in line or "What should be done?" in line or "Best action:" in line:
                if current_q:
                    current_q['text'] += "\\n" + line
                else:
                     current_passage += line + "\\n"
        
        if current_q:
            questions_arr.append(current_q)
            
        topics_data[topic_name] = questions_arr
        
    return topics_data

topics_data = parse_verbal(text)

filenames = {
    'Reading Comprehension': 'readingComprehensionQuestions',
    'Grammar': 'grammarQuestions',
    'Sentence Correction': 'sentenceCorrectionQuestions',
    'Vocabulary': 'vocabularyQuestions',
    'Fill in the Blanks': 'fillInTheBlanksQuestions',
    'Sentence Arrangement / Para Jumbles': 'paraJumblesQuestions',
    'Error Detection': 'errorDetectionQuestions',
    'Sentence Completion': 'sentenceCompletionQuestions',
    'Cloze Test': 'clozeTestQuestions',
    'Verbal Reasoning': 'verbalReasoningQuestions'
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

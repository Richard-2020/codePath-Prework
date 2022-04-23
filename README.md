# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Richard Rangala**

Time spent: **8** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com/edit/#!/flint-handsomely-increase?path=README.md%3A1%3A0


Code Site : https://flint-handsomely-increase.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)![codePath_project](https://user-images.githubusercontent.com/40706106/164866024-4c5fa2a0-1e8b-4870-af3e-d981fee976be.GIF)

![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I got some from stackOverflow, from www.w3schools, and I also asked my roommate for some ideas.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge I had was implementing the guessing function in a way that when the button clicked matches the array number stored in the pattern array variable, the game keeps playing as long as there are still more clues to play. How I was able to overcome this is by implementing conditional statements in the guessing function to check whether it’s a match. The other challenge I had was with the timer. I had a difficult time making the countdown decrease in a constant rate. I wasn’t sure why whenever I would click on a cue, the timer’s rate would double in rate. After examining and debugging the code, I realized whenever I clicked on the right cue in the guess function, I decreased the timer by decrementing it. After decrementing it, the play Sequence function was called inside the guess function which has the update Timer that also decreases the allocated time. I spend so long trying to figure this out but it was only matter of decreasing the timer once. Another challenge I had was including the new buttons added as part of the optional requirement in the pattern. Once the user adds more buttons, they must be included in the sequence. I overcame this by creating an 2D array of nine items corresponding to the total number of buttons, then including them in the sequence.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I had a really fun time creating this game, it got me more interested in learning JavaScript and HTML. I created my first website in HTML and CSS hen I was 15 years old and JavaScript was the first programing language I self-taught myself as a teen. Even though I had prior knowledge before, I realized that JavaScript is very broad and there are many things JavaScript can do that I had no idea it could. Soon, I plan on creating various JavaScript applications. This application would need to register and store users’ data like a webserver of some sort. Is it possible to develop the application or website using JavaScript or possibly Node.js?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would spend it on adding more features in order to implement more functionality for the buttons such as when the user wins, all the buttons would spin in 360-degree angle. Then when the user loses, the buttons would collapse. To implement this, I would use java scripts animation features. I would also add an additional feature for when the user wins, a confetti could be shot and the entire screen would be filled with different colors from the confetti to congratulate the user. I would spend some time implementing various levels of difficulty as well like easy, medium or hard. Going from easy to hard would increase the speed of time the timer run and length of the pattern as well. The timer could then end the game if it reaches zero. I would also create a variable storing the number of wrong guesses until it reaches a certain number for the game to end.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1_yCvlwg_vVPntTjjofYpnIojhjMgyh2D/view?usp=sharing)



## License

    Copyright [Richard Rangala]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

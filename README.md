# **FP4 \- Final Project Writeup**

Feel free to refer to this Markdown Cheat Sheet to make your writeup more organized, and you can preview your markdown file in VSCode Markdown editing with Visual Studio Code.

**Part 1: Website Description

Describe your website (300 words).

What is the purpose of your website?
Who is the target audience?
What information do you convey with your website?
How is it interesting and engaging?

**Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

Click on the accordian. The cursor changing to a pointer indicates it's clickable.

Interaction type. Click on X on page Y / scroll on page X, etc.

**Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

Name of tool1
Why did you choose to use it over other alternatives? (2 sentences max)
How you used it? (2 sentences max)
What does it add to your website? (2 sentences max)
Name of tool2

**Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

**Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

**Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write ~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

Usage Experiences by Project Aspects

Feel free to edit the column _ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:

Usage: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
Productivity: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].
Tool Name	Ratings	design	plan	write code	debug	_ (other?)
Tool1	Usage	Yes/No	Yes/No	Yes/No	Yes/No	Yes/No
Tool1	Productivity	1~7	1~7	1~7	1~7	1~7
Tool2	Usage	Yes/No	Yes/No	Yes/No	Yes/No	Yes/No
Tool2	Productivity	1~7	1~7	1~7	1~7	1~7
Usage Reflection

Impact on your design and plan
It matched my expectations and plan in FP2 in that … For example,
Tool1:
Tool2:
It did not match my expectations and plan in FP2 in that … For example,
Tool1:
Tool2:
GenAI tool did/did not influence my final design and implementation plan because … For example,
Tool1:
Tool2:
Use patterns
I accepted the generations when … For example,
Tool1: this tool once suggested … and I adjusted my design according to the suggestion because …
Tool2:
I critiqued/evaluated the generated suggestions by … For example,
Tool1: this tool once suggested … but I modified/rejected the suggestion because …
Tool2:
Pros and cons of using GenAI tools
Pros
Tool1:
Tool2:
Cons
Tool1:
Tool2:
Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

ChatGPT / Gemini: share the anonymous link to all of your chat histories relevant to this project
GitHub Copilot (VSCode): export chat histories relevant to this project.


# **FP3 \- Final project check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

Implementation Plan Updates

 ...
Generative AI Use Plan Updates

 ...



# **FP2 \- Evaluation of the Final project**

Project Description: Personal Portfolio

Briefly restate your motivation and a short description of your project.
I am creating my personal portfolio so that I can learn best practices for usability in a real-world, applicable use case scenario, as I am preparing for my job search. Evaluating my personal portfolio for this project ensures that I can optimize usability and efficiency later down the line. I want to create a portfolio that stands out by highlighting my identity as a multifaceted designer beyond UX/HCI.

High-Fi Prototypes

Prototype 1: Testing the Home Page to see how the user navigates case studies

A brief description and summary of the user feedback (<100 words, 2 images)
![Portfolio- Home](images/old-home.png)
![Portfolio- Case Study](images/old-home2.png)

I created this prototoype to focus on assessing how the user navigates from the home page to the case studies easily.
First, on a fundamental level, I studied what the user immediately thought as they opened the screen, and wanted to know their honest thoughts so I didn't tell them what this testing is about at all. They seemed to easily understand that this is a portfolio site, but overall it could have been easier for them to understand if I used real text and images instead of placeholders because that threw them off. Besides that, overall the user exhibited no barriers in navigating and achieving the task of accessing the case study. 



Prototype 2: Testing the About Me page to see how the user explores the content
![Portfolio- AboutMe](images/old-aboutme.png)
![Portfolio- About Me: Opened Timeline](images/old-aboutme2.png)
I created this prototoype to enact the more creative aspect of my portfolio. I wanted the interaction to be creative but not too abstract that it takes away from the usability of the experience. I really wanted to achieve a balance between both aspects so studying the user was interesting for this part. The user enjoyed the page a lot; they thought it was creative but were confused about what to do with the timeline. The timeline had more work to be done on my part to make the usability more accessible for users.


Usability Test

Discuss the user feedback you got during the evaluation / usability test (~300 words). Indicate which feedback you implemented, inspired new directions, or otherwise influenced your final design.

Mainly, the user feedback I received about the second prototoype regarding the about me page had heavily influenced the upgrade of my design. Because the user had said that it was confusing to know what to do (eg. they said that they kind of knew what the arrow would suggest but would've appreciated it if it were more clear and the user could not achieve the task because they didn't know they had to hover over the image in order to see the text). I realized that labelling and mroe clear call to action affordances were crucial to implement in order to achieve better usability and accessibility. I used to think that it went against my minimalist design aesthetic but testing this with users inspired me to go in a direction that prioritizes having the user access the content easily because after all, I want the user to interact with the timeline instead of abandoning it completely. So I decided to label the arrow called "learn more" and create an interaction where it jumps up and down to indicate that it is supposed to be clicked on and therefore lead to a next step. I also consolidated the image and text (about each design hero) so that it reduces confusion, as the user's feedback revealed that a good flow doesn't have to be complex and have too many steps. In fact, it produces the opposite effect of what we want. Even if it compromises my creative affinity for design, I decided to implement more clear labelling and remove unnecessary color effects. 

Updated Designs

Show screenshots of your updated design based on the user feedback (<100 words, ~2 images).
Prototype 1:
![Portfolio- Home](images/home-1.jpg)
![Portfolio- Case Study](images/home-2.jpg)
The user had expressed that the title changing three colors felt unnecessary because I already had a lot of small delightful design details/microinteractions, so I decided to remove that effect and change the typography so it lends a minimalistic yet still tasteful feel while maintaining optimal usability and accessibility of color.

Prototype 2:
![About Me- Static](images/aboutme-1.jpg)
![About Me- Opened Timeline](images/aboutme-3.jpg)
As for the about me page, I consolidated the text and image into one static section so that the user doesn't have to hover over in order to access the text, which was confusing for the user during testing. Like I said earlier, I also added clear labelling "learn more" and made the arrow jump up and down in order to make it easier for the user to understand what they should do in order to learn more about the design heroes and know what the abstract line is really for. I could've simply decided to remove the arrow interaction and make the timeline static- which is still an option and may lend for better usability in some ways, but I still want to maintain a balance of creativity and delightful experience with accessibility.


Feedback Summary

Summarize the feedback you received in the lab session and discuss how it influenced your design (~300 words).
I received feedback about assessing a thoughtful approach towards mixing static functions and custom, delightful features of the website in order to showcase my understanding of usabiltiy and programming. Given that, I decided that focusing on the portfolio would allow me to focus more deeply on the different ways I can challenge and showcase my understanding of usability in a real-world, applicable context. A classmate had also given me fedeback around sites I could take a look at for more inspiration around my timeline feature, which I appreciated. When I checked out the link she provided, it was indeed a very creative interpretation of a standard timeline. It influenced me to think about ways I can showcase the breadth of my programming and design skills in a way that is, however, still feasible and appropriate for the specific context of my user, which are recruiters and hiring managers with limited amount of time. I figured that developing overly abstract and complex interactions would do the opposite effect of what I want, which is for the user to actually be excited and engaged with my portfolio. Overall, the feedback I received really helped me in terms of refining my goal and thinking more deeply about the breadth and parameters of my work. 

Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (~300 words).

Implementation Plan

 Week 9 Oct 28 - Nov 1:

 FP1 due
 ...
 Week 10 Nov 4 - Nov 8:

 FP2 due
 Week 11 Nov 11 - Nov 15:
Start building a MVP1

 Week 12 Nov 18 - Nov 22:
 Test the MVP1 and gather user feedback. Hopefully also get feedback from peers & the TA outside of class.

 Week 13 Nov 25 - Nov 29:
 Iterate the MVP1 based on feedback.

 Thanksgiving
 Week 14 Dec 2 - Dec 6:

 FP4 due
Libraries and Other Components

List the JS libraries and other components (if applicable) that you plan to use. *

Generative AI Use Plan

Outline how you plan to use Generative AI tools to aid in the implementation (~300 words)

I plan on using Generative AI tools to better understand the parameters of what functions I could realistically implement in platforms like Wix, which provide limited programming functions. Platforms that let you build your own website like Wix don't provide a lot of flexibility for custom programming, so it's not easy to understand what the limitations are on that platform and there are not many resources online that help with understanding exactly what functions/features would be feasible to build via js. I plan on using Chatgpt to first understand the scope of the features that I plan on building in my final project, which I could also feasibly and easily translate into my seperate portfolio I have on Wix.  

Tool Use

What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

I plan on using ChatGPT while building out my final project to tell me what features I could easily translate into Wix. There are limited resources online as to what Wix allows people to do with their code, but I believe ChatGPT could help me in understanding the level of feasability at least. It's still impossible for ChatGPT to fully know what code I can precisely add into the Wix coding mechanism because it would have to fully understand how Wix works and understand in detail what kind of interaction I want. 

ChatGPT
I will use it for understanding which features I can easily translate into the Wix programming mechanism because it can help me understand the scope of feasible usability.
I will not use it for gaining code that builds the perfect interaction I want because it might not be able to help me with understanding my needs and interests.

GitHub Copilot
...
Responsible Use

How would you use Generative AI responsibly?

I will make sure to use it so that it helps me in the long-term, but not in a way that impairs my learning and the critical knowledge I must retain and impart from this class.


# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

![Portfolio](images/portfolio.png)

My first idea is a unique portfolio. In order to make it visually engaging and interactive, I will incorporate elements such as delightful microinteractions, from scroll trigger effects, image transitions, hover elements to animations that reveal additional details about key moments. I will also include considerations of accessibility, such as distinguishable color contrast. In order to demonstrate my skills in usability, I plan on devising a strong layout and balance of interactive and accessible moments so that it tells a cohesive and personal story about me as a designer and my career.
* What is the basic idea of your final project? (1-2 sentences)  
* How do you plan to make your design interactive and engaging?  
* How do you plan to make your design accessible?  
* What information do you specifically want to convey and include on your website?

### *Idea 2*
![Skincare Quiz](images/skincare.png)

My second idea revolves around creating a quiz that receives feedback from the user about their skincare needs and lifestyle, in order to generate a list of reccomendations of kbeauty products they need to purchase. It is essentially an e-commerce site, but provides more than simple e-commerce functions. I planned on using meaningful pre-loaded and labeled data through careful planning. In order to make it interactive and engaging, I plan on using delightful microinteractions and animations that guide the user through an interactive journey of their ideal skincare routine throughout the day and week. 

### *Idea 3*
![Sustainability Forum](images/sustainability.png)

For my third idea, I imagined a sustainability forum that acts as both a blog and an e-commerce site for all things related to sustainable living. By gathering meaningful pre-loaded and labeled data, I planned on devising a curated feed, interactive wishlist and product recommendations and top picks to hit both angles of a personalized customer experience and e-commerce. …

## Feedback Summary

Summarize all the critiques you received during the lab session (\~300 words). 
As per feedback during the lab session, I realized the need to prioritize the user experience and technical feasability more than an idealistic business perspective, as it is more effective to focus on doing one thing well rather than trying to cover too much. There was also feedback around thinking about meaningful interactions for my portfolio, which highlighted the need, again, of prioritizing what I can do best for the user experience while showcasing my skills in usability.

## Feedback Digestion

Digest the feedback you got in the lab (\~300 words). Indicate which critique you will act on in your next design and why you chose to incorporate/dismiss pieces of critique.
I decided to take the critique regarding Idea 1, around thinking about more additional design elements that both make my website unique by providing interactions beyond simple navigation, and demonstrate my skills in usability. It was important in shaping my decision to focus on the first idea rather than the second or third because it made me think more deeply around the technical feasability. Rather than getting caught up in my ambitious "business perspective" goals, I think it would be better to direct my attention towards the main goal of this project, which is to showcase my skills in usability- aka depth vs breadth. Therefore, to build a portfolio that adequately shows a unique perspective on meaningful interactions while balancing strong usability, I have been thinking about researching more design elements and how to execute them in a way that aligns with accessibility WCAG standards.




# **FP4 \- Final Project Writeup**

Feel free to refer to this Markdown Cheat Sheet to make your writeup more organized, and you can preview your markdown file in VSCode Markdown editing with Visual Studio Code.

**Part 1: Website Description:

My website serves as my UX Design portfolio, showcasing my work and identity as a designer. I aim to use it for my job search during the latter half of this program. The primary audience includes job recruiters and hiring managers who have limited time to browse websites yet seek portfolios that are eye-catching, unique, and memorable. The information I want to convey is that I am an interdisciplinary designer with a wide breadth of experiences and interests that make me a strong and distinctive UX Designer.
Unlike traditional UX portfolios, my website goes beyond the standard case studies and about pages. It highlights not only my UX Design, UX Research, and Product Strategy skills but also showcases my background in Interior and Fashion Design. It will certainly allow me to stand out in a saturated job market full of generic UX portfolios. By including this broader range of content, my portfolio offers a comprehensive picture of who I am as a designer and what I bring to the table. This approach ensures that my work stands out and creates opportunities for connection, as visitors can relate to and engage with my inspirations and aesthetic.
The site is engaging because I’ve incorporated interactions that invite users to explore. Key sections require clicking on specific areas, revealing deeper insights into my identity as a designer. For example, my “About” page is more than a description—it features design inspirations that reflect my unique perspective. These interactions encourage curiosity and provide an enjoyable browsing experience while helping users gain a better understanding of who I am.
Ultimately, my portfolio bridges traditional UX content with personal, creative elements that reflect my interdisciplinary background, inviting my target audience to see me not just as a UX Designer but as a multifaceted creative professional. This combination makes my portfolio both engaging and memorable.


**Part 2: User Interaction:

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

To explore my case studies by design type, the user interacts with an accordion interface. They are first greeted with 5 categories describing my different skillsets as an interdisciplinary designer. As they hover over the accordion, the hovered section subtly turns yellow, signaling interactivity, and the cursor changes to a pointer to indicate it’s clickable. Upon clicking a section, a high-level description of my background in that design field is revealed below, along with a dynamic display of relevant case studies. Users can then click on any case study to dive deeper into the details. The accordion dynamically adjusts, ensuring only the active section is expanded while maintaining a clean, focused layout. This interaction makes it easy and intuitive to navigate my diverse skill set and portfolio.

On my About Page, the user can explore my design inspirations through an interactive timeline. A jumping arrow signals that they should begin scrolling down, guiding their attention intuitively. As they scroll, they are delighted to discover that the timeline transitions horizontally, revealing a curated selection of photos that represent my design influences. Each image reacts to the user's curiosity—hovering over a photo reveals the name of the designer, adding an interactive layer that invites further exploration. This playful and engaging experience not only communicates my inspirations but also reflects my approach as a designer: thoughtful, user-centered, and visually captivating.


**Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

Name of tool1: GSAP (GreenSock Animation Platform) JavaScript Library
Why did you choose to use it over other alternatives? (2 sentences max): I chose GSAP because it allows for visually stunning animations and interactions with extensive customization options. Additionally, I was inspired to use it as it’s supported by Webflow, a platform I’m interested in exploring for future projects.
How you used it? (2 sentences max): I used GSAP to create smooth animations, such as dynamic transitions for elements like the horizontal timeline. These animations enhance the interactivity and visual appeal of my website.
What does it add to your website? (2 sentences max): GSAP adds ean engaging interaction (user engaging with the timeline eg. scrolling and hovering triggering the name of designer) as well as visual feedback animation regarding the status # of the photo the user is scrolling at (from photo 1 to 10).


**Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

I iterated on my prototype based on insights from usability testing and feedback from my TA. Usability testing revealed that certain aspects of my original timeline design felt unnecessary and hindered usability, with users expressing frustration over too many clicks. To address this, I streamlined the timeline by making it more visually engaging and providing instant feedback, such as implementing a status tracker and replacing user clicks with hover interactions to reduce friction. On the Home Page, my TA’s feedback about incorporating thoughtful interactions inspired me to refocus on my primary goal: showcasing the breadth of my multifaceted design career. I aimed to ensure that users immediately understand my five distinct areas of design expertise upon landing on the page. These updates reflect my commitment to creating a portfolio that is both consistent in its message and seamless in its user experience.
**Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

Some challenges I faced in implementing my website included designing interactions that were both meaningful and aligned with my portfolio's purpose, rather than adding features just for the sake of "more." I focused on creating thoughtful, intentional interactions that enhanced the user experience and reinforced my goals, ensuring every element served a purpose in showcasing my work effectively and authentically.

**Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write ~500 words in total).

I used ChatGPT as a supportive tool in the early stages of my projects to clarify concepts and explore implementation options. For instance, I used it to learn whether specific design elements, such as using “SF Pro” as a font, were feasible and accessible for my project. This helped me better plan my development process. My collaboration with ChatGPT focused on  addressing technical questions during the initial stages of my project. Because it’s my first time navigating how to program a design I made in Figma, I supplemented the online research I did with prompts on ChatGPT to better understand how to evaluate my design from a technical standpoint. While I authored the project components, I occasionally referred to AI-generated suggestions for troubleshooting or refining implementation details. For example, ChatGPT provided suggestions for structuring CSS animations, but I evaluated and modified these ideas to fit the scope of my design and coding style. By critically assessing the AI's suggestions, I ensured that the final design aligned with my goals while maintaining originality in my execution. Using ChatGPT helped me understand specific programming challenges in a digestible way, which allowed me to focus on creative design decisions. However, I found that AI’s suggestions always failed to generate a response that aligned with not only the project’s goals but also my vision for my portfolio, especially when addressing more nuanced design or usability considerations. I don’t think it can teach skills, which is why in some ways using GenAI makes it actually more difficult to program. This required me to critically evaluate the outputs and adapt them to fit the context of my work. Overall, ChatGPT made the technical aspects of the project more approachable, but it also reinforced the importance of balancing AI support with my own problem-solving and creative input.

Usage Experiences by Project Aspects

Feel free to edit the column _ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:

Usage: Whether you used / did not use this tool for the aspect. Enter [Yes]
Productivity: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].
Tool Name: ChatGPT	
Ratings	
Design: Yes 3
plan: Yes 2
Write code: No 1
Debug: Yes 5

Usage Reflection:

Impact on your design and plan:
It matched my expectations and plan in FP2 in that it helped clarify technical questions early on. For example, ChatGPT guided me on how to evaluate whether certain design elements, like fonts or animations, were technically feasible, which shaped my initial planning.

It did not match my expectations and plan in FP2 in that its suggestions often needed further refinement to fit my unique design goals. For example, while ChatGPT proposed some animation structures, they lacked usability considerations and required significant adjustment on my part to align with my user experience vision.

GenAI tool did/did not influence my final design and implementation plan because … For example,


Use patterns:
I accepted the generations when they provided solutions to debugging. 

ChatGPT: this tool once suggested … but I modified/rejected the suggestion because … For example, ChatGPT once suggested adding multiple hover effects to my timeline but I rejected this because my users in my testing found it distracting. Instead, I simplified the hover interaction to focus on clrity and usabilitiy.


Pros and cons of using GenAI tools
Pros: helps with debugging and understanding technical feasibilitiy in a digestible way, especially in the beginning stages of a project.

Cons: Suggestions lack nuance in terms of usability and alignment with my needs and goals, as well as demanding more time to understand their approach to generating code alternatives.

Usage Log


Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

ChatGPT / Gemini: share the anonymous link to all of your chat histories relevant to this project
GitHub Copilot (VSCode): export chat histories relevant to this project.

![ChatGPT screenshots](images/chatgpt-1.png)
![ChatGPT screenshots](images/chatgpt-2.png)
![Unable to share link screenshot](images/chatgpt-screenshot.png)



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




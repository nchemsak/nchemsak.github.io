# The Static Web HTML + CSS Mastery Exercise
### Create a site for your personal branding that will showcase your work and be used as part of your graduation self-marketing.
## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below. It doesn't matter what directory you are currently in.
Run the following command in your terminal:

```bash
mkdir -p ~/workspace/quizzes/static-web/html && cd $_
```

This will create a project folder and cd you into it.
When you are ready to start the quiz, request the Github Classroom link from your instructor  
+ Once your repository is created on GitHub, copy the list of commands under **"..or create a new repository on the command line"** by clicking on the clipboard icon  
+ Paste the commands into your terminal. This will create a README.md file, add it, commit it, connect your local reop to GitHub, and set you up to push up the changes. (If the last command, `git push origin master` isn't automatically executed, hit enter/return to run it).

All of your quiz work should be on a branch, NOT on master. To do this, type:

```bash
git checkout -b quiz
touch index.html
mkdir css && touch css/quiz.css
mkdir images
```
You are now ready to work in the `quiz` branch.

When your work in complete, push up the branch (`git push origin quiz`) and submit the pull request on Github.


## Instructions

Create a site for your own personal branding. Keep in mind this is an HTML exercise, however it is also the beginning of your portfolio.  We will be focusing on the HTML structure and syntax of your code. Keep styles simple. 


### Content and Technical Requirements
1. Title - make it meaningful.
1. Header element `<h1>` - This is the main headline; include your name and what this page is.
1. Photo
1. Article element containing your bio
1. Article element with links to resources or sites you like
1. Article element with two sections for future projects (placeholders)
1. Footer element with email and professional social media links; Github, twitter, LinkedIn, etc.
1. Semantic mark-up for all major elements.
1. 1. Validate your html page with W3 validator: https://validator.w3.org/
1. Appropriate folder structure: images, css.


## Notes
Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines the content.

Page Titles and Headings: http://meetcontent.com/blog/introducing-content-page-titles-headings/

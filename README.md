[![Master-Portfolio](src/assets/img/mplogo.png)](https://github.com/vimalverma558/Master-Portfolio)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff93814b-ada6-4afa-9055-2b35043eb36c/deploy-status)](https://app.netlify.com/sites/vima/deploys)
[![GitHub forks](https://img.shields.io/github/forks/vimalverma558/Master-Portfolio??style=flat)](https://github.com/vimalverma558/Master-Portfolio/network/members)
[![GitHub Repo stars](https://img.shields.io/github/stars/vimalverma558/Master-Portfolio??style=flat)](https://github.com/vimalverma558/Master-Portfolio/stargazers)
[![GitHub](https://img.shields.io/github/license/Vimalverma558/Master-portfolio)](https://github.com/vimalverma558/Master-Portfolio/blob/master/LICENSE)
![GitHub top language](https://img.shields.io/github/languages/top/vimalverma558/master-portfolio)
![GitHub repo size](https://img.shields.io/github/repo-size/vimalverma558/master-portfolio)
[![GitHub issues](https://img.shields.io/github/issues/vimalverma558/Master-portfolio)](https://github.com/vimalverma558/Master-Portfolio/issues)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fvima.netlify.app%2F)](https://vima.netlify.app/)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/vimalverma558/Master-portfolio/react)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/vimalverma558/Master-portfolio/gh-pages)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/vimalverma558/master-portfolio)
![GitHub contributors](https://img.shields.io/github/contributors/vimalverma558/master-portfolio)
[![Run on Repl.it](https://repl.it/badge/github/vimalverma558/Master-Portfolio)](https://repl.it/github/vimalverma558/Master-Portfolio)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/vimalverma558/Master-Portfolio)
[![Website](https://img.shields.io/website?style=for-the-badge&up_message=Demo&url=https%3A%2F%2Fvima.netlify.app%2F)](https://vima.netlify.app/)
[![Website](https://img.shields.io/website?style=for-the-badge&up_message=Blog&url=https%3A%2F%2Fvima.netlify.app%2F)](https://dev.letskhabar.com/post/master-portfolio)




# Master-Portfolio
- A clean, beautiful, responsive and 100% customizable portfolio template for Developers!
- It can List your all Projects & Certificate
- it can Also list your All Dev.to articles Using Api (if you have set `BlogData.show_Blog: true` in `src/Name.js`)
- The website is completely built on `react-js` framework of `javascript`🔥.
- In this project, there are basically Personal Information that you need to change to customize this to anyone else's portfolio
- You will find `src/Name.js` file which contains the complete information about the user. The file looks something like below
- 
    ``` 
    const greeting = {
        title: "Hi, I'm Your Name",
        logo_name: "Name",
        logo_img_show: false, // if true than show image(logo) in home page instant of text(logo)
        logo_img: "https://master-portfolio.js.org/src/assets/img/mplogo.png",
        full_name: "your name",
        email: "email id",
        subTitle:
        "I'm a student pursuing {Course} in {department} from {university}. I'm a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage. Apart from that I also love to guide and mentor newbies. I'm currently into Web Development and working on my MERN Website",
        Programming: true,  // if true, Show 'Programming' section in home page, if false than not show
        developer: true,  // if true, Show 'Full Stack Development' section in home page, if false than not show
        designer: true,  // if true, Show 'designer' section in home page, if false than not show
        cloud_infra_architecture:true,  // if true, Show 'cloud_infra_architecture' section in home page, if false than not show
        data_Science: true,  // if true, Show 'data_Science' section in home page, if false than not show
        ml_ai: true,  // if true, Show 'ml_ai' section in home page, if false than not show
        Robotic: true,  // if true, Show 'Robotic' section in home page, if false than not show
        gamedev: true,  // if true, Show 'gamedev' section in home page, if false than not show
    };
    const BlogData = {
        // this show your dev.to blog in your Portfolio blog
        show_Blog: true,  // if true it Show your DEV.to article in Blog Section, if false than Blog Section(nav) convert to skill Section(nav).
        devto_username: "vimal"
    };
    const socialMedia = {
        facebook: "Your facebook link",
        twitter: "Your twitter link",
        instagram: "Your instagram link",
        github: "Your github link",
        gitlab: "Your gitlab link",
        devto: "Your devto link",
        mailto: "mailto:Your mail"
    };
    const about = {
        School: "Your School Name",
        College: "Your College Name",
        university: "Your university Name",
        Home: "Your Home city"
    };
    const projects = [
    {
        id: "1",
        name: "project 1",
        Description: "this is Description",
        Code_Link: "this is code link",
        Live_link: "this is Live link",
        tool_used: "html,css,js", 
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    .........
    ]
    ```
[![Master-Portfolio](src/assets/img/mp-web.png)](https://vima.netlify.app/)
[![Website](https://img.shields.io/website?style=for-the-badge&up_message=Demo&url=https%3A%2F%2Fvima.netlify.app%2F)](https://vima.netlify.app/)
[![Website](https://img.shields.io/website?style=for-the-badge&up_message=Blog&url=https%3A%2F%2Fvima.netlify.app%2F)](https://dev.letskhabar.com/post/master-portfolio)




# You can Customize it to make your own portfolio by Three Method ✏️
- [Using Template](#using-template)
- [Using Netfify deploy](#using-netlify-deploy)
- [Using Vercel deploy](#using-vercel-deploy)

![github](src/assets/img/github.png)

## Using Template
- Click on Use this template ☝️
- clone `git clone https://github.com/{your github username}/{repository name}`
- To download required dependencies to your system, navigate to the directory where the cloned repository resides and execute following command: `npm install`
- change "homepage " to `https://{your github username}.github.io/{repository name}` in `package.json` 
- Edit `src/Name.js` 
- You can check it using `npm start`, it will open the website locally on your browser.
- Commit change and push.
- Once you are done with your setup and have successfully completed all steps above, 
- ### Now you have to deploy that portfolio website
  - You can use Netlify, Vercel & gh-pages
  - To deploy by gh-pages
    - Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the build files to that branch.
    -  🎉 Your Portfolio website is ready.🥳 And live at `https://{your github username}.github.io/{repository name}`.



## Using Netlify deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vimalverma558/Master-Portfolio)
- Click on Deploy button ☝️
- <details>
  <summary>Click on connect to Github</summary>
  <img alt="m1" src="src/assets/img/m1.png" />
  </details>
- <details>
  <summary>Click on Authorize netlify</summary>
  <img alt="m2" src="src/assets/img/m2.png" />
  </details>
- <details>
  <summary>Chose a github repository name and click on Save and Deploy</summary>
  <img alt="m3" src="src/assets/img/m3.png" />
  </details>
- <details>
  <summary>Your portfolio website is live 🚀</summary>
  <img alt="m4" src="src/assets/img/m4.png" />
  </details> 
- Those step ☝️ create a repository in your github account, go to that repository
- Edit `src/Name.js` 
- Commit change and push 🎉 Your Portfolio website is ready.🥳


## Using Vercel deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvimalverma558%2FMaster-Portfolio)
- Click on Deploy button ☝️
- <details>
  <summary>Type a Project name and click on continue</summary>
  <img alt="m1" src="src/assets/img/v1.png" />
  </details>
- <details>
  <summary>Install Vercel for Github(If not already) </summary>
  <img alt="m2" src="src/assets/img/v2.png" />
  </details>
- <details>
  <summary>Chose a github repository name and click on continue</summary>
  <img alt="m3" src="src/assets/img/v3.png" />
  </details>
- <details>
  <summary>Verify Framework preset is Create React App and Click on Deploy</summary>
  <img alt="m4" src="src/assets/img/v4.png" />
  </details> 
- <details>
  <summary>Your portfolio website is live 🚀</summary>
  <img alt="m4" src="src/assets/img/v5.png" />
  </details> 
- Those step ☝️ create a repository in your github account, go to that repository
- Edit `src/Name.js` 
- Commit change and push 🎉 Your Portfolio website is ready.🥳




## Contributing
Please see our [contributing.md](./CONTRIBUTING.md).




## Awesome contributors ✨

<a href="https://github.com/vimalverma558/Master-Portfolio/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=vimalverma558/Master-Portfolio" />
</a>



## References 👏🏻
- Master-Portfolio logo Design by [Vimal](https://github.com/vimalverma558).
- Art Customized by [Vimal](https://github.com/vimalverma558) and icon by icon8
- contributors image Made with [contributors-img](https://contributors-img.web.app).
- MIT License 

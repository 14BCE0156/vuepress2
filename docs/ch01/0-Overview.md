---
title: Overview of GitHub
---

# Overview of GitHub

Git is an open-source version control system developed in 2005. Git is an example of a Distributed Version Control System (DVCS) and works well on a wide range of operating systems and Integrated Development Environments (IDEs). Git allows users to save repositories, a collection of code from a current project or directory, and manage their source code history locally.
GitHub is a code-hosting platform for version control and collaboration. Users are able to publish commits of their code (Git repositories) and collaborate with others using GitHub.

#### <ins>Ford Specific</ins>

As of Jan 14, 2020, a reminder to all IT Professionals, if you are using GitHub for software development that is related to Ford or in support of a Ford project, or if you are using your [ford.com](https://www.ford.com/) email address with any GitHub account, you MUST use [github.ford.com](https://github.ford.com/) for all of your development work in order to comply with Company policies regarding information security.  Otherwise, you may be in violation of the Information Security Policy.  If you believe that you have a compelling business reason to utilize the open source community github.com for Company business, then you will need to submit an [exception request](https://azureford.sharepoint.com/sites/SDE/Lists/GitHubException/NewForm.aspx) .

## Some of the GitHub’s Features

<ins>**1. Simple Project Management**</ins>

GitHub platform helps to coordinate project managers and developers come together to track and upgrade their works. So, the project looks transparent and stay on schedule.

<ins>**2. Secure and Safe Packages**</ins>

Privately packages can be publicized with in the team. These packages can be implemented by downloading them from Ford GitHub.

<ins>**3. Productive Team Management**</ins>

It helps all the team members stay connected and organized. Pull request and Issues options help the team to focus on the code.

<ins>**4. Increased coding quality**</ins>

Organizations use pull requests to examine, create, and suggest new code. Before making any source code changes, team members can discuss any implementations and suggestions using these.

<ins>**5. Higher Code Safety**</ins>

GitHub makes use of specific tools to hunt for and analyze code flaws that other tools typically ignore. Teams of developers from around the world work together to protect the whole software supply chain.

<ins>**6. Hosting Code Easily**</ins>

The documentation and all the code are in one location. On GitHub, there are millions of repositories, and each one has its own set of tools for hosting and disseminating code.

## Best Practice

The best practices used in the sector are illustrated by a variety of examples provided by the Ford GitHub Team.

* **Avoid git pushing directly to master:**

It is always a good idea to setup git branch protection to prevent direct commits and ensure your main branch code is deployable at all times, regardless of if you're using Gitflow or other git branching structure. Pull requests should be used to push every commit to the master branch.

* **Prevent committing code as an unknown author:**

Make sure the email address used to configure your Git client is accurate and associated to your GitHub user. During code reviews, look over your pull requests for unauthorized commits.

* **To facilitate code reviews, define code owners as follows:**

To decide which teams and individuals are picked at random to evaluate the repository, use the Code Owners functionality.

* **Don't disclose information into source control:**

Account passwords, API keys, private tokens, and SSH keys are examples of secrets, secret keys, or secret credentials. They should not be checked into your source code.

* **Turn on security alerts:**

Another new feature on GitHub is security alerts. You can learn more about them by reading [here](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts). However, the key purpose is that GitHub now tracks reported security vulnerabilities in some dependencies and will even recommend fixes for you.

* **Maintain branches to date:**

You failed to maintain your branch in sync with the branch into which you're attempting to merge. There were many commits, some of which conflict with your changes, so you now need to spend time and effort solving a needless number of merge conflicts.

* **Remove inactive users from GitHub:**

Ensure that contributors who have stopped contributing to your codebase are removed from your organization.

Since developers work with Git and GitHub frequently, making an investment to enhance your GitHub practices makes a lot of sense. Implementing the methodologies stated in this guide could help the team increase developer productivity while reducing security risks.
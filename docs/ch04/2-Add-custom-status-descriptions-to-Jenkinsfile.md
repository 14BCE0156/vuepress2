# Add custom status descriptions to Jenkinsfile

The purpose of this project is to allow devops teams across Ford to add custom status descriptions to their Jenkinsfiles. Messages can be added at any stage in order to help with debugging. In the past developers would have to navigate between their Jenkins builds and Github repositories to edit their code and check build statuses. By implementing custom status check descriptions the developer can stay within the Github environment to do all debugging.

## Application Guide
::: tip Prerequisites
* Ford GitHub Instance
* Ford Jenkins Instance
:::

::: tip Required Plugins:
* Credentials Plugin
* GitHub API Plugin
* Pipeline GitHub Notify Step Plugin
* Hudson Post Build Task
:::

Follow the example Jenkinsfile pipeline which can be found at [https://github.ford.com/Ford/custom-github-jenkins-descriptions](https://github.ford.com/Ford/custom-github-jenkins-descriptions)

In this pipeline, there is a customMessage at each stage. If a failure occurs, the custom failure message will display in the Github Checks. These messages could be placed anywhere in your Jenkinsfile for debugging purposes. A line has been included in this example that purposefully causes a failure to occur. Experiment with this file to experience what failure and success messages look like.

Other post build notifications are optional and can be found at [https://jenkins.io/doc/book/pipeline/syntax/](https://jenkins.io/doc/book/pipeline/syntax/). Such status options include aborted, failure, success, unstable, unsuccessful.

More githubNotify specifics can be found [https://jenkins.io/doc/pipeline/steps/pipeline-githubnotify-step/](https://jenkins.io/doc/pipeline/steps/pipeline-githubnotify-step/) with other settings you can personalize with.

### Essential Elements:

* Variable for updated custom message (customMessage in example)
    * You may have more than one. For example, a separate variable for successMessage and failureMessage.
* Custom message updates throughout or in particular areas being debugged
    * These assignments must be within a script
* Post => success/failure => githubNotify
* githubApiUrl, context, description, status
    * If you do not include the githubApiUrl, your message may try to be redirected to [https://github.com](https://github.com) instead of [https://github.ford.com](https://github.ford.com)
* Setup credentials for plugin authentication. More information about Jenkins/GitHub integration at GitHub to Jenkins Integration
    * You should have your own credentials for your project and use global team credentials for the integration.
Examples:

Below are examples of a successful message and a failure message:

![](./assets/Jenkinsfile_successMessage.jpg)
![](./assets/Jenkinsfile_failureMessage.jpg)
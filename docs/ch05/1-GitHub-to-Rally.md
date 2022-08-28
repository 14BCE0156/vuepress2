# GitHub to Rally Integration    

::: tip Integration of GitHub and Rally can be brokered via Tasktop
[https://azureford.sharepoint.com/sites/PlanningTools/Tasktop/Pages/Rally---Github.aspx](https://azureford.sharepoint.com/sites/PlanningTools/Tasktop/Pages/Rally---Github.aspx)
:::

### GitHub Commits > Rally Changesets Integration
Tasktop integration between GitHub and Rally allows developers to tie commit and pull request activity to specific Rally work items. This is done through the creation of a changeset artifact in Rally. The purpose of this changeset is not to duplicate data from GitHub. Instead it creates a link to GitHub, providing Rally users with an easy way to see all GitHub commits and pull requests associated with that work item. 

Once this integration is setup a properly formed commit or pull request message in GitHub will create a changeset in Rally and associate that changeset with a user story, defect or task. 

To create a changeset the commit or pull request message must contain at least one valid artifact ID formatted as US###, TA### or DE### (example: US18467 for a user story, TA39475 for a task or DE3948 for a defect). This will create a changeset for each of the corresponding artifacts, as long as those artifacts are in Rally projects we have mapped as part of integration setup. If you include multiple IDs then a changeset will be created for each artifact. Changesets can be created in a few different situations:
* Enter artifact IDs into the commit message to tie a commit to a user story, defect or task
* Include artifact IDs when opening a pull request to create a changeset denoting that a pull request was opened
* Enter artifact IDs when merging a pull request to create a changeset denoting that a pull request was merged

Another feature of the integration is that you can use Smart Commits to update the completion status of a User Story, Defect, or Task. Using the “#completed" (Case Insensitive) and Rally ID in the Smart Commit Message, will move the scheduled state of that Rally Artifact to complete.
